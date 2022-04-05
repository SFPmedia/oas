import { createTheme } from "@mui/material";
import { blue, lightBlue } from "@mui/material/colors";

const theme = createTheme({
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
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
