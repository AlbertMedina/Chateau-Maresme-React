import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";

const weatherIcons = {
  0: "☀️",
  1: "🌤️",
  2: "⛅",
  3: "☁️",
  45: "🌫️",
  48: "🌫️",
  51: "🌦️",
  53: "🌧️",
  55: "🌧️",
  61: "🌧️",
  63: "🌧️",
  65: "🌧️",
  71: "❄️",
  73: "❄️",
  75: "❄️",
  95: "⛈️",
  99: "⛈️",
};

export default function WeatherCard({ latitude, longitude }) {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&timezone=auto`;
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("Error obtaining clima.");
        const data = await response.json();
        setWeather(data.current_weather);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchWeather();
  }, [latitude, longitude]);

  if (error || !weather) {
    return <></>;
  }

  const weatherText = weatherIcons[weather.weathercode] || "?";

  return (
    <Card
      sx={{
        display: "inline-block",
        borderRadius: 20,
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
        }}
      >
        <Typography variant="h4" lineHeight={1}>
          {weatherText}
        </Typography>
        <Typography variant="h6" lineHeight={1}>
          {weather.temperature}°C
        </Typography>
      </CardContent>
    </Card>
  );
}
