import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./frontendComponents/Navigation";
import AboutPage from "./frontendComponents/AboutPage";
import AllActivities from "./frontendComponents/AllActivities";
import AllActivitiesNU from "./frontendComponents/AllActivitiesNU";
import FourOhFour from "./frontendComponents/FourOhFour";
import { CssBaseline, Grid, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./componentStyles/ActivityListTheme";
import { fetchActivities, accuracySuccess } from "./actions";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const handleAccuracySuccess = (position) => {
    const accuracyToKiloMeter = position.coords.accuracy / 1000;
    const accuracyToKiloMeterString = accuracyToKiloMeter
      .toString()
      .substring(0, 4);
    return dispatch(accuracySuccess(accuracyToKiloMeterString));
  };

  useEffect(() => {
    dispatch(fetchActivities());
    navigator.geolocation.getCurrentPosition(handleAccuracySuccess);
  }, []);

  return (
    <div className="App">
      <CssBaseline />
      <Navigation />
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <ThemeProvider theme={theme}>
                <Typography variant="h1" textAlign="center">
                  Outdoor Activities
                </Typography>
                <Grid container spacing={2} justifyContent="center">
                  <Grid item xs={12} md={10} lg={6} xl={5}>
                    <AllActivities />
                  </Grid>
                  <Grid item xs={12} md={10} lg={6} xl={5}>
                    <AllActivitiesNU />
                  </Grid>
                </Grid>
              </ThemeProvider>
            }
          />
          <Route path="/AboutPage" element={<AboutPage />} />
          <Route path="*" element={<FourOhFour />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
