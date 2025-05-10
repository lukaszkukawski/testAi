import React from 'react';

const WeatherCard = ({ weatherData, error }) => {
  if (error) {
    return (
      <div className="p-6 bg-red-100 rounded-lg shadow-lg">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  if (!weatherData) return null;

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">{weatherData.name}</h2>
      <div className="flex items-center justify-center mb-4">
        {weatherData.weather[0].icon && (
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt={weatherData.weather[0].description}
            className="w-20 h-20"
          />
        )}
      </div>
      <div className="text-center">
        <p className="text-4xl font-bold mb-2">
          {Math.round(weatherData.main.temp)}°C
        </p>
        <p className="text-gray-600 capitalize">
          {weatherData.weather[0].description}
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;
