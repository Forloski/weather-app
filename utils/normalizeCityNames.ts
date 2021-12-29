export const normalizeCityNames = (cityName: string): string => {
  return cityName
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .split(",")[0]
    .split("-")[0];
};
