import React from "react";
import { Typography, Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../componentStyles/FourOhFourTheme";

const FourOhFour = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Typography variant="h1" textAlign="center" gutterBottom>
          ERROR 404
        </Typography>
        <Typography variant="h2" textAlign="center" gutterBottom>
          PAGE NOT FOUND
        </Typography>
        <Typography variant="h3" textAlign="center" gutterBottom>
          Please use the links at the top of the page, to move to a known page.
        </Typography>
      </Container>
    </ThemeProvider>
  );
};

export default FourOhFour;
