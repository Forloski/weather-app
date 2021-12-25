import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#161B1E",
    },
    secondary: {
      main: "#4040f4",
    },
    common: {
      white: "snow",
    },
  },
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
});

theme = responsiveFontSizes(theme);

export default theme;
