import { useQuery, UseQueryOptions } from "react-query";
import { AxiosRequestConfig } from "axios";
import { httpInstance } from "@/services/http/httpInstance";

export async function getCityNameByGeolocation(
  latitude: number,
  longitude: number,
  config?: AxiosRequestConfig
): Promise<string> {
  const { data } = await httpInstance.get(
    `api/city-name-by-geolocation?longitude=${longitude}&latitude=${latitude}`,
    config
  );

  return data;
}

export function useCityNameByGeolocation(
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
