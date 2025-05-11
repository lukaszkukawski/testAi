import { WeatherData, WeatherError } from '../types/weather';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeather = async (city: string): Promise<WeatherData> => {
  try {
    const response = await fetch(
      `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Nie udało się pobrać danych pogodowych');
    }
    
    return await response.json();
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : 'Wystąpił nieoczekiwany błąd'
    );
  }
};
