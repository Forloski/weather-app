import { useQuery } from "react-query";
import { AxiosRequestConfig } from "axios";
import { httpInstance } from "../http/httpInstance";
import { IPrediction } from "src/interfaces/prediction";

export async function getSearchSuggestions(
  input: string | null = "",
  config?: AxiosRequestConfig
): Promise<IPrediction[]> {
  const { data } = await httpInstance.get(
    `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&types=%28cities%29&key=AIzaSyAwm-Mf7vQK2z4NmYVF2n9Hs-VIjLl5oG0`,
    config
  );

  return data.predictions;
}

export function useGetSearchSuggestions(
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
