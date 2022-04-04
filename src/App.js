import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./frontendComponents/Navigation";
import AboutPage from "./frontendComponents/AboutPage";
import AllActivities from "./frontendComponents/AllActivities";
import AllActivitiesNU from "./frontendComponents/AllActivitiesNU";
import FourOhFour from "./frontendComponents/FourOhFour";
import Typography from "@mui/material/Typography";
import { CssBaseline, Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./componentStyles/ActivityListTheme";

function App() {
  return (
    <Router>
      <div className="App">
        <CssBaseline />
        <Navigation />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <ThemeProvider theme={theme}>
                  <Typography variant="h1" color="initial" textAlign="center">
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
              </>
            }
          />
          <Route exact path="/AboutPage" element={<AboutPage />} />
          <Route exact path="*" element={<FourOhFour />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
