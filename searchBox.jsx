import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./searchBox.css";
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    const [city, setCity] = useState("");
    const [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "12044c561e03ac4d4172571c04c13156";

    const getWeatherInfo = async () => {
        try {
            const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const jsonResponse = await response.json();
            if (jsonResponse.cod !== 200) {
                throw new Error(jsonResponse.message);
            }

            const result = {
                city: jsonResponse.name,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            console.log(result);
            return result;
        } catch (err) {
            console.error("Error fetching weather data:", err);
            setError(true);
            return null; // Return null in case of an error
        }
    };

    const handleChange = (evt) => {
        setCity(evt.target.value);
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        setError(false); // Reset error state
        const newInfo = await getWeatherInfo();
        if (newInfo) {
            updateInfo(newInfo);
        }
        setCity(""); // Clear input after submission
    };

    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                />
                <br /><br />
                <Button type="submit" variant="contained">Search</Button>
                {error && <p style={{ color: "red" }}>No such place exists!</p>}
            </form>
        </div>
    );
}
