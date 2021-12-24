import { defaultQueryClientOptions } from "@/config/reactQuery";
import { QueryClient } from "react-query";

export const queryClient = new QueryClient({
  defaultOptions: defaultQueryClientOptions,
});
