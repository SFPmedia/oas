import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    h1: {
      fontSize: "4em",
      margin: "0.5em 0 1em 0",
    },
    h2: {
      fontSize: "3em",
      marginTop: "0.8em",
    },
    body1: {
      marginBottom: "2em",
    },
  },

  components: {
    MuiGrid: {
      styleOverrides: {
        root: {
          padding: "1em 1em 1em 1em",
          margin: "0 0 0 0",
        },
      },
    },
  },
});

export default theme;
