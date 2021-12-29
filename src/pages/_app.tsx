import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Hydrate, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { queryClient } from "@/services/querys/queryClient";
import Layout from "@/components/layouts/DefaultLayout";
import theme from "@/styles/theme";
import Head from "next/head";
import { BackdropProvider } from "@/hooks/useBackdrop";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Weather</title>
      </Head>

      <CssBaseline>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <ThemeProvider theme={theme}>
              <BackdropProvider>
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              </BackdropProvider>
            </ThemeProvider>
            <ReactQueryDevtools initialIsOpen={false} />
          </Hydrate>
        </QueryClientProvider>
      </CssBaseline>
    </>
  );
}

export default MyApp;
