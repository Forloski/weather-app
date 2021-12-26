import { WeatherNowCard, WeatherForecastCard } from "@/components/modules/";
import * as S from "./styles";
import HomeIcon from "@mui/icons-material/Home";
import Link from "next/link";

const CityWeatherPage = () => {
  return (
    <>
      <S.HomeFab color={"primary"}>
        <Link href="/" passHref>
          <HomeIcon />
        </Link>
      </S.HomeFab>
      <WeatherNowCard />
      <WeatherForecastCard />
    </>
  );
};

export default CityWeatherPage;
