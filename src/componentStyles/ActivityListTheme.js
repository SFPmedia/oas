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
          backgroundColor: lightGreen[50],
          borderRadius: "10px",
          paddingBottom: "0.5em",
          ".activityListTop": {
            display: "flex",
            justifyContent: "space-between",
          },
          "#filterArea": {
            display: "flex",
            justifyContent: "center",
            marginTop: "25px",
            marginBottom: "50px",
            height: "25px",
            ".dropdownSL": {
              position: "relative",
              marginTop: "15px",
              marginRight: "0.2em",
            },
            ".dropdownContentSL": {
              position: "absolute",
              minWidth: "150px",
              boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.2)",
              zIndex: "1",
              paddingLeft: "5%",
              paddingRight: "15%",
            },
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
          margin: "1em 0 0 0",
          "&:hover": {
            backgroundColor: lightGreen[300],
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: lightGreen[100],
        },
      },
    },
  },
});

export default theme;
