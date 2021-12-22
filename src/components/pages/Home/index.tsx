import DefaultTypography from "@app/components/elements/DefaultTypography";
import SearchForm from "@app/components/modules/SearchForm";
import { SearchFormProvider } from "@app/hooks/useSeachForm";

const HomePage = () => {
  return (
    <SearchFormProvider>
      <DefaultTypography>Weather App</DefaultTypography>
      <SearchForm />
    </SearchFormProvider>
  );
};

export default HomePage;
