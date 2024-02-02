const apiKey = "API_KEY";

const fetchData = async (city) => {
	try {
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
		);

		if (!response.ok) {
			throw new Error(`City ${city} not found`);
		}

		const data = await response.json();
		const lat = data.coord.lat;
		const lon = data.coord.lon;

		const forecastdata = await fetch(
			`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
		);

		if (!forecastdata.ok) {
			throw new Error(`Forecast data for ${city} not found`);
		}

		const fcast = await forecastdata.json();
		const list = fcast.list;

		return { data, list, error: null };
	} catch (error) {
		return {
			list: null,
			data: null,
			error: error.message || "Error fetching weather data",
		};
	}
};

export { fetchData };
