// Abbreviation explanations:
// "NU" = Near User, "ls" = local storage, "AL" = Activity List, "GM" = Google Maps

import "../componentStyles/ActivityList.scss";
import "../backendComponents/CreateGoogleMap";
import React from "react";
import axios from "axios";

const displayBlock = "block";
const displayNone = "none";
const heightAuto = "1086px";
const heightSmall = "75px";
let setHeight = "1086px";
const currentMoment = new Date();

// expandList() is used for expanding and detracting the individual items on the activity list
function expandList(listExpandID) {
  if (
    document.getElementById("ALNU" + listExpandID).style.height !==
    String(heightAuto)
  ) {
    setHeight = heightAuto;
  } else {
    setHeight = heightSmall;
  }
  document.getElementById("ALNU" + listExpandID).style.height = setHeight;
}

// expandListOpacity() gives an animated opacity effect on the content of the items, either on or off, whenever the expandList() function is activated
function expandListOpacity(listOpacityID) {
  const opacityFull = 1;
  const opacityNone = 0;
  // Activity Introduction
  if (
    document.getElementById("AINU" + listOpacityID).style.opacity !==
    String(opacityFull)
  ) {
    document.getElementById("AINU" + listOpacityID).style.opacity = opacityFull;
  } else {
    document.getElementById("AINU" + listOpacityID).style.opacity = opacityNone;
  }

  // Activity Local Location
  if (
    document.getElementById("ALLNU" + listOpacityID).style.opacity !==
    String(opacityFull)
  ) {
    document.getElementById("ALLNU" + listOpacityID).style.opacity =
      opacityFull;
  } else {
    document.getElementById("ALLNU" + listOpacityID).style.opacity =
      opacityNone;
  }

  // Activity General Information
  if (
    document.getElementById("AGINU" + listOpacityID).style.opacity !==
    String(opacityFull)
  ) {
    document.getElementById("AGINU" + listOpacityID).style.opacity =
      opacityFull;
  } else {
    document.getElementById("AGINU" + listOpacityID).style.opacity =
      opacityNone;
  }

  // Activity Global Position
  if (
    document.getElementById("AGPNU" + listOpacityID).style.opacity !==
    String(opacityFull)
  ) {
    document.getElementById("AGPNU" + listOpacityID).style.opacity =
      opacityFull;
  } else {
    document.getElementById("AGPNU" + listOpacityID).style.opacity =
      opacityNone;
  }

  // Google Map
  if (
    document.getElementById("GMNU" + listOpacityID).style.opacity !==
    String(opacityFull)
  ) {
    document.getElementById("GMNU" + listOpacityID).style.opacity = opacityFull;
  } else {
    document.getElementById("GMNU" + listOpacityID).style.opacity = opacityNone;
  }
}

// expandListDisplay() removes the content of the list items, to make sure that the page as a whole will not have a scroll bar going on forever
// with the majority being blank space.
// It is activated after a couple of seconds when a list detracts and immedially when it expands.
function expandListDisplay(listID) {
  // Activity Introduction
  if (
    document.getElementById("AINU" + listID).style.display !==
    String(displayBlock)
  ) {
    document.getElementById("AINU" + listID).style.display = displayBlock;
  } else {
    setTimeout(function () {
      if (document.getElementById(listID).style.height === String(heightSmall))
        document.getElementById("AINU" + listID).style.display = displayNone;
    }, 2000);
  }

  // Activity Local Location
  if (
    document.getElementById("ALLNU" + listID).style.display !==
    String(displayBlock)
  ) {
    document.getElementById("ALLNU" + listID).style.display = displayBlock;
  } else {
    setTimeout(function () {
      if (document.getElementById(listID).style.height === heightSmall)
        document.getElementById("ALLNU" + listID).style.display = displayNone;
    }, 2000);
  }

  // Activity General Information
  if (
    document.getElementById("AGINU" + listID).style.display !==
    String(displayBlock)
  ) {
    document.getElementById("AGINU" + listID).style.display = displayBlock;
  } else {
    setTimeout(function () {
      if (document.getElementById(listID).style.height === heightSmall)
        document.getElementById("AGINU" + listID).style.display = displayNone;
    }, 2000);
  }

  // Activity Global Position
  if (
    document.getElementById("AGPNU" + listID).style.display !==
    String(displayBlock)
  ) {
    document.getElementById("AGPNU" + listID).style.display = displayBlock;
  } else {
    setTimeout(function () {
      if (document.getElementById(listID).style.height === heightSmall)
        document.getElementById("AGPNU" + listID).style.display = displayNone;
    }, 2000);
  }

  // Google Map
  if (
    document.getElementById("GMNU" + listID).style.display !==
    String(displayBlock)
  ) {
    document.getElementById("GMNU" + listID).style.display = displayBlock;
  } else {
    setTimeout(function () {
      if (document.getElementById(listID).style.height === heightSmall)
        document.getElementById("GMNU" + listID).style.display = displayNone;
    }, 2000);
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
      window.localStorage.getItem("activitiesNU") &&
      currentMoment.getTime() <=
        window.localStorage.getItem("lsExpirationTimeNU")
    ) {
      const getLocalStorageNU = JSON.parse(
        window.localStorage.getItem("activitiesNU")
      );
      const activitiesNU = getLocalStorageNU;
      this.setState({ activitiesNU });
      console.log("LocalStorage activitiesNU have been found. Using those.");
    } else {
      window.localStorage.removeItem("activitiesNU");
      window.localStorage.removeItem("lsExpirationTimeNU");
      axios
        .get(`http://sfpmedia.dk/db_api_oas/readActivities.php`)
        .then((res) => {
          window.localStorage.setItem("activitiesNU", JSON.stringify(res.data));
          window.localStorage.setItem(
            "lsExpirationTimeNU",
            JSON.stringify(currentMoment.getTime() + 1000 * 60 * 60 * 18)
          );
          const getLocalStorageNU = JSON.parse(
            window.localStorage.getItem("activitiesNU")
          );
          const activitiesNU = getLocalStorageNU;
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

    const getLocalStorageNU = JSON.parse(
      window.localStorage.getItem("activitiesNU")
    );
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
    window.localStorage.removeItem("activitiesNU");
    window.localStorage.removeItem("lsExpirationTimeNU");
    axios
      .get(`https://sfpmedia.dk/db_api_oas/readActivities.php`)
      .then((res) => {
        window.localStorage.setItem("activitiesNU", JSON.stringify(res.data));
        window.localStorage.setItem(
          "lsExpirationTimeNU",
          JSON.stringify(new Date().getTime() + 1000 * 60 * 60 * 18)
        );
        const getLocalStorage = JSON.parse(
          window.localStorage.getItem("activitiesNU")
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
      <div className="ActivityListArea">
        <button className="forceListUpdate" onClick={this.forceListUpdateNU}>
          Force Latest Update
        </button>
        <h2 className="listTitle">Activities Near You</h2>
        <div id="filterArea">
          <input
            id="filterInputNU"
            type="number"
            placeholder={"Search in Kilometer radius around you"}
            onChange={this.insertNewListNU}
          />
          <p>
            Accuracy of user location: Within {this.state.positionAccuracy}{" "}
            meters
          </p>
        </div>
        {this.state.activitiesNU.map((activityNU) => [
          <div
            className="ActivityList"
            key={"ALNU" + activityNU.id}
            id={"ALNU" + activityNU.id}
          >
            <h2>{activityNU.name}</h2>
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
              {activityNU.type ? (
                <p>
                  Type: <br /> {activityNU.type}
                </p>
              ) : (
                <p>
                  Type: <br />
                  Not available
                </p>
              )}
              {activityNU.description ? (
                <p>
                  Description: <br /> {activityNU.description}
                </p>
              ) : (
                <p>
                  Description: <br />
                  Not available
                </p>
              )}
              {activityNU.distance ? (
                <p>
                  Distance: <br /> {activityNU.distance}
                </p>
              ) : (
                <p>
                  Distance: <br />
                  Not available
                </p>
              )}

              {activityNU.price ? (
                <p>
                  Price: <br /> {activityNU.price}
                </p>
              ) : (
                <p>
                  Price: <br />
                  Not available
                </p>
              )}
            </div>
            <div className="ActivityLocalLocation" id={"ALLNU" + activityNU.id}>
              <h3>National Scale</h3>
              {activityNU.city ? (
                <p>
                  City: <br /> {activityNU.city}
                </p>
              ) : (
                <p>
                  City: <br />
                  Not available
                </p>
              )}
              {activityNU.municipality ? (
                <p>
                  Municipality: <br /> {activityNU.municipality}
                </p>
              ) : (
                <p>
                  Municipality: <br />
                  Not available
                </p>
              )}
              {activityNU.county ? (
                <p>
                  County: <br /> {activityNU.county}
                </p>
              ) : (
                <p>
                  County: <br />
                  Not available
                </p>
              )}
            </div>
            <div
              className="ActivityGeneralInformation"
              id={"AGINU" + activityNU.id}
            >
              {activityNU.open_hours ? (
                <p>
                  Opening Hours: <br /> {activityNU.open_hours}
                </p>
              ) : (
                <p>
                  Opening Hours: <br />
                  Not available
                </p>
              )}
              {activityNU.closing_hours ? (
                <p>
                  Closing Hours: <br /> {activityNU.closing_hours}
                </p>
              ) : (
                <p>
                  Closing Hours: <br />
                  Not available
                </p>
              )}
              {activityNU.website_link ? (
                <p>
                  Website: <br />
                  <a
                    href={activityNU.website_link}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {activityNU.website_link.substring(0, 36)}
                  </a>
                </p>
              ) : (
                <p>
                  Website: <br />
                  Not available
                </p>
              )}
              {activityNU.phone ? (
                <p>
                  Phone: <br /> {activityNU.phone}
                </p>
              ) : (
                <p key={"PhoneNU" + activityNU.id}>
                  Phone: <br />
                  Not available
                </p>
              )}
            </div>
            <div
              className="ActivityGlobalPosition"
              id={"AGPNU" + activityNU.id}
            >
              <h3>Global Scale</h3>
              {activityNU.country ? (
                <p>
                  Country: <br /> {activityNU.country}
                </p>
              ) : (
                <p>
                  Country: <br />
                  Not available
                </p>
              )}
              {activityNU.subregion ? (
                <p>
                  Subregion: <br /> {activityNU.subregion}
                </p>
              ) : (
                <p>
                  Subregion: <br />
                  Not available
                </p>
              )}
              {activityNU.region ? (
                <p>
                  Region: <br /> {activityNU.region}
                </p>
              ) : (
                <p key={"RegionNU" + activityNU.id}>
                  Region: <br />
                  Not available
                </p>
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
    );
  }
}
