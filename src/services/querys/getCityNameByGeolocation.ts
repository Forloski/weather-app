import { useQuery, UseQueryOptions } from "react-query";
import { AxiosRequestConfig } from "axios";
import { httpInstance } from "../http/httpInstance";

export async function getCityNameByGeolocation(
  latitude: number,
  longitude: number,
  config?: AxiosRequestConfig
): Promise<string> {
  const { data } = await httpInstance.get(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&sensor=true&key=AIzaSyAwm-Mf7vQK2z4NmYVF2n9Hs-VIjLl5oG0`,
    config
  );

  return data.plus_code.compound_code
    .split(" ")
    .slice(1)
    .join("")
    .toLowerCase();
}

export function useGetCityNameByGeolocation(
  queryKey: string,
  latitude: number,
  longitude: number,
  options?: Omit<
    UseQueryOptions<string, unknown, string, string>,
    "queryKey" | "queryFn"
  >,
  config?: AxiosRequestConfig
): string | undefined {
  const { data } = useQuery(
    queryKey,
    () => getCityNameByGeolocation(latitude, longitude, config),
    options
  );

  return data;
}
