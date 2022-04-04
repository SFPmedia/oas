// Abbreviation explanations:
// "ls" = local storage, "SL" = Search List

import "../componentStyles/ActivityList.scss";
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../componentStyles/ActivityListTheme";
import { Container, Button, Typography, TextField } from "@mui/material";
import SingularActivity from "./SingularActivity";

export default class AllActivities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: [],
      userSearch: " Name",
      searchInput: "name",
      searchSelectVisibleStatus: false,
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

  searchSelectVisible = () => {
    if (this.state.searchSelectVisibleStatus === false) {
      return this.setState({ searchSelectVisibleStatus: true });
    } else {
      return this.setState({ searchSelectVisibleStatus: false });
    }
  };

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
    this.setState({ searchSelectVisibleStatus: false });
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
      <ThemeProvider theme={theme}>
        <Container>
          <Button variant="contained" onClick={this.forceListUpdate}>
            Force Latest Update
          </Button>
          <Typography variant="h2" color="initial" align="center">
            All Activities
          </Typography>

          <div id="filterArea">
            <div className="dropdownSL">
              <Button
                variant="contained"
                sx={{ marginTop: "0" }}
                onClick={this.searchSelectVisible}
              >
                Search by
              </Button>
              <Container
                className="dropdownContentSL"
                sx={
                  this.state.searchSelectVisibleStatus
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                <Button
                  variant="contained"
                  onClick={() => this.searchSelect("Name")}
                  style={{
                    backgroundColor: this.searchSelectColor("name"),
                  }}
                >
                  Name
                </Button>

                <Button
                  variant="contained"
                  onClick={() => this.searchSelect("Type")}
                  style={{
                    backgroundColor: this.searchSelectColor("type"),
                  }}
                >
                  Type
                </Button>
                <Button
                  variant="contained"
                  onClick={() => this.searchSelect("Description")}
                  style={{
                    backgroundColor: this.searchSelectColor("description"),
                  }}
                >
                  Description
                </Button>
                <Button
                  variant="contained"
                  onClick={() => this.searchSelect("City")}
                  style={{
                    backgroundColor: this.searchSelectColor("city"),
                  }}
                >
                  City
                </Button>
                <Button
                  variant="contained"
                  onClick={() => this.searchSelect("Municipality")}
                  style={{
                    backgroundColor: this.searchSelectColor("municipality"),
                  }}
                >
                  Municipality
                </Button>
                <Button
                  variant="contained"
                  onClick={() => this.searchSelect("County")}
                  style={{
                    backgroundColor: this.searchSelectColor("county"),
                  }}
                >
                  County
                </Button>
                <Button
                  variant="contained"
                  onClick={() => this.searchSelect("Opening-Hours")}
                  style={{
                    backgroundColor: this.searchSelectColor("opening-hours"),
                  }}
                >
                  Opening-Hours
                </Button>
                <Button
                  variant="contained"
                  onClick={() => this.searchSelect("Closing-Hours")}
                  style={{
                    backgroundColor: this.searchSelectColor("closing-hours"),
                  }}
                >
                  Closing-Hours
                </Button>
                <Button
                  variant="contained"
                  onClick={() => this.searchSelect("Country")}
                  style={{
                    backgroundColor: this.searchSelectColor("country"),
                  }}
                >
                  Country
                </Button>
                <Button
                  variant="contained"
                  onClick={() => this.searchSelect("Subregion")}
                  style={{
                    backgroundColor: this.searchSelectColor("subregion"),
                  }}
                >
                  Subregion
                </Button>
                <Button
                  variant="contained"
                  onClick={() => this.searchSelect("Region")}
                  style={{
                    backgroundColor: this.searchSelectColor("region"),
                  }}
                >
                  Region
                </Button>
              </Container>
            </div>

            <TextField
              id="filterInput"
              label={this.state.userSearch}
              type="search"
              variant="standard"
              onChange={this.handleFilterActivityList}
            />
          </div>

          {this.state.activities.map((activity) => [
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
}
