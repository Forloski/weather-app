import { useGetWeatherByGeolocation } from "@app/services/querys/getWeatherByGeolocation";
import type { NextPage } from "next";
import { GeolocationProvider, useGeolocation } from "../hooks/useGeolocation";
import SearchBar from "src/components/elements/SearchInput";
import { useGetCityNameByGeolocation } from "@app/services/querys/getCityNameByGeolocation";
import MyCityButton from "@app/components/elements/MyCityButton";

const Home: NextPage = () => {
  const { latitude, longitude, geolocationStatus } = useGeolocation();
  const cityName = useGetCityNameByGeolocation(
    `cityNameFrom${latitude}${longitude}`,
    latitude,
    longitude,
    {
      enabled: !!latitude && !!longitude,
    }
  );
  const getWeather = useGetWeatherByGeolocation(
    `${latitude}${longitude}`,
    latitude,
    longitude,
    {
      enabled: !!latitude && !!longitude,
    }
  );

  return (
    <GeolocationProvider>
      <div>
        <input type="text"></input>
        <h1>Coordinates</h1>
        <p>{geolocationStatus}</p>
        {latitude && <p>Latitude: {latitude}</p>}
        {longitude && <p>Longitude: {longitude}</p>}
        {!!getWeather && <p>{getWeather.name}</p>}
        {!!cityName && <p>{cityName}</p>}
        <SearchBar></SearchBar>
        <MyCityButton></MyCityButton>
      </div>
    </GeolocationProvider>
  );
};

export default Home;
