import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { IPrediction } from "@app/interfaces/prediction";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IPrediction[]>
) {
  const { input } = req.query;

  if (!input) {
    res.status(400);
  }

  const httpInstance = axios.create({});

  const { data } = await httpInstance.get(
    `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&types=%28cities%29&key=${process.env.GOOGLE_MAPS_API_KEY}&language=pt_BR`
  );

  if (!data) {
    res.status(404);
  }

  res.status(200).json(data.predictions);
}
