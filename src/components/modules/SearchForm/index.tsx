import DefaultButton from "@app/components/elements/DefaultButton";
import MyCityButton from "@app/components/elements/MyCityButton";
import SearchInput from "@app/components/elements/SearchInput";
import { GeolocationProvider } from "@app/hooks/useGeolocation";
import { useSearchForm } from "@app/hooks/useSeachForm";
import { FormEvent } from "react";

const SearchForm = () => {
  const { searchInput } = useSearchForm();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(searchInput);
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
