import { useCityNameByGeolocation } from "@/services/querys/getCityNameByGeolocation";
import { useGeolocation } from "@/hooks/useGeolocation";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";

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
    <Button
      id="my-city"
      variant="outlined"
      onClick={handleClick}
      disabled={!!!cityName}
    >
      Minha Cidade
    </Button>
  );
};

export default MyCityButton;
