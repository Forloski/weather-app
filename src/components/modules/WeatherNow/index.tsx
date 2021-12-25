import { useWeatherByCityName } from "@/services/querys/getWeatherByCityName";
import { IIdUrlQuery } from "@/interfaces/idUrlQuery";
import { useRouter } from "next/router";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const WeatherNow = () => {
  const router = useRouter();
  const { id } = router.query as IIdUrlQuery;
  const weather = useWeatherByCityName(id, id);

  if (!weather) {
    return <></>;
  }

  return (
    <Box>
      <Typography align="center" variant="h5">
        {weather.name}
      </Typography>
      <Typography variant="h1" align="center">
        {weather.main.temp.toFixed()} °C
      </Typography>
      <Box display="flex" justifyContent="center">
        <Image
          src={`/images/${weather.weather[0].icon}.png`}
          alt=""
          width={25}
          height={25}
        />
        <Typography align="center" variant="h5">
          {weather.weather[0].description}
        </Typography>
      </Box>
    </Box>
  );
};

export default WeatherNow;
