export interface WeatherData {
  name: string;
  main: {
    temp: number;
  };
  weather: Array<{
    description: string;
    icon: string;
    main: string;
  }>;
}

export interface WeatherError {
  message: string;
} 