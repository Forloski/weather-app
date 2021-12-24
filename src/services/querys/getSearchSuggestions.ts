import { useQuery } from "react-query";
import { AxiosRequestConfig } from "axios";
import { httpInstance } from "@/services/http/httpInstance";
import { IPrediction } from "@/interfaces/prediction";

export async function getSearchSuggestions(
  input: string | null = "",
  config?: AxiosRequestConfig
): Promise<IPrediction[]> {
  const { data } = await httpInstance.get(
    `/api/search-suggestions?input=${input}`,
    config
  );

  return data;
}

export function useSearchSuggestions(
  queryKey: string,
  input: string | null,
  config?: AxiosRequestConfig
): { data: IPrediction[]; isFetching: boolean } {
  const { data = [], isFetching } = useQuery(
    queryKey,
    () => getSearchSuggestions(input, config),
    {
      cacheTime: 0,
    }
  );

  return { data, isFetching };
}
