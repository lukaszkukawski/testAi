import React from 'react';
import type { WeatherData } from '../types/weather';

/**
 * Component displaying the weather information
 */
interface WeatherDisplayProps {
  weatherData: WeatherData;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weatherData }) => {
  // Early return if no weather data
  if (!weatherData) {
    return null;
  }

  const { name, main, weather } = weatherData;
  const weatherDescription = weather[0]?.description || '';
  const weatherIcon = weather[0]?.icon || '';
  const iconUrl = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

  return (
    <div className="weather-display">
      <h2>{name}</h2>
      <div className="weather-info">
        <div className="temperature">{Math.round(main.temp)}°C</div>
        <img 
          src={iconUrl} 
          alt={weatherDescription} 
          className="weather-icon" 
        />
        <div className="description">{weatherDescription}</div>
      </div>
    </div>
  );
};

export default WeatherDisplay; 