import { createTheme } from "@mui/material";
import { blue } from "@mui/material/colors";

const theme = createTheme({
  components: {
    MuiToolbar: {
      styleOverrides: {
        root: {
          backgroundColor: blue[50],
          justifyContent: "center",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          marginLeft: "1em",
          backgroundColor: blue[500],
          borderRadius: "10px",
          padding: "0.5em",
          color: "white",
        },
      },
    },
  },
});

export default theme;
