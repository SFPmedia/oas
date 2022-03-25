// Abbreviation explanations:
// "NU" = Near User, "ls" = local storage, "AL" = Activity List, "GM" = Google Maps

import "../componentStyles/ActivityList.scss";
import "../backendComponents/CreateGoogleMap";
import "../backendComponents/getCurrentLocation";
import React from "react";
import axios from "axios";
//import getCurrentLocation from "../backendComponents/getCurrentLocation";

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
function expandListDisplay(props) {
  var listIDProp = props;

  // Activity Introduction
  if (
    document.getElementById("AINU" + listIDProp).style.display !==
    String(displayBlock)
  ) {
    document.getElementById("AINU" + listIDProp).style.display = displayBlock;
  } else {
    setTimeout(function () {
      if (
        document.getElementById(listIDProp).style.height === String(heightSmall)
      )
        document.getElementById("AINU" + listIDProp).style.display =
          displayNone;
    }, 2000);
  }

  // Activity Local Location
  if (
    document.getElementById("ALLNU" + listIDProp).style.display !==
    String(displayBlock)
  ) {
    document.getElementById("ALLNU" + listIDProp).style.display = displayBlock;
  } else {
    setTimeout(function () {
      if (document.getElementById(listIDProp).style.height === heightSmall)
        document.getElementById("ALLNU" + listIDProp).style.display =
          displayNone;
    }, 2000);
  }

  // Activity General Information
  if (
    document.getElementById("AGINU" + listIDProp).style.display !==
    String(displayBlock)
  ) {
    document.getElementById("AGINU" + listIDProp).style.display = displayBlock;
  } else {
    setTimeout(function () {
      if (document.getElementById(listIDProp).style.height === heightSmall)
        document.getElementById("AGINU" + listIDProp).style.display =
          displayNone;
    }, 2000);
  }

  // Activity Global Position
  if (
    document.getElementById("AGPNU" + listIDProp).style.display !==
    String(displayBlock)
  ) {
    document.getElementById("AGPNU" + listIDProp).style.display = displayBlock;
  } else {
    setTimeout(function () {
      if (document.getElementById(listIDProp).style.height === heightSmall)
        document.getElementById("AGPNU" + listIDProp).style.display =
          displayNone;
    }, 2000);
  }

  // Google Map
  if (
    document.getElementById("GMNU" + listIDProp).style.display !==
    String(displayBlock)
  ) {
    document.getElementById("GMNU" + listIDProp).style.display = displayBlock;
  } else {
    setTimeout(function () {
      if (document.getElementById(listIDProp).style.height === heightSmall)
        document.getElementById("GMNU" + listIDProp).style.display =
          displayNone;
    }, 2000);
  }
}

export default class AllActivitiesNU extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activitiesNU: [],
      userSearch: 50,
      searchInputNU: "name",
    };
  }

  componentDidMount() {
    if (
      window.localStorage.getItem("activitiesNU") &&
      currentMoment.getTime() <=
        window.localStorage.getItem("lsExpirationTimeNU")
    ) {
      const getLocalStorage = JSON.parse(
        window.localStorage.getItem("activitiesNU")
      );
      const activitiesNU = getLocalStorage;
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
          const getLocalStorage = JSON.parse(
            window.localStorage.getItem("activitiesNU")
          );
          const activitiesNU = getLocalStorage;
          this.setState({ activitiesNU });
          console.log(
            "LocalStorage activitiesNU were not found. Getting and using new ones."
          );
        });
    }
  }

  getCurrentLocation = () => {
    let latArr = [];
    let lonArr = [];
    let distanceResult = [];
    let i;
    let j;
    const filterInputValue = document.getElementById("filterInputNU").value;
    const getLocalStorage = JSON.parse(
      window.localStorage.getItem("activitiesNU")
    );
    const activityArr = this.state.activitiesNU;
    let searchResultNU = [];

    for (i = 0; i < activityArr.length; i++) {
      latArr.push(activityArr[i].latitude);
      lonArr.push(activityArr[i].longitude);
    }

    console.log("latArr: " + latArr);
    console.log("lonArr: " + lonArr);

    function latitudeSuccess(position) {
      // Continue from here!
      // Before the "j" for-loop. Make antoher for-loop, which determines if the distance between user position and activity position is greater than
      // the user input.
      for (j = 0; j < latArr.length; j++) {
        if (
          position.coords.latitude < latArr[j] &&
          position.coords.longitude > lonArr[j]
        ) {
          distanceResult.push(1);
        } else {
          distanceResult.push(0);
        }
      }

      console.log("Distance result: " + distanceResult);
    }
    /*
    function longitudeSuccess(position) {
      return console.log("Latitude: " + position.coords.longitude);
    }
*/
    function accuracySuccess(position) {
      return console.log("Accuracy: " + position.coords.accuracy + " meters");
    }

    navigator.geolocation.getCurrentPosition(latitudeSuccess);
    //navigator.geolocation.getCurrentPosition(longitudeSuccess);
    navigator.geolocation.getCurrentPosition(accuracySuccess);

    for (let i = 0; i < getLocalStorage.length; i++) {
      var filterThisInputNU = getLocalStorage[i].name.toLowerCase();
      var filteredInputNU = filterThisInputNU.indexOf(
        filterInputValue.toLowerCase()
      );
      if (filteredInputNU > 0) {
        searchResultNU.push(getLocalStorage[i]);
      }
    }
    this.setState({
      activities: searchResultNU,
    });
  };

  render() {
    return (
      <div className="ActivityListArea">
        <h2>Activities Near You</h2>
        <button onClick={this.getCurrentLocation}>
          Get the current location
        </button>
        <input
          id="filterInputNU"
          type="number"
          placeholder={"Kilometer radius: " + this.state.userSearch + "?"}
          onChange={this.handleFilterActivityList}
        />
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
