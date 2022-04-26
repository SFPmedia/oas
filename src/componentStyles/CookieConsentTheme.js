import { createTheme } from "@mui/material";
import { lightGreen } from "@mui/material/colors";

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
  },

  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          position: "fixed",
          width: "20%",
          backgroundColor: lightGreen[50],
          borderRadius: "10px",
          paddingBottom: "0.5em",
          bottom: "0px",
          ".consentButtons": {
            position: "static",
            width: "80%",
            justifyContent: "center",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          position: "relative",
          marginBottom: "1em",
          h4: {
            fontSize: "1.5em",
            marginLeft: "5%",
          },
          p: {
            margin: "0.75em 0 0.75em 5%",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "0.8rem",
          backgroundColor: lightGreen[200],
          color: "black",
          marginTop: "1em",
          "&:hover": {
            backgroundColor: lightGreen[300],
          },
          width: "100%",
          marginLeft: "0",
        },
      },
    },
  },
});

export default theme;
