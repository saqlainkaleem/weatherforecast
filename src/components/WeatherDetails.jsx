import "./WeatherDetails.css";

const WeatherDetails = ({ isCelsius, weatherData }) => {
	const convertToFahrenheit = (temp) => {
		return (temp * 9) / 5 + 32;
	};
	const getWindDirection = (degrees) => {
		const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
		const index = Math.round(degrees / 45) % 8;
		return directions[index];
	};
	const temperatureUnit = isCelsius ? "°C" : "°F";
	const temp = isCelsius
		? weatherData.main.temp
		: convertToFahrenheit(weatherData.main.temp);
	const tempMin = isCelsius
		? weatherData.main.temp_min
		: convertToFahrenheit(weatherData.main.temp_min);
	const tempMax = isCelsius
		? weatherData.main.temp_max
		: convertToFahrenheit(weatherData.main.temp_max);
	return (
		<div className="container">
			<p className="city">
				<span>{weatherData.name.toUpperCase()}</span>
			</p>
			<div className="current">
				<img
					src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
					alt="Weather Icon"
				/>

				<p className="temp">
					{temp.toFixed(2)} {temperatureUnit}
				</p>
				<p className="desc">
					{weatherData.weather[0].description.toUpperCase()}
				</p>
			</div>
			<div className="details">
				<div>
					<p>
						Min :
						<span>
							{tempMin.toFixed(2)} {temperatureUnit}
						</span>
					</p>
					<p>
						Max :
						<span>
							{tempMax.toFixed(2)} {temperatureUnit}
						</span>
					</p>
				</div>
				<div>
					<p>
						Humidity :<span>{weatherData.main.humidity}% </span>
					</p>
					<p>
						Wind :<span>{weatherData.wind.speed} m/s</span>{" "}
						<span>{getWindDirection(weatherData.wind.deg)}</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default WeatherDetails;
