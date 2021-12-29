import { WeatherNowCard, WeatherForecastCard } from "@/components/modules/";
import * as S from "./styles";
import HomeIcon from "@mui/icons-material/Home";
import Link from "next/link";
import { useBackdrop } from "@/hooks/useBackdrop";
import { useEffect } from "react";

const CityWeatherPage = () => {
  const { setBackdropStatus } = useBackdrop();

  useEffect(() => {
    setBackdropStatus(false);
  }, []);

  return (
    <>
      <Link href="/" passHref>
        <S.HomeFab color={"primary"}>
          <HomeIcon />
        </S.HomeFab>
      </Link>
      <WeatherNowCard />
      <WeatherForecastCard />
    </>
  );
};

export default CityWeatherPage;
