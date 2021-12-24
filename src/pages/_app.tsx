import type { AppProps } from "next/app";
import { CssBaseline } from "@mui/material";
import { Hydrate, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { queryClient } from "@/services/querys/queryClient";
import Layout from "@/components/layouts/DefaultLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CssBaseline>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <ReactQueryDevtools initialIsOpen={false} />
        </Hydrate>
      </QueryClientProvider>
    </CssBaseline>
  );
}

export default MyApp;
