import "./ForecastWeather.css";

const ForecastWeather = ({ isCelsius, list }) => {
	const temp1 = list[8].main.temp.toFixed(2);
	const temp2 = list[16].main.temp.toFixed(2);
	const temp3 = list[24].main.temp.toFixed(2);
	const temp4 = list[32].main.temp.toFixed(2);
	const temp5 = list[39].main.temp.toFixed(2);

	const convertToFahrenheit = (temp) => {
		return ((temp * 9) / 5 + 32).toFixed(2);
	};
	const dateformat = (sdate) => {
		const dateObject = new Date(sdate);

		const day = dateObject.getDate();
		const month = dateObject.toLocaleString("default", { month: "short" });
		const year = dateObject.getFullYear();

		const formattedDate = `${day} ${month} ${year}`;
		return formattedDate;
	};
	const temperatureUnit = isCelsius ? "°C" : "°F";
	return (
		<div className="Container">
			<p
				style={{
					fontSize: "20px",
					paddingLeft: "0.5rem",
					paddingTop: "0.5rem",

					boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)",
				}}
			>
				DAILY FORECAST
			</p>
			<div className="forecastContainer">
				<div className="forecastCard">
					<span className="temp">
						{isCelsius ? temp1 : convertToFahrenheit(temp1)}
						{temperatureUnit}
					</span>
					<img
						src={`http://openweathermap.org/img/w/${list[8].weather[0].icon}.png`}
						alt="Weather Icon"
					/>
					<span className="description">{list[8].weather[0].description}</span>
					<p className="date">{dateformat(list[8].dt_txt)}</p>
				</div>
				<div className="forecastCard">
					<span className="temp">
						{isCelsius ? temp2 : convertToFahrenheit(temp2)}
						{temperatureUnit}
					</span>
					<img
						src={`http://openweathermap.org/img/w/${list[16].weather[0].icon}.png`}
						alt="Weather Icon"
					/>
					<span className="description">{list[16].weather[0].description}</span>
					<p className="date">{dateformat(list[16].dt_txt)}</p>
				</div>
				<div className="forecastCard">
					<span className="temp">
						{isCelsius ? temp3 : convertToFahrenheit(temp3)}
						{temperatureUnit}
					</span>
					<img
						src={`http://openweathermap.org/img/w/${list[24].weather[0].icon}.png`}
						alt="Weather Icon"
					/>
					<span className="description">{list[24].weather[0].description}</span>
					<p className="date">{dateformat(list[24].dt_txt)}</p>
				</div>
				<div className="forecastCard">
					<span className="temp">
						{isCelsius ? temp4 : convertToFahrenheit(temp4)}
						{temperatureUnit}
					</span>
					<img
						src={`http://openweathermap.org/img/w/${list[32].weather[0].icon}.png`}
						alt="Weather Icon"
					/>
					<span className="description">{list[32].weather[0].description}</span>
					<p className="date">{dateformat(list[32].dt_txt)}</p>
				</div>
				<div className="forecastCard">
					<span className="temp">
						{isCelsius ? temp5 : convertToFahrenheit(temp5)}
						{temperatureUnit}
					</span>
					<img
						src={`http://openweathermap.org/img/w/${list[39].weather[0].icon}.png`}
						alt="Weather Icon"
					/>

					<span className="description">{list[39].weather[0].description}</span>
					<p className="date">{dateformat(list[39].dt_txt)}</p>
				</div>
			</div>
		</div>
	);
};

export default ForecastWeather;
