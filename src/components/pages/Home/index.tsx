import SearchForm from "@/components/modules/SearchForm";
import { SearchFormProvider } from "@/hooks/useSearchForm";
import { Box } from "@mui/material";
import * as S from "./styles";

const HomePage = () => {
  return (
    <SearchFormProvider>
      <Box pb={15}>
        <S.TitleTypography variant="h1">Weather</S.TitleTypography>
        <SearchForm />
      </Box>
    </SearchFormProvider>
  );
};

export default HomePage;
