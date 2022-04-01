import { createTheme } from "@mui/material";
import { blue, lightBlue, lightGreen } from "@mui/material/colors";

const theme = createTheme({
  components: {
    // Name of the component
    MuiLink: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          color: lightBlue[50],
          marginLeft: "1em",
          backgroundColor: blue[500],
          borderRadius: "10px",
          padding: "5px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          position: "relative",
          backgroundColor: lightGreen[50],
          marginBottom: "1em",
        },
      },
    },
  },
  palette: {
    primary: {
      main: blue[50],
    },
  },
});

export default theme;
