import React from "react";
import { Typography } from "@mui/material";

const FourOhFour = () => {
  return (
    <>
      <Typography
        variant="h1"
        color="danger"
        textAlign="center"
        sx={{ marginTop: "1em" }}
        gutterBottom
      >
        You took a wrong turn.
      </Typography>
      <Typography variant="h2" color="initial" textAlign="center">
        Please use the navigation at the top of the screen to return to one of
        the other pages.
      </Typography>
    </>
  );
};

export default FourOhFour;
