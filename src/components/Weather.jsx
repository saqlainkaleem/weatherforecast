import WeatherDetails from "./WeatherDetails";
import ForecastWeather from "./ForecastWeather";
import { useState } from "react";
import "./Weather.css";
import "./Search.css";
import Toggle from "./Toggle";
import Logo from "../assets/logo.png";
import { fetchData } from "./api.js";

const Weather = () => {
	const [isCelsius, setIsCelsius] = useState(true);

	const handleToggle = () => {
		setIsCelsius((prevIsCelsius) => !prevIsCelsius);
	};
	const [loading, setLoading] = useState(false);
	const [city, setCity] = useState("");
	const [list, setList] = useState("");
	const [weatherData, setWeatherData] = useState(null);
	const [Fail, setFail] = useState(null);
	const fetchWeatherData = async () => {
		try {
			setLoading(!loading);
			const { data, list, error } = await fetchData(city);
			setWeatherData(data);
			setList(list);
			setFail(error);
		} catch (error) {
			setWeatherData(null);
			setFail(error);
		} finally {
			setLoading(false);
		}
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (city.trim() !== "") {
			return fetchWeatherData();
		} else {
			return;
		}
	};

	return (
		<div className="Container">
			<div className="Nav">
				<img src={Logo} alt="Logo" />
				<Toggle isCelsius={isCelsius} onToggle={handleToggle} />
			</div>
			<div className="input-group">
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						placeholder="Enter city name"
						value={city}
						onChange={(e) => setCity(e.target.value)}
						required
					/>
					<button type="submit" disabled={loading}>
						{loading ? "Fetching..." : "Get Weather"}
					</button>
				</form>
			</div>
			{Fail && <p style={{ color: "red", textAlign: "center" }}>{Fail}</p>}
			{weatherData && (
				<WeatherDetails weatherData={weatherData} isCelsius={isCelsius} />
			)}
			{list && <ForecastWeather list={list} isCelsius={isCelsius} />}
		</div>
	);
};

export default Weather;
