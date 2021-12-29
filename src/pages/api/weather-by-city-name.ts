import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { IForecastWeather, IWeather } from "@/interfaces/weather";
import { DateTime } from "luxon";

const getHttpInstance = () => {
  return axios.create({});
};

const getCurrentWeather = async (name: string) => {
  const httpInstance = getHttpInstance();

  return httpInstance.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${process.env.OPEN_WEATHER_API_KEY}&lang=pt&units=metric`
  );
};

const getForecastWeather = async (name: string) => {
  const httpInstance = getHttpInstance();

  return httpInstance.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=${name}&appid=${process.env.OPEN_WEATHER_API_KEY}&lang=pt&units=metric`
  );
};

const setDateTxtOnForecast = (forecast: IForecastWeather) => {
  forecast.list = forecast.list.map((hourForecast) => {
    const dateTime = DateTime.fromSeconds(hourForecast.dt).setLocale("pt-BR");

    hourForecast.mont_txt = dateTime.monthShort.replace(".", "");
    hourForecast.day_txt = dateTime.day;
    hourForecast.weekDay_txt = dateTime.weekdayShort.replace(".", "");
    hourForecast.hour_txt = dateTime.hour;

    return hourForecast;
  });

  return forecast;
};

const setUniqueDaysOnForecast = (forecast: IForecastWeather) => {
  const uniqueDates = new Set<string>();

  forecast.list.forEach((forecast) => {
    uniqueDates.add(`${forecast.mont_txt}/${forecast.day_txt}`);
  });

  forecast.uniqueDates = Array.from(uniqueDates);

  return forecast;
};

export const fetchWeatherByCityName = async (
  name: string
): Promise<IWeather | unknown> => {
  const current = getCurrentWeather(name);
  const forecast = getForecastWeather(name);

  const data: IWeather = {
    current: (await current).data,
    forecast: (await forecast).data,
  };

  data.forecast = setDateTxtOnForecast(data.forecast);
  data.forecast = setUniqueDaysOnForecast(data.forecast);

  return data;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IWeather | unknown>
) {
  const { name } = req.query;

  if (!name) {
    res.status(400);
  }

  const data = await fetchWeatherByCityName(name as string);

  if (!data) {
    res.status(404);
  }

  res.status(200).json(data);
}
