import { useState, useEffect } from 'react';
import SearchForm from './components/SearchForm';
import WeatherDisplay from './components/WeatherDisplay';
import ErrorMessage from './components/ErrorMessage';
import { getWeatherData } from './api/weatherApi';

/**
 * Główny komponent aplikacji pogodowej
 * @returns {JSX.Element} - Element aplikacji
 */
function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  /**
   * Obsługa wyszukiwania pogody dla miasta
   * @param {string} city - Nazwa miasta
   */
  const handleSearch = async (city) => {
    setLoading(true);
    setError('');
    
    try {
      const data = await getWeatherData(city);
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-md mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Aplikacja Pogodowa</h1>
          <p className="text-gray-600">Sprawdź aktualną pogodę w dowolnym mieście</p>
        </header>
        
        <main>
          <SearchForm onSearch={handleSearch} />
          
          <ErrorMessage message={error} />
          
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : weatherData ? (
            <WeatherDisplay weatherData={weatherData} />
          ) : !error && (
            <div className="text-center py-12 text-gray-500">
              <p>Wpisz nazwę miasta, aby zobaczyć pogodę</p>
            </div>
          )}
        </main>
        
        <footer className="mt-12 text-center text-sm text-gray-500">
          <p> {new Date().getFullYear()} Aplikacja Pogodowa</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
