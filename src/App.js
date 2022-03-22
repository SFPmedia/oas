import React from "react";
import "./App.scss";
import Navigation from "./frontendComponents/Navigation";
import Footer from "./frontendComponents/Footer";
import AllActivities from "./frontendComponents/AllActivities";
import AllActivitiesNU from "./frontendComponents/AllActivitiesNU";

function App() {
  return (
    <div className="App">
      <Navigation />
      <h1>Outdoor Activities</h1>
      <div className="listArea">
        <AllActivities />
        <AllActivitiesNU />
      </div>
      <Footer />
    </div>
  );
}

export default App;
