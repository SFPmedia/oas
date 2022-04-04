import React from "react";
import { Box, AppBar, Toolbar, Link } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../componentStyles/NavTheme";

export default function Navigation() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <AppBar position="static">
          <Toolbar sx={{ justifyContent: "center" }}>
            <Link href="/">Home</Link>
            <Link href="/AboutPage">About This Page</Link>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
