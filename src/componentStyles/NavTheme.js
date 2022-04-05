import { createTheme } from "@mui/material";
import { blue } from "@mui/material/colors";

const theme = createTheme({
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
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
