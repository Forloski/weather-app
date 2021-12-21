export const defaultQueryClientOptions = {
  queries: {
    staleTime: 0,
    cacheTime: 1000 * 60 * 10,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  },
};
