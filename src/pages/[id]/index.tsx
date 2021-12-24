import { GetStaticProps, NextPage } from "next";
import { dehydrate, QueryClient } from "react-query";
import { fetchOpenWeatherByCityName } from "@/pages/api/weather-by-city-name";
import { IIdUrlQuery } from "@/interfaces/idUrlQuery";
import { CityWeatherPage } from "@/components/pages";

const CityWeather: NextPage = () => {
  return <CityWeatherPage />;
};

export const getStaticPaths = async () => {
  return { paths: [], fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as IIdUrlQuery;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(id, () => fetchOpenWeatherByCityName(id));

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
