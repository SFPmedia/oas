// Abbreviation explanations:
// "NU" = Near User, "ls" = local storage, "AL" = Activity List, "GM" = Google Maps

import "../componentStyles/ActivityList.scss";
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../componentStyles/NavTheme";
import { Button, Typography, TextField } from "@mui/material";

const displayBlockNU = "block";
const displayNoneNU = "none";
const heightAutoNU = "1086px";
const heightSmallNU = "75px";
let setHeightNU = "1086px";
const currentMomentNU = new Date();

// expandList() is used for expanding and detracting the individual items on the activity list
function expandList(listExpandIDNU) {
  const listExpandHeightNU = document.getElementById("ALNU" + listExpandIDNU)
    .style.height;

  switch (listExpandHeightNU) {
    case heightAutoNU:
      setHeightNU = heightSmallNU;
      break;
    default:
      setHeightNU = heightAutoNU;
  }
  document.getElementById("ALNU" + listExpandIDNU).style.height = setHeightNU;
}

// expandListOpacity() gives an animated opacity effect on the content of the items, either on or off, whenever the expandList() function is activated
function expandListOpacity(listOpacityID) {
  const opacityFull = 1;
  const opacityNone = 0;
  const aiOpacity = document.getElementById("AINU" + listOpacityID).style
    .opacity;
  const allOpacity = document.getElementById("ALLNU" + listOpacityID).style
    .opacity;
  const agiOpacity = document.getElementById("AGINU" + listOpacityID).style
    .opacity;
  const agpOpacity = document.getElementById("AGPNU" + listOpacityID).style
    .opacity;
  const gmOpacity = document.getElementById("GMNU" + listOpacityID).style
    .opacity;

  // Activity Introduction
  switch (aiOpacity) {
    case String(opacityFull):
      document.getElementById("AINU" + listOpacityID).style.opacity =
        opacityNone;
      break;
    default:
      document.getElementById("AINU" + listOpacityID).style.opacity =
        opacityFull;
  }

  // Activity Local Location
  switch (allOpacity) {
    case String(opacityFull):
      document.getElementById("ALLNU" + listOpacityID).style.opacity =
        opacityNone;
      break;
    default:
      document.getElementById("ALLNU" + listOpacityID).style.opacity =
        opacityFull;
  }

  // Activity General Information
  switch (agiOpacity) {
    case String(opacityFull):
      document.getElementById("AGINU" + listOpacityID).style.opacity =
        opacityNone;
      break;
    default:
      document.getElementById("AGINU" + listOpacityID).style.opacity =
        opacityFull;
  }

  // Activity Global Position
  switch (agpOpacity) {
    case String(opacityFull):
      document.getElementById("AGPNU" + listOpacityID).style.opacity =
        opacityNone;
      break;
    default:
      document.getElementById("AGPNU" + listOpacityID).style.opacity =
        opacityFull;
  }

  // Google Map
  switch (gmOpacity) {
    case String(opacityFull):
      document.getElementById("GMNU" + listOpacityID).style.opacity =
        opacityNone;
      break;
    default:
      document.getElementById("GMNU" + listOpacityID).style.opacity =
        opacityFull;
  }
}

// expandListDisplay() removes the content of the list items, to make sure that the page as a whole will not have a scroll bar going on forever
// with the majority being blank space.
// It is activated after a couple of seconds when a list detracts and immedially when it expands.
function expandListDisplay(listDisplayIDNU) {
  const aiDisplayNU = document.getElementById("AINU" + listDisplayIDNU).style
    .display;
  const allDisplayNU = document.getElementById("ALLNU" + listDisplayIDNU).style
    .display;
  const agiDisplayNU = document.getElementById("AGINU" + listDisplayIDNU).style
    .display;
  const agpDisplayNU = document.getElementById("AGPNU" + listDisplayIDNU).style
    .display;
  const gmDisplayNU = document.getElementById("GMNU" + listDisplayIDNU).style
    .display;
  const objectHeightNU = document.getElementById("ALNU" + listDisplayIDNU).style
    .height;

  // Activity Introduction
  switch (aiDisplayNU) {
    case String(displayBlockNU):
      setTimeout(function () {
        if (objectHeightNU === heightSmallNU) {
          document.getElementById("AINU" + listDisplayIDNU).style.display =
            displayNoneNU;
        }
      }, 2000);
      break;
    default:
      document.getElementById("AINU" + listDisplayIDNU).style.display =
        displayBlockNU;
  }

  // Activity Local Location
  switch (allDisplayNU) {
    case String(displayBlockNU):
      setTimeout(function () {
        if (objectHeightNU === heightSmallNU)
          document.getElementById("ALLNU" + listDisplayIDNU).style.display =
            displayNoneNU;
      }, 2000);
      break;
    default:
      document.getElementById("ALLNU" + listDisplayIDNU).style.display =
        displayBlockNU;
  }

  // Activity General Information
  switch (agiDisplayNU) {
    case String(displayBlockNU):
      setTimeout(function () {
        if (objectHeightNU === heightSmallNU)
          document.getElementById("AGINU" + listDisplayIDNU).style.display =
            displayNoneNU;
      }, 2000);
      break;
    default:
      document.getElementById("AGINU" + listDisplayIDNU).style.display =
        displayBlockNU;
  }

  // Activity Global Position
  switch (agpDisplayNU) {
    case String(displayBlockNU):
      setTimeout(function () {
        if (objectHeightNU === heightSmallNU)
          document.getElementById("AGPNU" + listDisplayIDNU).style.display =
            displayNoneNU;
      }, 2000);
      break;
    default:
      document.getElementById("AGPNU" + listDisplayIDNU).style.display =
        displayBlockNU;
  }

  // Google Map
  switch (gmDisplayNU) {
    case String(displayBlockNU):
      setTimeout(function () {
        if (objectHeightNU === heightSmallNU)
          document.getElementById("GMNU" + listDisplayIDNU).style.display =
            displayNoneNU;
      }, 2000);
      break;
    default:
      document.getElementById("GMNU" + listDisplayIDNU).style.display =
        displayBlockNU;
  }
}

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

  insertNewListNU = () => {
    navigator.geolocation.getCurrentPosition(this.getCurrentLocation);
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
        <div className="ActivityListArea">
          <div className="activityListTop">
            <Button variant="contained" onClick={this.forceListUpdateNU}>
              Force Latest Update
            </Button>
            <Typography variant="body1" color="initial">
              User accuracy: {this.state.positionAccuracy}m
            </Typography>
          </div>
          <Typography variant="h2" color="initial">
            Activities Near You
          </Typography>
          <div id="filterArea">
            <TextField
              id="filterInputNU"
              label={"Search in Kilometer radius around you"}
              type="number"
              variant="standard"
              onChange={this.insertNewListNU}
            />
          </div>
          {this.state.activitiesNU.map((activityNU) => [
            <div
              className="ActivityList"
              key={"ALNU" + activityNU.id}
              id={"ALNU" + activityNU.id}
            >
              <Typography variant="h3" color="initial">
                {activityNU.name}
              </Typography>
              <span
                className="ExpandArrow"
                onClick={() => {
                  expandList(activityNU.id);
                  expandListOpacity(activityNU.id);
                  expandListDisplay(activityNU.id);
                }}
              >
                &#8691;
              </span>
              <div className="ActivityIntroduction" id={"AINU" + activityNU.id}>
                <Typography variant="h4" color="initial" gutterBottom>
                  General Info
                </Typography>
                {activityNU.type ? (
                  <Typography variant="body2" color="initial" gutterBottom>
                    Type: <br /> {activityNU.type}
                  </Typography>
                ) : (
                  <Typography variant="body2" color="initial" gutterBottom>
                    {" "}
                    Type: <br />
                    Not available
                  </Typography>
                )}
                {activityNU.description ? (
                  <Typography variant="body2" color="initial" gutterBottom>
                    Description: <br /> {activityNU.description}
                  </Typography>
                ) : (
                  <Typography variant="body2" color="initial" gutterBottom>
                    Description: <br />
                    Not available
                  </Typography>
                )}
                {activityNU.distance ? (
                  <Typography variant="body2" color="initial" gutterBottom>
                    Distance: <br /> {activityNU.distance}
                  </Typography>
                ) : (
                  <Typography variant="body2" color="initial" gutterBottom>
                    Distance: <br />
                    Not available
                  </Typography>
                )}

                {activityNU.price ? (
                  <Typography variant="body2" color="initial" gutterBottom>
                    Price: <br /> {activityNU.price},-
                  </Typography>
                ) : (
                  <Typography variant="body2" color="initial" gutterBottom>
                    Price: <br />
                    Not available
                  </Typography>
                )}
              </div>
              <div
                className="ActivityLocalLocation"
                id={"ALLNU" + activityNU.id}
              >
                <Typography variant="h4" color="initial" gutterBottom>
                  National Scale
                </Typography>
                {activityNU.city ? (
                  <Typography variant="body2" color="initial" gutterBottom>
                    City: <br /> {activityNU.city}
                  </Typography>
                ) : (
                  <Typography variant="body2" color="initial" gutterBottom>
                    City: <br />
                    Not available
                  </Typography>
                )}
                {activityNU.municipality ? (
                  <Typography variant="body2" color="initial" gutterBottom>
                    Municipality: <br /> {activityNU.municipality}
                  </Typography>
                ) : (
                  <Typography variant="body2" color="initial" gutterBottom>
                    Municipality: <br />
                    Not available
                  </Typography>
                )}
                {activityNU.county ? (
                  <Typography variant="body2" color="initial" gutterBottom>
                    County: <br /> {activityNU.county}
                  </Typography>
                ) : (
                  <Typography variant="body2" color="initial" gutterBottom>
                    County: <br />
                    Not available
                  </Typography>
                )}
              </div>
              <div
                className="ActivityGeneralInformation"
                id={"AGINU" + activityNU.id}
              >
                <Typography variant="h4" color="initial" gutterBottom>
                  Practical Info
                </Typography>
                {activityNU.open_hours ? (
                  <Typography variant="body2" color="initial" gutterBottom>
                    Opening Hours: <br /> {activityNU.open_hours}
                  </Typography>
                ) : (
                  <Typography variant="body2" color="initial" gutterBottom>
                    Opening Hours: <br />
                    Not available
                  </Typography>
                )}
                {activityNU.closing_hours ? (
                  <Typography variant="body2" color="initial" gutterBottom>
                    Closing Hours: <br /> {activityNU.closing_hours}
                  </Typography>
                ) : (
                  <Typography variant="body2" color="initial" gutterBottom>
                    Closing Hours: <br />
                    Not available
                  </Typography>
                )}
                {activityNU.website_link ? (
                  <Typography variant="body2" color="initial" gutterBottom>
                    Website: <br />
                    <a
                      href={activityNU.website_link}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {activityNU.website_link.substring(0, 36)}
                    </a>
                  </Typography>
                ) : (
                  <Typography variant="body2" color="initial" gutterBottom>
                    Website: <br />
                    Not available
                  </Typography>
                )}
                {activityNU.phone ? (
                  <Typography variant="body2" color="initial" gutterBottom>
                    Phone: <br /> {activityNU.phone}
                  </Typography>
                ) : (
                  <Typography variant="body2" color="initial" gutterBottom>
                    Phone: <br />
                    Not available
                  </Typography>
                )}
              </div>
              <div
                className="ActivityGlobalPosition"
                id={"AGPNU" + activityNU.id}
              >
                <Typography variant="h4" color="initial" gutterBottom>
                  Global Scale
                </Typography>
                {activityNU.country ? (
                  <Typography variant="body2" color="initial" gutterBottom>
                    Country: <br /> {activityNU.country}
                  </Typography>
                ) : (
                  <Typography variant="body2" color="initial" gutterBottom>
                    Country: <br />
                    Not available
                  </Typography>
                )}
                {activityNU.subregion ? (
                  <Typography variant="body2" color="initial" gutterBottom>
                    Subregion: <br /> {activityNU.subregion}
                  </Typography>
                ) : (
                  <Typography variant="body2" color="initial" gutterBottom>
                    Subregion: <br />
                    Not available
                  </Typography>
                )}
                {activityNU.region ? (
                  <Typography variant="body2" color="initial" gutterBottom>
                    Region: <br /> {activityNU.region}
                  </Typography>
                ) : (
                  <Typography variant="body2" color="initial" gutterBottom>
                    Region: <br />
                    Not available
                  </Typography>
                )}
              </div>
              <iframe
                title={"titleNumber" + activityNU.id}
                key={"GMNU" + activityNU.id}
                className="GoogleMap"
                id={"GMNU" + activityNU.id}
                src={activityNU.geolocation}
                width="600"
                height="450"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>,
          ])}
        </div>
      </ThemeProvider>
    );
  }
}
