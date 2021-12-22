import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

type ISearchFormContext = {
  searchInput: string;
  setSearchInput: Dispatch<SetStateAction<string>>;
};

export const SearchFormContext = createContext({} as ISearchFormContext);

export const GeolocationProvider = ({ children }: { children: ReactNode }) => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <SearchFormContext.Provider value={{ searchInput, setSearchInput }}>
      {children}
    </SearchFormContext.Provider>
  );
};

export function useSearchForm() {
  const context = useContext(SearchFormContext);
  return context;
}
