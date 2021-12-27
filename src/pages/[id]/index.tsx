import { GetStaticProps, NextPage } from "next";
import { dehydrate, QueryClient } from "react-query";
import { fetchWeatherByCityName } from "@/pages/api/weather-by-city-name";
import { useWeatherByCityName } from "@/services/querys/getWeatherByCityName";
import { IIdUrlQuery } from "@/interfaces/idUrlQuery";
import { CityWeatherPage } from "@/components/pages";
import Head from "next/head";
import { useRouter } from "next/router";

const CityWeather: NextPage = () => {
  const router = useRouter();
  const { id } = router.query as IIdUrlQuery;
  const weather = useWeatherByCityName(id, id);

  return (
    <>
      <Head key="forecast">
        <meta
          property="og:title"
          content={`${weather?.current.name}`}
          key="forecasttitle"
        />
        <meta
          property="og:description"
          content={`Previsão do tempo para a cidade de ${weather?.current.name}`}
          key="forecastdesc"
        />
      </Head>
      <CityWeatherPage />
    </>
  );
};

export const getStaticPaths = async () => {
  return { paths: [], fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as IIdUrlQuery;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(id, () => fetchWeatherByCityName(id));

  const queryState = queryClient.getQueryState(id);

  if (!queryState || queryState.status === "error") {
    return {
      redirect: {
        permanent: false,
        destination: "/404",
      },
    };
  }

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default CityWeather;
