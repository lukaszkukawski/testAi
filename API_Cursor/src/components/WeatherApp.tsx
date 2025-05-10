import React, { useState } from 'react';
import { getWeatherByCity } from '../api/weatherService';
import WeatherDisplay from './WeatherDisplay';
import type { WeatherData } from '../types/weather';
import '../styles/WeatherApp.css';

/**
 * Main Weather Application component
 */
const WeatherApp: React.FC = () => {
  const [city, setCity] = useState<string>('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * Handles form submission to fetch weather data
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate if city is not empty
    if (!city.trim()) {
      setError('Wprowadź nazwę miasta.');
      return;
    }
    
    // Reset state before fetching
    setError(null);
    setLoading(true);
    
    try {
      const data = await getWeatherByCity(city);
      setWeatherData(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Wystąpił nieznany błąd.');
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="weather-container">
      <h1>Aplikacja Pogodowa</h1>
      
      <form onSubmit={handleSubmit} className="search-container">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Wprowadź nazwę miasta"
          aria-label="Nazwa miasta"
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Ładowanie...' : 'Sprawdź pogodę'}
        </button>
      </form>
      
      {error && <div className="error-message">{error}</div>}
      
      {loading && <div className="loading">Pobieranie danych pogodowych...</div>}
      
      {weatherData && !loading && !error && (
        <WeatherDisplay weatherData={weatherData} />
      )}
    </div>
  );
};

export default WeatherApp; 