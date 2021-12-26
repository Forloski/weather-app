import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { IWeather } from "@/interfaces/weather";
import { DateTime } from "luxon";

export const fetchWeatherByCityName = async (
  name: string | string[]
): Promise<IWeather | unknown> => {
  const httpInstance = axios.create({});

  try {
    const current = httpInstance.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${process.env.OPEN_WEATHER_API_KEY}&lang=pt&units=metric`
    );

    const forecast = httpInstance.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=navegantes&appid=78727b25f982d564499a59ec95821630&lang=pt&units=metric`
    );

    const data: IWeather = {
      current: (await current).data,
      forecast: (await forecast).data,
    };

    data.forecast.list = data.forecast.list.map((hourForecast) => {
      const dateTime = DateTime.fromSeconds(hourForecast.dt).setLocale("pt-BR");

      hourForecast.mont_txt = dateTime.monthShort.replace(".", "");
      hourForecast.day_txt = dateTime.day;
      hourForecast.weekDay_txt = dateTime.weekdayShort.replace(".", "");
      hourForecast.hour_txt = dateTime.hour;

      return hourForecast;
    });

    return data;
  } catch (err) {
    return err;
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IWeather | unknown>
) {
  const { name } = req.query;

  if (!name) {
    res.status(400);
  }

  const data = await fetchWeatherByCityName(name);

  if (!data) {
    res.status(404);
  }

  res.status(200).json(data);
}
