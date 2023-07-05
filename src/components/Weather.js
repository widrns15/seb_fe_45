import React, { useEffect, useState } from "react";
import styled from "styled-components";

function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const onGeoOk = (position) => {
      const API_KEY = process.env.REACT_APP_CLIENT_ID;
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setWeatherData(data);
        })
        .catch((error) => {
          setError(error.message);
        });
    };

    const onGeoError = (error) => {
      setError("Can't find you. No weather for you.");
    };

    navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!weatherData) {
    return <WeatherSection>Loading...</WeatherSection>;
  }

  return (
    <WeatherSection>
      🌈{" "}
      {`${weatherData.weather[0].main} / ${Math.floor(
        weatherData.main.temp
      )}°C`}
      <br />
      📍 {weatherData.name}
    </WeatherSection>
  );
}

const WeatherSection = styled.div`
  position: absolute;
  top: 20px;
  right: 25px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export default Weather;
