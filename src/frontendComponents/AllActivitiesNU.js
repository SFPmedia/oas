// Abbreviation explanations:
// "NU" = Near User, "ls" = local storage, "AL" = Activity List, "GM" = Google Maps

import "../componentStyles/ActivityList.css";
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../componentStyles/ActivityListTheme";
import { Button, Typography, TextField } from "@mui/material";
import Container from "@mui/material/Container";
import SingularActivity from "./SingularActivity";

const currentMomentNU = new Date();

export default class AllActivitiesNU extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activitiesNU: [],
      positionAccuracy: null,
    };
  }

  componentDidMount() {
    if (
      localStorage.getItem("activitiesNU") &&
      currentMomentNU.getTime() <= localStorage.getItem("lsExpirationTimeNU")
    ) {
      const getLocalStorageNU = JSON.parse(
        localStorage.getItem("activitiesNU")
      );
      const activitiesNU = getLocalStorageNU;
      this.setState({ activitiesNU });
      console.log("LocalStorage activitiesNU have been found. Using those.");
    } else {
      localStorage.removeItem("activitiesNU");
      localStorage.removeItem("lsExpirationTimeNU");
      fetch("https://sfpmedia.dk/db_api_oas/readActivities.php")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          localStorage.setItem("activitiesNU", JSON.stringify(data));
          localStorage.setItem(
            "lsExpirationTimeNU",
            JSON.stringify(new Date().getTime() + 1000 * 60 * 60 * 18)
          );
          const getLocalStorage = JSON.parse(
            localStorage.getItem("activitiesNU")
          );
          const activitiesNU = getLocalStorage;
          this.setState({ activitiesNU });
          console.log(
            "LocalStorage activitiesNU were not found. Getting and using new ones."
          );
        });
    }
    navigator.geolocation.getCurrentPosition(this.accuracySuccess);
  }

  getCurrentLocation = (position) => {
    let searchResultNU = [];
    let latArr = [];
    let lonArr = [];
    let distanceResult = [];
    let i;
    let k;
    let userInput = document.getElementById("filterInputNU").value;

    const getLocalStorageNU = JSON.parse(localStorage.getItem("activitiesNU"));
    const activityArr = getLocalStorageNU;

    for (i = 0; i < activityArr.length; i++) {
      latArr.push(activityArr[i].latitude);
      lonArr.push(activityArr[i].longitude);
    }

    for (k = 0; k < latArr.length; k++) {
      const lat1 = activityArr[k].latitude;
      const lon1 = activityArr[k].longitude;
      const lat2 = position.coords.latitude;
      const lon2 = position.coords.longitude;

      const R = 6371e3; // metres
      const φ1 = (lat1 * Math.PI) / 180; // φ, λ in radians
      const φ2 = (lat2 * Math.PI) / 180;
      const Δφ = ((lat2 - lat1) * Math.PI) / 180;
      const Δλ = ((lon2 - lon1) * Math.PI) / 180;

      const a =
        Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
        Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

      const d = R * c; // in metres
      const kmConverstion = d / 1000;
      const kmShortened = kmConverstion.toFixed(2);

      if (kmConverstion < userInput) {
        console.log(
          "total distance to " +
            getLocalStorageNU[k].name +
            ": " +
            kmShortened +
            "is < userinput: " +
            userInput
        );
        distanceResult.push(1);
        searchResultNU.push(getLocalStorageNU[k]);
      } else {
        console.log(
          "total distance to " +
            getLocalStorageNU[k].name +
            ": " +
            kmShortened +
            "is > userinput: " +
            userInput
        );
        distanceResult.push(0);
      }
    }

    this.setState({
      activitiesNU: searchResultNU,
    });
  };

  accuracySuccess = (position) => {
    return this.setState({
      positionAccuracy: position.coords.accuracy,
    });
  };

  // forceListUpdateNU() gives the user a way to clear the local storage, get the latest data from the server and then insert that into the local storage and "this.state.activities" state.
  forceListUpdateNU = () => {
    localStorage.removeItem("activitiesNU");
    localStorage.removeItem("lsExpirationTimeNU");
    fetch("https://sfpmedia.dk/db_api_oas/readActivities.php")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        localStorage.setItem("activitiesNU", JSON.stringify(data));
        localStorage.setItem(
          "lsExpirationTimeNU",
          JSON.stringify(new Date().getTime() + 1000 * 60 * 60 * 18)
        );
        const getLocalStorage = JSON.parse(
          localStorage.getItem("activitiesNU")
        );
        const activitiesNU = getLocalStorage;
        this.setState({ activitiesNU });
        console.log("Forced update of localstorage data and react state.");
        alert(
          "Forced update successful. The list has the newest data straight from the database."
        );
      });
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <div className="activityListTop">
            <Button
              variant="contained"
              onClick={() =>
                navigator.geolocation.getCurrentPosition(
                  this.getCurrentLocation
                )
              }
            >
              Force Latest Update
            </Button>
            <Typography variant="body1" sx={{ marginTop: "1em" }}>
              User accuracy: {this.state.positionAccuracy}m
            </Typography>
          </div>
          <Typography variant="h2" color="initial" align="center">
            Activities Near You
          </Typography>
          <div id="filterArea">
            <TextField
              id="filterInputNU"
              label={"Search near you"}
              type="number"
              variant="standard"
              onChange={this.insertNewListNU}
            />
          </div>
          {this.state.activitiesNU.map((activityNU) => [
            <SingularActivity
              key={activityNU.id}
              id={activityNU.id}
              name={activityNU.name}
              type={activityNU.type}
              description={activityNU.description}
              distance={activityNU.distance}
              price={activityNU.price}
              city={activityNU.city}
              municipality={activityNU.municipality}
              county={activityNU.county}
              open_hours={activityNU.open_hours}
              closing_hours={activityNU.closing_hours}
              website_link={activityNU.website_link}
              phone={activityNU.phone}
              country={activityNU.country}
              subregion={activityNU.subregion}
              region={activityNU.region}
              geolocation={activityNU.geolocation}
            />,
          ])}
        </Container>
      </ThemeProvider>
    );
  }
}
