import SearchBox from "./searchBox";
import InfoBox from "./infoBox";
import { useState } from "react";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze",
    });

    const updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Weather App by Delta</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox 
                city={weatherInfo.city}
                temp={weatherInfo.temp}
                humidity={weatherInfo.humidity}
                tempMin={weatherInfo.tempMin}
                tempMax={weatherInfo.tempMax}
                feelsLike={weatherInfo.feelsLike}
                weather={weatherInfo.weather}
            />
        </div>
    );
}
