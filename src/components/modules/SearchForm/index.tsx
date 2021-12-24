import {
  DefaultButton,
  MyCityButton,
  SearchInput,
} from "@/components/elements/";
import { GeolocationProvider } from "@/hooks/useGeolocation";
import { useSearchForm } from "@/hooks/useSearchForm";
import { FormEvent } from "react";

const SearchForm = () => {
  const { searchInput } = useSearchForm();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <SearchInput />
      <DefaultButton type="submit"> Ver Previsão </DefaultButton>
      <GeolocationProvider>
        <MyCityButton />
      </GeolocationProvider>
    </form>
  );
};

export default SearchForm;
