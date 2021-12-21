import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { IGeolocation } from "../interfaces/geolocation";

type IGeolocationContext = {
  latitude: number;
  longitude: number;
  geolocationStatus: string;
};

export const GeolocationContext = createContext({} as IGeolocationContext);

export const GeolocationProvider = ({ children }: { children: ReactNode }) => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [geolocationStatus, setGeolocationStatus] = useState("");

  const getGeoLocation = () => {
    setGeolocationStatus("Locating...");
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setGeolocationStatus("Success");
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      () => {
        setGeolocationStatus("Unable to retrieve your location");
      }
    );
  };

  useEffect(() => {
    navigator.geolocation
      ? getGeoLocation()
      : setGeolocationStatus("Geolocation is not supported by your browser");
  }, []);

  return (
    <GeolocationContext.Provider
      value={{ latitude, longitude, geolocationStatus }}
    >
      {children}
    </GeolocationContext.Provider>
  );
};

export function useGeolocationContext() {
  const context = useContext(GeolocationContext);
  return context;
}
