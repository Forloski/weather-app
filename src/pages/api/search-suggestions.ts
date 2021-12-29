import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { IPrediction } from "@/interfaces/prediction";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IPrediction[]>
) {
  const { input } = req.query;

  if (!input) {
    res.status(400);
  }

  const httpInstance = axios.create({});

  let response;

  response = await httpInstance.get(
    `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&types=(cities)&key=${process.env.GOOGLE_MAPS_API_KEY}&language=pt-BR`
  );
  res.status(response.status).json(response.data.predictions);
}
