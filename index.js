<<<<<<< HEAD
const studentName = "Andi";

const assignment = 80;
const midterm = 75;
const finalExam = 90;

const finalScore = (assignment * 0.3) + (midterm * 0.3) + (finalExam * 0.4);


const status = finalScore >= 70 ? "Passed" : "Failed";
const category = finalScore >= 85 ? "Excellent" : finalScore >= 70 ? "Good" : "Failed";

const output = `
    Student: ${studentName}
    Assignment: ${assignment}
    Midterm: ${midterm}
    Final Exam: ${finalExam}
    Final Score: ${finalScore}
    Status: ${status}
    Category: ${category}
`.trim();

console.log(output);
=======
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
>>>>>>> bb0fb76aaeea50808c8e2667bf53ba337fa39e11
