import type { GetStaticProps, NextPage } from "next";
import { HomePage } from "@/components/pages";
import Head from "next/head";
import { dehydrate, QueryClient } from "react-query";
import { getTime } from "@/services/querys/getTime";

const Home: NextPage = () => {
  return (
    <>
      <Head key="home">
        <meta
          property="og:title"
          content="Weather Página Inicial"
          key="hometitle"
        />
        <meta
          property="og:description"
          content="O App para ver a previsão do tempo de qualquer cidade do mundo."
          key="homedesc"
        />
      </Head>
      <HomePage />
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("time", () => getTime());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 60 * 5,
  };
};

export default Home;
