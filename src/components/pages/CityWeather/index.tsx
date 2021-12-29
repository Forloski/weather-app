import { WeatherNowCard, WeatherForecastCard } from "@/components/modules/";
import * as S from "./styles";
import HomeIcon from "@mui/icons-material/Home";
import Link from "next/link";

const CityWeatherPage = () => {
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
