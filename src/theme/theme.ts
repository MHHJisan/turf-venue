import { createTheme } from "@mui/material/styles";

// Create the application's central MUI theme.
const theme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: "#8BC34A",
    },

    secondary: {
      main: "#FF9800",
    },

    background: {
      default: "#080808",
      paper: "#111111",
    },

    text: {
      primary: "#FFFFFF",
      secondary: "#A8A8A8",
    },
  },

  typography: {
    fontFamily: "Arial, Helvetica, sans-serif",

    h1: {
      fontWeight: 800,
    },

    h2: {
      fontWeight: 800,
    },

    h3: {
      fontWeight: 700,
    },
  },

  shape: {
    borderRadius: 12,
  },
});

export default theme;
