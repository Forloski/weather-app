import SearchForm from "@/components/modules/SearchForm";
import { SearchFormProvider } from "@/hooks/useSearchForm";
import { useTime } from "@/services/querys/getTime";
import { Box } from "@mui/material";
import * as S from "./styles";

const HomePage = () => {
  const time = useTime("time");

  return (
    <SearchFormProvider>
      <p>{time.date}</p>
      <Box pb={15}>
        <S.TitleTypography variant="h1">Weather</S.TitleTypography>
        <SearchForm />
      </Box>
    </SearchFormProvider>
  );
};

export default HomePage;
