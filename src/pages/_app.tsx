import type { AppProps } from "next/app";
import { GeolocationProvider } from "../hooks/useGeolocation";
import { CssBaseline } from "@mui/material";
import { Hydrate, QueryClientProvider } from "react-query";
import { queryClient } from "src/services/querys/queryClient";
import { ReactQueryDevtools } from "react-query/devtools";
import Layout from "src/components/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CssBaseline>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <GeolocationProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </GeolocationProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </Hydrate>
      </QueryClientProvider>
    </CssBaseline>
  );
}

export default MyApp;
