# Weather App

A simple weather application built with React and Vite that allows users to check current weather conditions for any city.

## Features

- Search weather by city name
- Display current temperature in Celsius
- Show weather description and icon
- Responsive design for mobile and desktop
- Error handling for invalid cities or network issues

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add your OpenWeatherMap API key:
   ```
   VITE_WEATHER_API_KEY=your_api_key_here
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Technologies Used

- React
- Vite
- Tailwind CSS
- OpenWeatherMap API

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
