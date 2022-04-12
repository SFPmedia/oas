// Abbreviation explanations:
// "ls" = local storage, "SL" = Search List

import React, { useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../componentStyles/ActivityListTheme";
import { Container, Button, Typography, TextField } from "@mui/material";
import SingularActivity from "./SingularActivity";

export default function AllActivities() {
  const [activities, setActivities] = useState([]);
  const [userSearch, setUserSearch] = useState(" Name");
  const [searchInput, setSearchInput] = useState("name");
  const [searchSelectVisibleStatus, setSearchSelectVisibleStatus] =
    useState(false);

  // When the react component has mounted, the useEffect checks if data can already be found in the local storage and if said data is not older than 18 hours.
  // If data has been found and it is not older than 18 hours. Then that data will be inserted into the "activities" list. This data will then
  // be used to generate the list.
  // If the 2 conditions are not true. It will retrieve a new set of data from the database on the server, via a webAPI and insert that data into "activities" instead.
  useEffect(() => {
    if (
      localStorage.getItem("activities") &&
      new Date().getTime() <= localStorage.getItem("lsExpirationTime")
    ) {
      const getLocalStorage = JSON.parse(localStorage.getItem("activities"));
      const activities = getLocalStorage;
      setActivities(activities);
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
          setActivities(activities);
          console.log(
            "LocalStorage activities were not found. Getting and using new ones."
          );
        });
    }
  }, []);

  // Whenever a person types in the search bar, this function filters through the entire list and only returns a list that corresponds with
  // what the user is searching for
  const handleFilterActivityList = () => {
    const filterInputValue = document.getElementById("filterInput").value;
    const getLocalStorage = JSON.parse(localStorage.getItem("activities"));
    let searchResult = [];

    for (let i = 0; i < getLocalStorage.length; i++) {
      var filterThisInput = getLocalStorage[i].name.toLowerCase();
      let userSearchInput = searchInput;

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
    setActivities(searchResult);
  };

  // Determines whether or not the list is shown or not, when the button "SEARCH BY" is clicked.
  const searchSelectVisible = () => {
    if (searchSelectVisibleStatus === false) {
      return setSearchSelectVisibleStatus(true);
    } else {
      return setSearchSelectVisibleStatus(false);
    }
  };

  // The searchSelect() function allows the user to choose which type of information the filter should search by.
  const searchSelect = (Search) => {
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
    setUserSearch(text);
    setSearchInput(userSearchType);
    setSearchSelectVisibleStatus(false);
  };

  // forceListUpdate() gives the user a way to clear the local storage, get the latest data from the server and then insert that into the local storage and "activities" state.
  const forceListUpdate = () => {
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
        setActivities(activities);
        console.log("Forced update of localstorage data and react state.");
        alert(
          "Forced update successful. The list has the newest data straight from the database."
        );
      });
  };

  // searchSelectColor() simply highlights the color of the selected search criteria.
  const searchSelectColor = (searchColor) => {
    if (searchInput === searchColor) {
      return "rgba(255, 222, 113, 1)";
    } else {
      return "rgba(203, 224, 199, 1)";
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Button variant="contained" onClick={forceListUpdate}>
          Force Latest Update
        </Button>
        <Typography variant="h2" textAlign="center">
          All Activities
        </Typography>

        <div id="filterArea">
          <div className="dropdownSL">
            <Button
              variant="contained"
              sx={{ marginTop: "0" }}
              onClick={searchSelectVisible}
            >
              Search by
            </Button>
            <Container
              className="dropdownContentSL"
              sx={
                searchSelectVisibleStatus
                  ? { display: "block" }
                  : { display: "none" }
              }
            >
              <Button
                variant="contained"
                onClick={() => searchSelect("Name")}
                style={{
                  backgroundColor: searchSelectColor("name"),
                }}
              >
                Name
              </Button>

              <Button
                variant="contained"
                onClick={() => searchSelect("Type")}
                style={{
                  backgroundColor: searchSelectColor("type"),
                }}
              >
                Type
              </Button>
              <Button
                variant="contained"
                onClick={() => searchSelect("Description")}
                style={{
                  backgroundColor: searchSelectColor("description"),
                }}
              >
                Description
              </Button>
              <Button
                variant="contained"
                onClick={() => searchSelect("City")}
                style={{
                  backgroundColor: searchSelectColor("city"),
                }}
              >
                City
              </Button>
              <Button
                variant="contained"
                onClick={() => searchSelect("Municipality")}
                style={{
                  backgroundColor: searchSelectColor("municipality"),
                }}
              >
                Municipality
              </Button>
              <Button
                variant="contained"
                onClick={() => searchSelect("County")}
                style={{
                  backgroundColor: searchSelectColor("county"),
                }}
              >
                County
              </Button>
              <Button
                variant="contained"
                onClick={() => searchSelect("Opening-Hours")}
                style={{
                  backgroundColor: searchSelectColor("opening-hours"),
                }}
              >
                Opening-Hours
              </Button>
              <Button
                variant="contained"
                onClick={() => searchSelect("Closing-Hours")}
                style={{
                  backgroundColor: searchSelectColor("closing-hours"),
                }}
              >
                Closing-Hours
              </Button>
              <Button
                variant="contained"
                onClick={() => searchSelect("Country")}
                style={{
                  backgroundColor: searchSelectColor("country"),
                }}
              >
                Country
              </Button>
              <Button
                variant="contained"
                onClick={() => searchSelect("Subregion")}
                style={{
                  backgroundColor: searchSelectColor("subregion"),
                }}
              >
                Subregion
              </Button>
              <Button
                variant="contained"
                onClick={() => searchSelect("Region")}
                style={{
                  backgroundColor: searchSelectColor("region"),
                }}
              >
                Region
              </Button>
            </Container>
          </div>

          <TextField
            id="filterInput"
            label={userSearch}
            type="search"
            variant="standard"
            onChange={handleFilterActivityList}
          />
        </div>

        {activities.map((activity) => [
          <SingularActivity
            key={activity.id}
            id={activity.id}
            name={activity.name}
            type={activity.type}
            description={activity.description}
            distance={activity.distance}
            price={activity.price}
            city={activity.city}
            municipality={activity.municipality}
            county={activity.county}
            open_hours={activity.open_hours}
            closing_hours={activity.closing_hours}
            website_link={activity.website_link}
            phone={activity.phone}
            country={activity.country}
            subregion={activity.subregion}
            region={activity.region}
            geolocation={activity.geolocation}
          />,
        ])}
      </Container>
    </ThemeProvider>
  );
}
