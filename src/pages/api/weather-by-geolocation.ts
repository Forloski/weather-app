import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { IWeather } from "@/interfaces/weather";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IWeather>
) {
  const { latitude, longitude } = req.query;

  if (!latitude && !longitude) {
    res.status(400);
  }

  const httpInstance = axios.create({});

  const { data } = await httpInstance.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=pt&units=metric&appid=${process.env.OPEN_WEATHER_API_KEY}`
  );

  if (!data) {
    res.status(404);
  }

  res.status(200).json(data);
}
