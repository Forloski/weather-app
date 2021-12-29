import { useWeatherByCityName } from "@/services/querys/getWeatherByCityName";
import { IIdUrlQuery } from "@/interfaces/idUrlQuery";
import { useRouter } from "next/router";
import { Box, Tab, Typography } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { SyntheticEvent, useState } from "react";
import { WeatherPanelLine } from "@/components/elements";
import * as S from "./styles";

const WeatherForecastTabs = () => {
  const router = useRouter();
  const [value, setValue] = useState("1");
  const { id } = router.query as IIdUrlQuery;
  const weather = useWeatherByCityName(id, id);

  if (!weather) {
    return <></>;
  }

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <S.TabsBox>
        <Typography align="center" variant="h3" mt={12}>
          Previsão
        </Typography>
        <Box mt={3}>
          <TabList
            onChange={handleChange}
            variant="scrollable"
            allowScrollButtonsMobile
          >
            {weather.forecast.uniqueDates.map((uniqueDate, i) => {
              return <Tab label={uniqueDate} value={`${i}`} key={uniqueDate} />;
            })}
          </TabList>
        </Box>
        <Box maxWidth={600} minHeight={320} margin={0}>
          {weather.forecast.uniqueDates.map((uniqueDate, i) => {
            return (
              <TabPanel value={`${i}`} key={`Panel${i}`}>
                {weather.forecast.list.map((forecast, i) => {
                  if (
                    forecast.mont_txt === uniqueDate.split("/")[0] &&
                    `${forecast.day_txt}` === uniqueDate.split("/")[1]
                  ) {
                    return (
                      <WeatherPanelLine
                        hour={forecast.hour_txt}
                        temp={forecast.main.temp.toFixed()}
                        desc={forecast.weather[0].description}
                        icon={forecast.weather[0].icon}
                      />
                    );
                  }
                })}
              </TabPanel>
            );
          })}
        </Box>
      </S.TabsBox>
    </TabContext>
  );
};

export default WeatherForecastTabs;
