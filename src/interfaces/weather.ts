interface ICurrentWeather {
  coord: { lon: number; lat: number };
  weather: { id: number; main: string; description: string; icon: string }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: { speed: number; deg: number };
  clouds: { all: number };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface IForecastWeather {
  cod: string;
  message: number;
  cnt: number;
  uniqueDates: string[];
  list: {
    dt: 1640530800;
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      sea_level: number;
      grnd_level: number;
      humidity: number;
      temp_kf: number;
    };
    weather: [
      {
        id: number;
        main: string;
        description: string;
        icon: string;
      }
    ];
    clouds: {
      all: number;
    };
    wind: {
      speed: number;
      deg: number;
      gust: number;
    };
    visibility: number;
    pop: number;
    sys: {
      pod: string;
    };
    dt_txt: string;
    hour_txt: number;
    weekDay_txt: string;
    mont_txt: string;
    day_txt: number;
  }[];
  city: {
    id: number;
    name: string;
    coord: { lon: number; lat: number };
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
}

export interface IWeather {
  current: ICurrentWeather;
  forecast: IForecastWeather;
}
