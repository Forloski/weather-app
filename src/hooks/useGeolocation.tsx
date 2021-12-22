import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

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
    setGeolocationStatus("Localizando...");
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setGeolocationStatus("Sucesso");
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      () => {
        setGeolocationStatus("Não foi possivel encontrar sua localização");
      }
    );
  };

  useEffect(() => {
    navigator.geolocation
      ? getGeoLocation()
      : setGeolocationStatus("Geolocalização não é suportada pelo seu browser");
  }, []);

  return (
    <GeolocationContext.Provider
      value={{ latitude, longitude, geolocationStatus }}
    >
      {children}
    </GeolocationContext.Provider>
  );
};

export function useGeolocation() {
  const context = useContext(GeolocationContext);
  return context;
}
