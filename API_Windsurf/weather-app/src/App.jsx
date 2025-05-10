import { useState } from 'react'
import WeatherCard from './components/WeatherCard'
import { getWeather } from './api/weatherApi'
import './App.css'

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!city.trim()) return;

    setLoading(true);
    setError(null);
    
    try {
      const data = await getWeather(city);
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="mb-4">
            <div className="flex items-center border-b border-gray-300 py-2">
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city name"
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              />
              <button
                type="submit"
                disabled={loading}
                className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded disabled:opacity-50"
              >
                {loading ? 'Loading...' : 'Check Weather'}
              </button>
            </div>
          </form>
          
          <WeatherCard weatherData={weatherData} error={error} />
        </div>
      </div>
    </div>
  )
}

export default App
