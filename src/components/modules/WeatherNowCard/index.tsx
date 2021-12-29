import { useWeatherByCityName } from "@/services/querys/getWeatherByCityName";
import { IIdUrlQuery } from "@/interfaces/idUrlQuery";
import { useRouter } from "next/router";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const WeatherNowCard = () => {
  const router = useRouter();
  const { id } = router.query as IIdUrlQuery;
  const weather = useWeatherByCityName(id, id);

  if (!weather) {
    return <></>;
  }

  return (
    <Box mt={10}>
      <Typography align="center" variant="h4">
        {weather.current.name}
      </Typography>
      <Typography variant="h1" align="center">
        {weather.current.main.temp.toFixed()} °C
      </Typography>
      <Box display="flex" justifyContent="center">
        <Typography variant="h6" align="center">
          {`min: ${weather.current.main.temp_min.toFixed()} °C`}
        </Typography>
        <Typography variant="h6" align="center">
          &nbsp; | &nbsp;
        </Typography>
        <Typography variant="h6" align="center">
          {`max: ${weather.current.main.temp_max.toFixed()} °C`}
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center" mt={1}>
        <Image
          src={`/images/${weather.current.weather[0].icon}.png`}
          alt=""
          width={30}
          height={30}
        />
        <Typography align="center" variant="h5" ml={1}>
          {weather.current.weather[0].description}
        </Typography>
      </Box>
    </Box>
  );
};

export default WeatherNowCard;
