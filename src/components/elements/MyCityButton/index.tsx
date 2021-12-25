import { useCityNameByGeolocation } from "@/services/querys/getCityNameByGeolocation";
import { useGeolocation } from "@/hooks/useGeolocation";
import { useRouter } from "next/router";
import { useEffect } from "react";
import * as S from "./styles";

const MyCityButton = () => {
  const router = useRouter();
  const { latitude, longitude } = useGeolocation();
  const cityName = useCityNameByGeolocation(
    `cityNameFrom${latitude}${longitude}`,
    latitude,
    longitude,
    {
      enabled: !!latitude && !!longitude,
    }
  );

  useEffect(() => {
    cityName && router.prefetch(`/${cityName}`);
  }, [cityName, router]);

  const handleClick = () => {
    router.push(`/${cityName}`);
  };

  return (
    <S.CityButton
      id="my-city"
      variant="outlined"
      onClick={handleClick}
      disabled={!!!cityName}
      fullWidth
    >
      Minha Cidade
    </S.CityButton>
  );
};

export default MyCityButton;
