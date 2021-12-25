import { MyCityButton, SearchAutocomplete } from "@/components/elements/";
import { GeolocationProvider } from "@/hooks/useGeolocation";
import { useSearchForm } from "@/hooks/useSearchForm";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { FormEvent } from "react";
import * as S from "./styles";

const SearchForm = () => {
  const router = useRouter();
  const { searchInput } = useSearchForm();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push(`/${searchInput}`);
  };

  return (
    <S.FormContainer maxWidth="xs">
      <form onSubmit={handleSubmit}>
        <SearchAutocomplete />
        <S.ButtonBox>
          <S.SubmitButton variant="contained" type="submit" fullWidth>
            Ver Previsão
          </S.SubmitButton>
          <GeolocationProvider>
            <MyCityButton />
          </GeolocationProvider>
        </S.ButtonBox>
      </form>
    </S.FormContainer>
  );
};

export default SearchForm;
