import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  const { latitude, longitude } = req.query;

  if (!latitude && !longitude) {
    res.status(400);
  }

  const httpInstance = axios.create({});

  const { data } = await httpInstance.get(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&sensor=true&key=${process.env.GOOGLE_MAPS_API_KEY}&language=pt_BR`
  );

  if (!data) {
    res.status(404);
  }

  const cityStateCountry = data.plus_code.compound_code
    .split(" ")
    .slice(1)
    .join("%20")
    .toLowerCase();

  const normalizedCity = cityStateCountry
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .split(",")[0];

  const response = encodeURIComponent(normalizedCity.trim());

  res.status(200).json(response);
}
