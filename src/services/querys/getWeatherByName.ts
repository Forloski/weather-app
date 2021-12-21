import { useQuery, UseQueryOptions } from "react-query";
import { AxiosRequestConfig } from "axios";
import { httpInstance } from "../http/httpInstance";
import { IWeather } from "src/interfaces/weather";

export async function getWeatherByName(
  name: string,
  config?: AxiosRequestConfig
): Promise<IWeather> {
  const { data } = await httpInstance.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=78727b25f982d564499a59ec95821630&lang=pt&units=metric`,
    config
  );

  return data;
}

export function useGetWeatherByName(
  queryKey: string,
  name: string,
  options?: Omit<
    UseQueryOptions<IWeather, unknown, IWeather, string>,
    "queryKey" | "queryFn"
  >,
  config?: AxiosRequestConfig
): IWeather | undefined {
  const { data } = useQuery(
    queryKey,
    () => getWeatherByName(name, config),
    options
  );

  return data;
}
