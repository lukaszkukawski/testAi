import { formatTemperature, formatDate, getWeatherIconUrl } from '../utils/formatters';

/**
 * Komponent wyświetlający dane pogodowe
 * @param {Object} props - Właściwości komponentu
 * @param {Object} props.weatherData - Dane pogodowe
 * @returns {JSX.Element} - Element wyświetlający dane pogodowe
 */
const WeatherDisplay = ({ weatherData }) => {
  // Wczesny return jeśli brak danych
  if (!weatherData) return null;
  
  const { name, main, weather, dt } = weatherData;
  const { temp, feels_like, humidity } = main;
  const { description, icon } = weather[0];
  
  return (
    <div className="weather-card">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
          <p className="text-sm text-gray-500">{formatDate(dt)}</p>
        </div>
        <div className="flex items-center">
          <img 
            src={getWeatherIconUrl(icon)} 
            alt={description} 
            className="w-16 h-16"
          />
        </div>
      </div>
      
      <div className="mt-4">
        <div className="flex items-end gap-2">
          <span className="text-5xl font-bold text-gray-800">
            {formatTemperature(temp)}
          </span>
          <span className="text-gray-500 mb-1">
            Odczuwalna: {formatTemperature(feels_like)}
          </span>
        </div>
        <p className="text-lg capitalize text-gray-700 mt-1">{description}</p>
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div className="flex items-center gap-2">
            <span className="text-gray-600">Wilgotność:</span>
            <span className="font-medium">{humidity}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
