import { defaultQueryClientOptions } from "src/config/reactQuery";
import { QueryClient } from "react-query";

export const queryClient = new QueryClient({
  defaultOptions: defaultQueryClientOptions,
});
