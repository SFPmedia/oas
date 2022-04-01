import { createTheme } from "@mui/material";
import { blue, lightBlue } from "@mui/material/colors";

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
  },
  palette: {
    primary: {
      main: blue[50],
    },
  },
});

export default theme;
