import { Autocomplete, TextField } from "@mui/material";
import { debounceTime, distinctUntilChanged, tap } from "rxjs/operators";
import { Subject } from "rxjs";
import { useState } from "react";
import { useGetSearchSuggestions } from "src/services/querys/getSearchSuggestions";
import { IPrediction } from "src/interfaces/prediction";
import { useSearchForm } from "@app/hooks/useSeachForm";

const SearchInput = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<IPrediction | null>({} as IPrediction);
  const { searchInput, setSearchInput } = useSearchForm();
  const [searchInput$] = useState(() => new Subject<string>());

  const { data: options } = useGetSearchSuggestions(searchInput, searchInput);

  const handleSetSearchInput = (value: string) => {
    setSearchInput(value);
  };

  searchInput$
    .pipe(
      debounceTime(500),
      distinctUntilChanged(),
      tap((e) => handleSetSearchInput(e))
    )
    .subscribe();

  return (
    <Autocomplete
      id="input-search"
      sx={{ width: 300 }}
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

export default SearchInput;
