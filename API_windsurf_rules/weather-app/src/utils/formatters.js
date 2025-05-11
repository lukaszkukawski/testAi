/**
 * Funkcje pomocnicze do formatowania danych
 */

/**
 * Formatuje temperaturę do jednego miejsca po przecinku
 * @param {number} temp - Temperatura w stopniach Celsjusza
 * @returns {string} - Sformatowana temperatura
 */
export const formatTemperature = (temp) => {
  return `${temp.toFixed(1)}°C`;
};

/**
 * Formatuje datę na podstawie timestampu
 * @param {number} timestamp - Timestamp w sekundach
 * @returns {string} - Sformatowana data
 */
export const formatDate = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString('pl-PL', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

/**
 * Generuje URL do ikony pogodowej
 * @param {string} iconCode - Kod ikony z API
 * @returns {string} - URL do ikony
 */
export const getWeatherIconUrl = (iconCode) => {
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
};
