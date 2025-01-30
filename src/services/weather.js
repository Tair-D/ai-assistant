const axios = require('axios');

async function getWeather(location) {
	const response = await axios.get(
		`http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${location}`
	);
	const weatherData = response.data;
	return `Current weather in ${location}: ${weatherData.current.temp_c}°C, ${weatherData.current.condition.text}`;
}

module.exports = { getWeather };