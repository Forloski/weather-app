export const defaultQueryClientOptions = {
  queries: {
    staleTime: 1000 * 60 * 2,
    cacheTime: 1000 * 60 * 3,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    retry: false,
  },
};
