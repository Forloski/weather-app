import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

type IBackdropContext = {
  backdropStatus: boolean;
  setBackdropStatus: Dispatch<SetStateAction<boolean>>;
};

export const BackdropContext = createContext({} as IBackdropContext);

export const BackdropProvider = ({ children }: { children: ReactNode }) => {
  const [backdropStatus, setBackdropStatus] = useState(false);

  return (
    <BackdropContext.Provider value={{ backdropStatus, setBackdropStatus }}>
      {children}
    </BackdropContext.Provider>
  );
};

export function useBackdrop() {
  const context = useContext(BackdropContext);
  return context;
}
