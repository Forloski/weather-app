import type { NextPage } from "next";
import { HomePage } from "@/components/pages";
import Head from "next/head";

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

export default Home;
