import { createTheme } from "@mui/material/styles";

export const themeOptions = {
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
};

export const customTheme = createTheme(themeOptions);
