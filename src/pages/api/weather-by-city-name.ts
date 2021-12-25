import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { IWeather } from "@/interfaces/weather";

export const fetchOpenWeatherByCityName = async (
  name: string | string[]
): Promise<IWeather> => {
  const httpInstance = axios.create({});

  const { data } = await httpInstance.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${process.env.OPEN_WEATHER_API_KEY}&lang=pt&units=metric`
  );

  return data;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IWeather>
) {
  const { name } = req.query;

  if (!name) {
    res.status(400);
  }

  const data = await fetchOpenWeatherByCityName(name);

  if (!data) {
    res.status(404);
  }

  res.status(200).json(data);
}