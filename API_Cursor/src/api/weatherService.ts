import axios from 'axios';
import type { WeatherData } from '../types/weather';

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

/**
 * Fetches weather data for a given city name
 */
export const getWeatherByCity = async (city: string): Promise<WeatherData> => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric', // Get temperature in Celsius
        lang: 'pl' // Get descriptions in Polish
      }
    });
    
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(
        error.response.status === 404
          ? 'Nie znaleziono miasta. Sprawdź pisownię i spróbuj ponownie.'
          : 'Wystąpił błąd podczas pobierania danych pogodowych.'
      );
    }
    throw new Error('Nie można połączyć się z serwisem pogodowym. Sprawdź połączenie z internetem.');
  }
}; 