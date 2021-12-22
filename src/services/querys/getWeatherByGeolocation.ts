import { useQuery, UseQueryOptions } from "react-query";
import { AxiosRequestConfig } from "axios";
import { httpInstance } from "../http/httpInstance";
import { IWeather } from "@app/interfaces/weather";

export async function getWeatherByGeolocation(
  latitude: number,
  longitude: number,
  config?: AxiosRequestConfig
): Promise<IWeather> {
  const { data } = await httpInstance.get(
    `api/weather-by-geolocation?longitude=${longitude}&latitude=${latitude}`,
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
