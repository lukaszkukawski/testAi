/**
 * Moduł obsługujący zapytania do API pogodowego
 */

// Pobieranie klucza API z zmiennych środowiskowych
const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

/**
 * Pobiera dane pogodowe dla podanego miasta
 * @param {string} city - Nazwa miasta
 * @returns {Promise} - Promise z danymi pogodowymi
 */
export const getWeatherData = async (city) => {
  try {
    // Wczesny return w przypadku braku miasta
    if (!city.trim()) {
      throw new Error('Nazwa miasta nie może być pusta');
    }
    
    const response = await fetch(
      `${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}&lang=pl`
    );
    
    // Wczesny return w przypadku błędu
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('Nie znaleziono miasta. Sprawdź pisownię i spróbuj ponownie.');
      }
      throw new Error('Wystąpił problem z pobraniem danych pogodowych.');
    }
    
    return await response.json();
  } catch (error) {
    throw error;
  }
};
