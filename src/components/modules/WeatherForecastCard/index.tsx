import { useWeatherByCityName } from "@/services/querys/getWeatherByCityName";
import { IIdUrlQuery } from "@/interfaces/idUrlQuery";
import { useRouter } from "next/router";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

const WeatherForecastCard = () => {
  const router = useRouter();
  const { id } = router.query as IIdUrlQuery;
  const weather = useWeatherByCityName(id, id);

  if (!weather) {
    return <></>;
  }

  return (
    <>
      <Typography align="center" variant="h3" mt={12} mb={6}>
        Previsão
      </Typography>
      <Grid container spacing={6} justifyContent={"center"}>
        {weather.forecast.list.map((forecast) => {
          return (
            <Grid item key={forecast.dt} maxWidth={"400px"} minWidth={"400px"}>
              <Typography align="center" variant="h6">
                {forecast.hour_txt}:00 {forecast.weekDay_txt} {forecast.day_txt}{" "}
                {forecast.mont_txt}
              </Typography>
              <Typography align="center" variant="h4">
                {forecast.main.temp.toFixed()} °C
              </Typography>
              <Box display="flex" justifyContent="center">
                <Typography variant="h6" align="center">
                  {`${forecast.main.temp_min.toFixed()} °C`}
                </Typography>
                <Typography variant="h6" align="center">
                  &nbsp; | &nbsp;
                </Typography>
                <Typography variant="h6" align="center">
                  {`${forecast.main.temp_max.toFixed()} °C`}
                </Typography>
              </Box>
              <Box display="flex" justifyContent="center">
                <Image
                  src={`/images/${forecast.weather[0].icon}.png`}
                  alt=""
                  width={30}
                  height={30}
                />
                <Typography align="center" variant="h6" ml={1}>
                  {forecast.weather[0].description}
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default WeatherForecastCard;
