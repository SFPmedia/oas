import React from "react";
import { Typography, Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../componentStyles/AboutPageTheme";
import { lightGreen } from "@mui/material/colors";

export default function AboutPage() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container rowSpacing={20} justifyContent="center">
        <Grid
          item
          xs={11}
          md={11}
          lg={11}
          xl={11}
          sx={{ paddingTop: "0px !important" }}
        >
          <Typography variant="h1" align="center" gutterBottom>
            About this page
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={10}
          lg={5}
          xl={5}
          sx={{ bgcolor: lightGreen[100], paddingTop: "0px !important" }}
          container
          justifyContent="center"
        >
          <Typography variant="h2" textAlign="center" gutterBottom>
            Purpose
          </Typography>
          <Typography variant="body1" textAlign="center">
            This website will help you search for outdoor activities far away
            from you, as well as near you. <br />
            It provides you with the most basic and useful information, while
            giving you the option to go to possible websites or make use of the
            attached Google Maps.
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          md={10}
          lg={5}
          xl={5}
          sx={{ bgcolor: lightGreen[200], paddingTop: "0 !important" }}
        >
          <Typography variant="h2" textAlign="center" gutterBottom>
            The Future
          </Typography>
          <Typography variant="body1" textAlign="center">
            As time goes, more entries will be implemented on the list,
            expanding to other countries. <br />
            New features might be developed, if good ideas are shared with me.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={10}
          lg={5}
          xl={5}
          sx={{ bgcolor: lightGreen[300], paddingTop: "0 !important" }}
        >
          <Typography variant="h2" textAlign="center" gutterBottom>
            Tech Stack
          </Typography>
          <Typography variant="body1" textAlign="center">
            HTML & JavaScript
            <br />
            CSS & Material UI <br />
            MySQL & PHP
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={10}
          lg={5}
          xl={5}
          sx={{ bgcolor: lightGreen[500], paddingTop: "0 !important" }}
        >
          <Typography variant="h2" textAlign="center" gutterBottom>
            Contact
          </Typography>
          <Typography variant="body1" textAlign="center">
            If you have any questions or ideas for the development of this
            website, feel free to send me and e-mail and tell me about it.
            <br />
            E-mail: sfpauck@gmail.com
          </Typography>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
