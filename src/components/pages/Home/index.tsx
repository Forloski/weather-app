import DefaultTypography from "@/components/elements/DefaultTypography";
import SearchForm from "@/components/modules/SearchForm";
import { SearchFormProvider } from "@/hooks/useSearchForm";

const HomePage = () => {
  return (
    <SearchFormProvider>
      <DefaultTypography>Weather App</DefaultTypography>
      <SearchForm />
    </SearchFormProvider>
  );
};

export default HomePage;
