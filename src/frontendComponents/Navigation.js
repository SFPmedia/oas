import "../componentStyles/Navigation.scss";
import React from "react";
import PropTypes from "prop-types";

export default function Navigation() {
  return (
    <nav className="primaryNavigation">
      <Link link="#" name="Link 1" />
      <Link link="#" name="Link 2" />
      <Link link="#" name="Link 3" />
      <Link link="#" name="Link 4" />
      <Link link="#" name="Link 5" />
    </nav>
  );
}

function Link(props) {
  Link.propTypes = {
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  };
  return (
    <li>
      <a href={props.link}>{props.name}</a>
    </li>
  );
}
