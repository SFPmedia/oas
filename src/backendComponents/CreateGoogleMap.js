import React from "react";

export default function CreateGoogleMap(props) {
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
