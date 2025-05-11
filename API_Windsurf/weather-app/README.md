# Aplikacja Pogodowa

Prosta aplikacja React do sprawdzania aktualnej pogody w dowolnym mieście. Aplikacja korzysta z API OpenWeatherMap.

## Funkcjonalności

- Wyszukiwanie pogody dla dowolnego miasta
- Wyświetlanie aktualnej temperatury w stopniach Celsjusza
- Wyświetlanie opisu pogody i ikony
- Obsługa błędów (niepoprawna nazwa miasta, brak internetu)
- Responsywny interfejs użytkownika

## Wymagania

- Node.js (wersja 14 lub nowsza)
- Klucz API z [OpenWeatherMap](https://openweathermap.org/api)

## Instalacja

1. Sklonuj repozytorium
2. Zainstaluj zależności:
   ```
   npm install
   ```
3. Utwórz plik `.env` w głównym katalogu projektu i dodaj swój klucz API:
   ```
   VITE_API_KEY=twój_klucz_api_openweathermap
   ```

## Uruchomienie

Aby uruchomić aplikację w trybie deweloperskim:

```
npm run dev
```

Aplikacja będzie dostępna pod adresem: [http://localhost:5173](http://localhost:5173)

## Technologie

- React (hooki)
- Vite
- Tailwind CSS
- Fetch API

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
