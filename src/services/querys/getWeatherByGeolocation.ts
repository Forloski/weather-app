import { useQuery, UseQueryOptions } from "react-query";
import { AxiosRequestConfig } from "axios";
import { httpInstance } from "../http/httpInstance";
import { IWeather } from "src/interfaces/weather";

export async function getWeatherByGeolocation(
  latitude: number,
  longitude: number,
  config?: AxiosRequestConfig
): Promise<IWeather> {
  const { data } = await httpInstance.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=pt&units=metric&appid=78727b25f982d564499a59ec95821630`,
    config
  );

  return data;
}

export function useGetWeatherByGeolocation(
  queryKey: string,
  latitude: number,
  longitude: number,
  options?: Omit<
    UseQueryOptions<IWeather, unknown, IWeather, string>,
    "queryKey" | "queryFn"
  >,
  config?: AxiosRequestConfig
): IWeather | undefined {
  const { data } = useQuery(
    queryKey,
    () => getWeatherByGeolocation(latitude, longitude, config),
    options
  );

  return data;
}
