import React, { useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../componentStyles/CookieConsentTheme";
import { Container, Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { cookieConsentStatus } from "../actions";

export default function CookieConsent() {
  const cookieStatusWatcher = useSelector(
    (state) => state.cookieConsentChoiceMade
  );
  const dispatch = useDispatch();

  const handleCookieConsent = (status) => {
    console.log(status);
    dispatch(cookieConsentStatus(status));
    console.log(cookieStatusWatcher);
    if (status === true) {
      localStorage.setItem("CookieConsentStatus", status);
    } else {
      localStorage.clear();
      sessionStorage.clear();
    }
    console.log(cookieStatusWatcher);
  };

  const handleCookieConsentDisplay = () => {
    const cookieConsentCurrentStatus = localStorage.getItem(
      "CookieConsentStatus"
    );
    if (cookieConsentCurrentStatus === "true") {
      return true;
    } else if (cookieStatusWatcher === true || cookieStatusWatcher === false) {
      return true;
    } else {
      return null;
    }
  };

  const redoCookieChoice = () => {
    localStorage.removeItem("CookieConsentStatus");
    dispatch(cookieConsentStatus(null));
    handleCookieConsentDisplay();
  };

  useEffect(() => {
    handleCookieConsentDisplay();
  }, [cookieStatusWatcher]);

  return (
    <ThemeProvider theme={theme}>
      {handleCookieConsentDisplay() ? (
        <Container sx={{ opacity: "75%" }}>
          <Container className="consentButtons">
            <Button variant="contained" onClick={() => redoCookieChoice()}>
              COOKIE CHOICE
            </Button>
          </Container>
        </Container>
      ) : (
        <Container>
          <Typography variant="h5" textAlign="center">
            Cookie Consent
          </Typography>
          <Typography variant="body2" textAlign="center">
            Allowing cookies will improve performance
          </Typography>
          <Container className="consentButtons">
            <Button
              variant="contained"
              onClick={() => handleCookieConsent(false)}
            >
              I DO NOT CONSENT
            </Button>
            <Button
              variant="contained"
              onClick={() => handleCookieConsent(true)}
            >
              I CONSENT
            </Button>
          </Container>
        </Container>
      )}
    </ThemeProvider>
  );
}
