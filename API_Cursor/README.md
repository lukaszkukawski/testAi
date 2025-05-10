# Aplikacja Pogodowa

Prosta aplikacja React do sprawdzania prognozy pogody dla różnych miast. Aplikacja korzysta z OpenWeatherMap API.

## Funkcjonalność

- Wyszukiwanie prognozy pogody dla wybranego miasta
- Wyświetlanie aktualnej temperatury, opisu pogody i ikony
- Responsywny interfejs użytkownika
- Obsługa błędów (niepoprawna nazwa miasta, brak połączenia z internetem)

## Wymagania

- Node.js (wersja 14 lub nowsza)
- Klucz API z [OpenWeatherMap](https://openweathermap.org/api)

## Instalacja i uruchomienie

1. Sklonuj repozytorium:

```bash
git clone <url-repozytorium>
cd app-pogodowa
```

2. Zainstaluj zależności:

```bash
npm install
```

3. Utwórz plik `.env` w głównym folderze projektu i dodaj swój klucz API:

```
VITE_API_KEY=your_openweathermap_api_key_here
```

4. Uruchom aplikację w trybie deweloperskim:

```bash
npm run dev
```

5. Otwórz [http://localhost:5173](http://localhost:5173) w przeglądarce.

## Technologie

- React 18+
- TypeScript
- Vite
- Axios
- CSS (bez dodatkowych frameworków)

## Struktura projektu

```
src/
  ├── api/            # Serwisy API
  ├── components/     # Komponenty React
  ├── styles/         # Pliki CSS
  ├── types/          # Definicje typów TypeScript
  ├── App.tsx         # Główny komponent aplikacji
  └── main.tsx        # Punkt wejścia
```

## Uwaga

Aby aplikacja działała poprawnie, musisz posiadać własny klucz API z OpenWeatherMap. Możesz go uzyskać rejestrując się na [stronie OpenWeatherMap](https://openweathermap.org/api) i generując klucz API w panelu użytkownika.
