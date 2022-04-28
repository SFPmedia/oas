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
      window.history.go(-1);
    }
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

  useEffect(() => {
    handleCookieConsentDisplay();
  }, [cookieStatusWatcher]);

  return (
    <ThemeProvider theme={theme}>
      {handleCookieConsentDisplay() ? (
        <Container sx={{ display: "none" }}></Container>
      ) : (
        <Container xs={12} md={10} lg={6} xl={5}>
          <Typography variant="h5" textAlign="center">
            Cookie Consent
          </Typography>
          <Typography variant="body2" textAlign="center">
            Cookies are essential for the use of this website
            <br />
            They will not be used by any third parties
          </Typography>
          <Container className="consentButtons">
            <Button
              variant="contained"
              onClick={() => handleCookieConsent(false)}
            >
              I DO NOT CONSENT
              <br />
              TAKE ME BACK
            </Button>
            <Button
              variant="contained"
              onClick={() => handleCookieConsent(true)}
            >
              I CONSENT
              <br /> I WILL STAY
            </Button>
          </Container>
        </Container>
      )}
    </ThemeProvider>
  );
}
