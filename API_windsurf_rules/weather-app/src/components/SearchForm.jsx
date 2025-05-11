import { useState } from 'react';

/**
 * Komponent formularza wyszukiwania pogody
 * @param {Object} props - Właściwości komponentu
 * @param {Function} props.onSearch - Funkcja wywoływana po wyszukiwaniu
 * @returns {JSX.Element} - Element formularza
 */
const SearchForm = ({ onSearch }) => {
  const [city, setCity] = useState('');
  
  /**
   * Obsługa zmiany wartości pola tekstowego
   */
  const handleInputChange = (e) => {
    setCity(e.target.value);
  };
  
  /**
   * Obsługa wysłania formularza
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city);
  };
  
  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          placeholder="Wpisz nazwę miasta..."
          value={city}
          onChange={handleInputChange}
          className="input-field flex-grow"
          required
        />
        <button 
          type="submit" 
          className="button whitespace-nowrap"
        >
          Sprawdź pogodę
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
