import { getWeatherByName } from "@app/services/querys/getWeatherByName";
import { GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import { dehydrate, QueryClient } from "react-query";

interface IParams extends ParsedUrlQuery {
  id: string;
}

const CityWeather: NextPage = () => {
  return (
    <>
      <p>cityWeatherPage</p>
    </>
  );
};

export const getStaticPaths = async () => {
  return { paths: [], fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as IParams;
  const queryClientt = new QueryClient();

  await queryClientt.prefetchQuery(id, () => getWeatherByName(id));

  return {
    props: {
      dehydratedState: dehydrate(queryClientt),
    },
  };
};

export default CityWeather;
