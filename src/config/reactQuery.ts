export const defaultQueryClientOptions = {
  queries: {
    staleTime: 900 * 60 * 10,
    cacheTime: 1000 * 60 * 10,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    retry: false,
  },
};
