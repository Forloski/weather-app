import { Autocomplete, TextField } from "@mui/material";
import { debounceTime, distinctUntilChanged, tap } from "rxjs/operators";
import { Subject } from "rxjs";
import { useEffect, useState } from "react";
import { useSearchSuggestions } from "@/services/querys/getSearchSuggestions";
import { IPrediction } from "@/interfaces/prediction";
import { useSearchForm } from "@/hooks/useSearchForm";
import { useRouter } from "next/router";
import { normalizeCityNames } from "@/utils/normalizeCityNames";

const SearchAutocomplete = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<IPrediction | null>({} as IPrediction);
  const { searchInput, setSearchInput } = useSearchForm();
  const [searchInput$] = useState(() => new Subject<string>());

  const { data: options } = useSearchSuggestions(searchInput, searchInput);

  const handleSetSearchInput = (value: string) => {
    const cityName = normalizeCityNames(value);

    router.prefetch(`/${cityName}`);

    setSearchInput(value);
  };

  useEffect(() => {
    searchInput$
      .pipe(
        tap(() => console.log("aaaa")),
        debounceTime(500),
        distinctUntilChanged(),
        tap((e) => handleSetSearchInput(e))
      )
      .subscribe();
  }, []);

  return (
    <Autocomplete
      id="input-search"
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      includeInputInList
      value={value}
      onChange={(_, newValue: IPrediction | null) => {
        setValue(newValue);
      }}
      onInputChange={(_, newInputValue) => {
        searchInput$.next(newInputValue);
      }}
      filterOptions={(x) => x}
      isOptionEqualToValue={(option, value) =>
        option.description === value.description
      }
      getOptionLabel={(option) => option.description || ""}
      options={options}
      renderInput={(params) => (
        <TextField
          {...params}
          fullWidth
          label="Procure por uma cidade..."
          InputProps={{
            ...params.InputProps,
            endAdornment: <></>,
          }}
        />
      )}
    />
  );
};

export default SearchAutocomplete;
