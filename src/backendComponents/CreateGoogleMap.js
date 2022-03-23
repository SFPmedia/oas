import React from "react";
import PropTypes from "prop-types";

export default function CreateGoogleMap(props) {
  CreateGoogleMap.propTypes = {
    mapURL: PropTypes.string.isRequired,
  };
  return (
    <div className="maps">
      <iframe
        key="4"
        src={props.mapURL}
        width="600"
        height="450"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}
