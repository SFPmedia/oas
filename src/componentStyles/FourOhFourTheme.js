import { createTheme } from "@mui/material";
import { blue } from "@mui/material/colors";

const theme = createTheme({
  typography: {
    h1: {
      fontSize: "4em",
      margin: "0em 0 1em 0",
    },
    h2: {
      fontSize: "3em",
      marginTop: "1em",
    },
    h3: {
      marginTop: "1em",
    },
  },

  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          backgroundColor: blue[50],
          padding: "1em",
          marginTop: "10em",
          borderRadius: "10px",
        },
      },
    },
  },
});

export default theme;
