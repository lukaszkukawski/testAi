# Aplikacja Pogodowa

Prosta aplikacja pogodowa zbudowana przy użyciu React, Vite i Tailwind CSS.

## Wymagania

- Node.js (wersja 14 lub wyższa)
- npm

## Instalacja

1. Sklonuj repozytorium
2. Zainstaluj zależności:
   ```bash
   npm install
   ```
3. Skopiuj plik `.env` i ustaw swój klucz API z OpenWeatherMap:
   ```bash
   cp .env.example .env
   ```
   Następnie edytuj plik `.env` i dodaj swój klucz API:
   ```
   VITE_WEATHER_API_KEY=twój_klucz_api
   ```

## Uruchomienie

Aby uruchomić aplikację w trybie deweloperskim:

```bash
npm run dev
```

Aplikacja będzie dostępna pod adresem `http://localhost:5173`.

## Funkcje

- Wyszukiwanie pogody dla dowolnego miasta
- Wyświetlanie temperatury w stopniach Celsjusza
- Wyświetlanie opisu pogody i ikony
- Responsywny interfejs
- Obsługa błędów
