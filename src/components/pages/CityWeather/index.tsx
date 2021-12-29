import { WeatherNowCard } from "@/components/modules/";
import * as S from "./styles";
import HomeIcon from "@mui/icons-material/Home";
import Link from "next/link";
import { useBackdrop } from "@/hooks/useBackdrop";
import { useEffect } from "react";
import WeatherForecastTabs from "@/components/modules/WeatherForecastTabs";

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
      <WeatherForecastTabs />
    </>
  );
};

export default CityWeatherPage;
