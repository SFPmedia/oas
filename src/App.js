import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Navigation from "./frontendComponents/Navigation";
import Footer from "./frontendComponents/Footer";
import AllActivities from "./frontendComponents/AllActivities";
import AllActivitiesNU from "./frontendComponents/AllActivitiesNU";
import FourOhFour from "./frontendComponents/FourOhFour";
import Typography from "@mui/material/Typography";
import { CssBaseline } from "@mui/material";

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
                {" "}
                <Typography variant="h1" color="initial">
                  Outdoor Activities
                </Typography>
                <div className="listArea">
                  <AllActivities />
                  <AllActivitiesNU />
                </div>
              </>
            }
          />
          <Route exact path="/Footer" element={<Footer />} />
          <Route exact path="*" element={<FourOhFour />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
