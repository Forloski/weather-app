import { useQuery, UseQueryOptions } from "react-query";
import { AxiosRequestConfig } from "axios";
import { httpInstance } from "../http/httpInstance";
import { IWeather } from "src/interfaces/weather";

export async function getWeatherByCityName(
  cityName: string,
  config?: AxiosRequestConfig
): Promise<IWeather> {
  const { data } = await httpInstance.get(
    `api/weather-by-city-name?name=${cityName}`,
    config
  );

  return data;
}

export function useWeatherByCityName(
  queryKey: string,
  cityName: string,
  options?: Omit<
    UseQueryOptions<IWeather, unknown, IWeather, string>,
    "queryKey" | "queryFn"
  >,
  config?: AxiosRequestConfig
): IWeather | undefined {
  const { data } = useQuery(
    queryKey,
    () => getWeatherByCityName(cityName, config),
    options
  );

  return data;
}
