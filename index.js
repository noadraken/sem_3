import axios from 'axios';

async function getWeather(city) {
  try {
    const url = `https://wttr.in/${city}?format=j1`;
    const response = await axios.get(url);
    const current = response.data.current_condition[0];

    console.log(`\nWeather in ${city}:`);
    console.log(`Temperature: ${current.temp_C}°C`);
    console.log(`Condition: ${current.weatherDesc[0].value}`);
    console.log(`Humidity: ${current.humidity}%\n`);
  } catch (error) {
    console.error('Error fetching weather data:', error.message);
  }
}

getWeather('New York');