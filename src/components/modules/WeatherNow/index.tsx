import { DefaultTypography, DefaultBox } from "@/components/elements";
import { useWeatherByCityName } from "@/services/querys/getWeatherByCityName";
import { IIdUrlQuery } from "@/interfaces/idUrlQuery";
import { useRouter } from "next/router";

const WeatherNow = () => {
  const router = useRouter();
  const { id } = router.query as IIdUrlQuery;
  const weather = useWeatherByCityName(id, id);

  if (!weather) {
    return <></>;
  }

  return (
    <DefaultBox>
      <DefaultTypography>{weather.name}</DefaultTypography>
      <DefaultTypography>{weather.weather[0].description}</DefaultTypography>
      <DefaultTypography>{weather.main.temp}</DefaultTypography>
    </DefaultBox>
  );
};

export default WeatherNow;
