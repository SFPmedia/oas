//Abbreviations:
// "CPU" = Current Position of User,

export default function getCurrentLocation() {
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function onSuccess(position) {
    var CPU = position.coords;

    console.log(position.coords);
    console.log("Your current position is:");
    console.log(`Latitude : ${CPU.latitude}`);
    console.log(`Longitude: ${CPU.longitude}`);
    console.log(`More or less ${CPU.accuracy} meters.`);
  }

  function onError(err) {
    console.log(`Current Position error: (${err.code}): ${err.message}`);
  }
  return navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
}
