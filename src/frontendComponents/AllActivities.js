// Abbreviation explanations:
// "ls" = local storage, "SL" = Search List

import "../componentStyles/ActivityList.scss";
import React from "react";

const displayBlock = "block";
const displayNone = "none";
const heightAuto = "1086px";
const heightSmall = "75px";
let setHeight = "1086px";

// expandList() is used for expanding and detracting the individual items on the activity list
function expandList(listExpandID) {
  const listExpandHeight = document.getElementById("AL" + listExpandID).style
    .height;

  switch (listExpandHeight) {
    case heightAuto:
      setHeight = heightSmall;
      break;
    default:
      setHeight = heightAuto;
  }
  document.getElementById("AL" + listExpandID).style.height = setHeight;
}

// expandListOpacity() gives an animated opacity effect on the content of the items, either on or off, whenever the expandList() function is activated
function expandListOpacity(listOpacityID) {
  const opacityFull = 1;
  const opacityNone = 0;
  const aiOpacity = document.getElementById("AI" + listOpacityID).style.opacity;
  const allOpacity = document.getElementById("ALL" + listOpacityID).style
    .opacity;
  const agiOpacity = document.getElementById("AGI" + listOpacityID).style
    .opacity;
  const agpOpacity = document.getElementById("AGP" + listOpacityID).style
    .opacity;
  const gmOpacity = document.getElementById("GM" + listOpacityID).style.opacity;

  // Activity Introduction
  switch (aiOpacity) {
    case String(opacityFull):
      document.getElementById("AI" + listOpacityID).style.opacity = opacityNone;
      break;
    default:
      document.getElementById("AI" + listOpacityID).style.opacity = opacityFull;
  }

  // Activity Local Location
  switch (allOpacity) {
    case String(opacityFull):
      document.getElementById("ALL" + listOpacityID).style.opacity =
        opacityNone;
      break;
    default:
      document.getElementById("ALL" + listOpacityID).style.opacity =
        opacityFull;
  }

  // Activity General Information
  switch (agiOpacity) {
    case String(opacityFull):
      document.getElementById("AGI" + listOpacityID).style.opacity =
        opacityNone;
      break;
    default:
      document.getElementById("AGI" + listOpacityID).style.opacity =
        opacityFull;
  }

  // Activity Global Position
  switch (agpOpacity) {
    case String(opacityFull):
      document.getElementById("AGP" + listOpacityID).style.opacity =
        opacityNone;
      break;
    default:
      document.getElementById("AGP" + listOpacityID).style.opacity =
        opacityFull;
  }

  // Google Map
  switch (gmOpacity) {
    case String(opacityFull):
      document.getElementById("GM" + listOpacityID).style.opacity = opacityNone;
      break;
    default:
      document.getElementById("GM" + listOpacityID).style.opacity = opacityFull;
  }
}

// expandListDisplay() removes the content of the list items, to make sure that the page as a whole will not have a scroll bar going on forever
// with the majority being blank space.
// It is activated after a couple of seconds when a list detracts and immedially when it expands.
function expandListDisplay(listDisplayID) {
  const aiDisplay = document.getElementById("AI" + listDisplayID).style.display;
  const allDisplay = document.getElementById("ALL" + listDisplayID).style
    .display;
  const agiDisplay = document.getElementById("AGI" + listDisplayID).style
    .display;
  const agpDisplay = document.getElementById("AGP" + listDisplayID).style
    .display;
  const gmDisplay = document.getElementById("GM" + listDisplayID).style.display;
  const objectHeight = document.getElementById("AL" + listDisplayID).style
    .height;

  // Activity Introduction
  switch (aiDisplay) {
    case String(displayBlock):
      setTimeout(function () {
        if (objectHeight === heightSmall)
          document.getElementById("AI" + listDisplayID).style.display =
            displayNone;
      }, 2000);
      break;
    default:
      document.getElementById("AI" + listDisplayID).style.display =
        displayBlock;
  }

  // Activity Local Location
  switch (allDisplay) {
    case String(displayBlock):
      setTimeout(function () {
        if (objectHeight === heightSmall)
          document.getElementById("ALL" + listDisplayID).style.display =
            displayNone;
      }, 2000);
      break;
    default:
      document.getElementById("ALL" + listDisplayID).style.display =
        displayBlock;
  }

  // Activity General Information
  switch (agiDisplay) {
    case String(displayBlock):
      setTimeout(function () {
        if (objectHeight === heightSmall)
          document.getElementById("AGI" + listDisplayID).style.display =
            displayNone;
      }, 2000);
      break;
    default:
      document.getElementById("AGI" + listDisplayID).style.display =
        displayBlock;
  }

  // Activity Global Position
  switch (agpDisplay) {
    case String(displayBlock):
      setTimeout(function () {
        if (objectHeight === heightSmall)
          document.getElementById("AGP" + listDisplayID).style.display =
            displayNone;
      }, 2000);
      break;
    default:
      document.getElementById("AGP" + listDisplayID).style.display =
        displayBlock;
  }

  // Google Map
  switch (gmDisplay) {
    case String(displayBlock):
      setTimeout(function () {
        if (objectHeight === heightSmall)
          document.getElementById("GM" + listDisplayID).style.display =
            displayNone;
      }, 2000);
      break;
    default:
      document.getElementById("GM" + listDisplayID).style.display =
        displayBlock;
  }
}

export default class AllActivities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: [],
      userSearch: " Name",
      searchInput: "name",
    };
  }

  // Whenever a person types in the search bar, this function filters through the entire list and only returns a list that corresponds with
  // what the user is searching for
  handleFilterActivityList = () => {
    const filterInputValue = document.getElementById("filterInput").value;
    const getLocalStorage = JSON.parse(localStorage.getItem("activities"));
    let searchResult = [];

    for (let i = 0; i < getLocalStorage.length; i++) {
      var filterThisInput = getLocalStorage[i].name.toLowerCase();
      let userSearchInput = this.state.searchInput;

      switch (userSearchInput) {
        case "name":
          filterThisInput = getLocalStorage[i].name.toLowerCase();
          break;
        case "type":
          filterThisInput = getLocalStorage[i].type.toLowerCase();
          break;
        case "description":
          filterThisInput = getLocalStorage[i].description.toLowerCase();
          break;
        case "city":
          filterThisInput = getLocalStorage[i].city.toLowerCase();
          break;
        case "municipality":
          filterThisInput = getLocalStorage[i].municipality.toLowerCase();
          break;
        case "county":
          filterThisInput = getLocalStorage[i].county.toLowerCase();
          break;
        case "opening-hours":
          filterThisInput = getLocalStorage[i].open_hours.toLowerCase();
          break;
        case "closing-hours":
          filterThisInput = getLocalStorage[i].closing_hours.toLowerCase();
          break;
        case "country":
          filterThisInput = getLocalStorage[i].country.toLowerCase();
          break;
        case "subregion":
          filterThisInput = getLocalStorage[i].subregion.toLowerCase();
          break;
        case "region":
          filterThisInput = getLocalStorage[i].region.toLowerCase();
          break;

        default:
          filterThisInput = getLocalStorage[i].name.toLowerCase();
      }

      var filteredInput = filterThisInput.indexOf(
        filterInputValue.toLowerCase()
      );
      if (filteredInput > -1) {
        searchResult.push(getLocalStorage[i]);
      }
    }
    this.setState({
      activities: searchResult,
    });
  };

  // When the react component has mounted, it is checked if data can already be found in the local storage and if said data is not older than 18 hours.
  // If data has been found and it is not older than 18 hours. Then that data will be inserted into the "this.state.activities" list. This data will then
  // be used to generate the list.
  // If the 2 conditions are not true. It will retrieve a new set of data from the database on the server, via a webAPI and insert that data into "this.state.activities" instead.
  componentDidMount() {
    if (
      localStorage.getItem("activities") &&
      new Date().getTime() <= localStorage.getItem("lsExpirationTime")
    ) {
      const getLocalStorage = JSON.parse(localStorage.getItem("activities"));
      const activities = getLocalStorage;
      this.setState({ activities });
      console.log("LocalStorage activities have been found. Using those.");
    } else {
      localStorage.removeItem("activities");
      localStorage.removeItem("lsExpirationTime");

      fetch("https://sfpmedia.dk/db_api_oas/readActivities.php")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          localStorage.setItem("activities", JSON.stringify(data));
          localStorage.setItem(
            "lsExpirationTime",
            JSON.stringify(new Date().getTime() + 1000 * 60 * 60 * 18)
          );
          const getLocalStorage = JSON.parse(
            localStorage.getItem("activities")
          );
          const activities = getLocalStorage;
          this.setState({ activities });
          console.log(
            "LocalStorage activities were not found. Getting and using new ones."
          );
        });
    }
  }

  // The searchSelect() function allows the user to choose which type of information the filter should search by.
  searchSelect(Search) {
    var text;
    var userSearchType;
    var searchType = Search;
    switch (searchType) {
      case "Name":
        text = " Name";
        userSearchType = "name";
        break;
      case "Type":
        text = " Type";
        userSearchType = "type";
        break;
      case "Description":
        text = " Description";
        userSearchType = "description";
        break;
      case "City":
        text = " City";
        userSearchType = "city";
        break;
      case "Municipality":
        text = " Municipality";
        userSearchType = "municipality";
        break;
      case "County":
        text = " County";
        userSearchType = "county";
        break;
      case "Opening-Hours":
        text = " Opening Hours";
        userSearchType = "opening-hours";
        break;
      case "Closing-Hours":
        text = " Closing Hours";
        userSearchType = "closing-hours";
        break;
      case "Country":
        text = " Country";
        userSearchType = "country";
        break;
      case "Subregion":
        text = " Subregion";
        userSearchType = "subregion";
        break;
      case "Region":
        text = " Region";
        userSearchType = "region";
        break;

      default:
        text = " Name";
        userSearchType = "name";
    }
    this.setState({ userSearch: text });
    this.setState({ searchInput: userSearchType });
  }

  // forceListUpdate() gives the user a way to clear the local storage, get the latest data from the server and then insert that into the local storage and "this.state.activities" state.
  forceListUpdate = () => {
    localStorage.removeItem("activities");
    localStorage.removeItem("lsExpirationTime");

    fetch("https://sfpmedia.dk/db_api_oas/readActivities.php")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        localStorage.setItem("activities", JSON.stringify(data));
        localStorage.setItem(
          "lsExpirationTime",
          JSON.stringify(new Date().getTime() + 1000 * 60 * 60 * 18)
        );
        const getLocalStorage = JSON.parse(localStorage.getItem("activities"));
        const activities = getLocalStorage;
        this.setState({ activities });
        console.log("Forced update of localstorage data and react state.");
        alert(
          "Forced update successful. The list has the newest data straight from the database."
        );
      });
  };

  // searchSelectColor() simply highlights the color of the selected search criteria.
  searchSelectColor(searchColor) {
    if (this.state.searchInput === searchColor) {
      return "rgba(255, 222, 113, 1)";
    } else {
      return "rgba(203, 224, 199, 1)";
    }
  }

  render() {
    return (
      <div className="ActivityListArea">
        <button className="forceListUpdate" onClick={this.forceListUpdate}>
          Force Latest Update
        </button>
        <h2 className="listTitle">All Activities</h2>
        <div id="filterArea">
          <div className="dropdownSL">
            <button className="searchbtn">Search by</button>
            <div className="dropdownContentSL">
              <button
                onClick={() => this.searchSelect("Name")}
                style={{ backgroundColor: this.searchSelectColor("name") }}
              >
                Name
              </button>

              <button
                onClick={() => this.searchSelect("Type")}
                style={{ backgroundColor: this.searchSelectColor("type") }}
              >
                Type
              </button>
              <button
                onClick={() => this.searchSelect("Description")}
                style={{
                  backgroundColor: this.searchSelectColor("description"),
                }}
              >
                Description
              </button>
              <button
                onClick={() => this.searchSelect("City")}
                style={{ backgroundColor: this.searchSelectColor("city") }}
              >
                City
              </button>
              <button
                onClick={() => this.searchSelect("Municipality")}
                style={{
                  backgroundColor: this.searchSelectColor("municipality"),
                }}
              >
                Municipality
              </button>
              <button
                onClick={() => this.searchSelect("County")}
                style={{ backgroundColor: this.searchSelectColor("county") }}
              >
                County
              </button>
              <button
                onClick={() => this.searchSelect("Opening-Hours")}
                style={{
                  backgroundColor: this.searchSelectColor("opening-hours"),
                }}
              >
                Opening-Hours
              </button>
              <button
                onClick={() => this.searchSelect("Closing-Hours")}
                style={{
                  backgroundColor: this.searchSelectColor("closing-hours"),
                }}
              >
                Closing-Hours
              </button>
              <button
                onClick={() => this.searchSelect("Country")}
                style={{ backgroundColor: this.searchSelectColor("country") }}
              >
                Country
              </button>
              <button
                onClick={() => this.searchSelect("Subregion")}
                style={{ backgroundColor: this.searchSelectColor("subregion") }}
              >
                Subregion
              </button>
              <button
                onClick={() => this.searchSelect("Region")}
                style={{ backgroundColor: this.searchSelectColor("region") }}
              >
                Region
              </button>
            </div>
          </div>

          <input
            id="filterInput"
            type="text"
            placeholder={this.state.userSearch}
            onChange={this.handleFilterActivityList}
          />
        </div>

        {this.state.activities.map((activity) => [
          <div
            className="ActivityList"
            key={activity.id}
            id={"AL" + activity.id}
          >
            <h2>{activity.name}</h2>
            <span
              className="ExpandArrow"
              onClick={() => {
                expandList(activity.id);
                expandListOpacity(activity.id);
                expandListDisplay(activity.id);
              }}
            >
              &#8691;
            </span>
            <div className="ActivityIntroduction" id={"AI" + activity.id}>
              {activity.type ? (
                <p>
                  Type: <br /> {activity.type}
                </p>
              ) : (
                <p>
                  Type: <br />
                  Not available
                </p>
              )}
              {activity.description ? (
                <p>
                  Description: <br /> {activity.description}
                </p>
              ) : (
                <p>
                  Description: <br />
                  Not available
                </p>
              )}
              {activity.distance ? (
                <p>
                  Distance: <br /> {activity.distance}
                </p>
              ) : (
                <p>
                  Distance: <br />
                  Not available
                </p>
              )}

              {activity.price ? (
                <p>
                  Price: <br /> {activity.price},-
                </p>
              ) : (
                <p>
                  Price: <br />
                  Not available
                </p>
              )}
            </div>
            <div className="ActivityLocalLocation" id={"ALL" + activity.id}>
              <h3>National Scale</h3>
              {activity.city ? (
                <p>
                  City: <br /> {activity.city}
                </p>
              ) : (
                <p>
                  City: <br />
                  Not available
                </p>
              )}
              {activity.municipality ? (
                <p>
                  Municipality: <br /> {activity.municipality}
                </p>
              ) : (
                <p>
                  Municipality: <br />
                  Not available
                </p>
              )}
              {activity.county ? (
                <p>
                  County: <br /> {activity.county}
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
              id={"AGI" + activity.id}
            >
              {activity.open_hours ? (
                <p>
                  Opening Hours: <br /> {activity.open_hours}
                </p>
              ) : (
                <p>
                  Opening Hours: <br />
                  Not available
                </p>
              )}
              {activity.closing_hours ? (
                <p>
                  Closing Hours: <br /> {activity.closing_hours}
                </p>
              ) : (
                <p>
                  Closing Hours: <br />
                  Not available
                </p>
              )}
              {activity.website_link ? (
                <p>
                  Website: <br />
                  <a
                    href={activity.website_link}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {activity.website_link.substring(0, 36)}
                  </a>
                </p>
              ) : (
                <p>
                  Website: <br />
                  Not available
                </p>
              )}
              {activity.phone ? (
                <p>
                  Phone: <br /> {activity.phone}
                </p>
              ) : (
                <p key={activity.id}>
                  Phone: <br />
                  Not available
                </p>
              )}
            </div>
            <div className="ActivityGlobalPosition" id={"AGP" + activity.id}>
              <h3>Global Scale</h3>
              {activity.country ? (
                <p>
                  Country: <br /> {activity.country}
                </p>
              ) : (
                <p>
                  Country: <br />
                  Not available
                </p>
              )}
              {activity.subregion ? (
                <p>
                  Subregion: <br /> {activity.subregion}
                </p>
              ) : (
                <p>
                  Subregion: <br />
                  Not available
                </p>
              )}
              {activity.region ? (
                <p>
                  Region: <br /> {activity.region}
                </p>
              ) : (
                <p key={activity.id}>
                  Region: <br />
                  Not available
                </p>
              )}
            </div>
            <iframe
              title={"titleNumber" + activity.id}
              key={activity.id}
              className="GoogleMap"
              id={"GM" + activity.id}
              src={activity.geolocation}
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
