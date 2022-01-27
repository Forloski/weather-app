import { useQuery, UseQueryOptions } from "react-query";
import { AxiosRequestConfig } from "axios";

export async function getTime(
  config?: AxiosRequestConfig
): Promise<{ date: string }> {
  const date = new Date().toISOString();

  return { date };
}

export function useTime(
  queryKey: string,
  options?: Omit<
    UseQueryOptions<{ date: string }, unknown, { date: string }, string>,
    "queryKey" | "queryFn"
  >,
  config?: AxiosRequestConfig
): { date: string } {
  const { data = { date: "vazio" } } = useQuery(
    queryKey,
    () => getTime(config),
    options
  );

  return data;
}
