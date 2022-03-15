import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

const index = (props) => {
  const className = [
    "btn",
    "btn-custom",
    "px-5",
    "py-3",
    "text-uppercase",
    "rounded-0",
    "text-white",
  ];
  className.push(props.className);

  return (
    <Link className={className.join(" ")} to={props.href}>
      {props.children}
    </Link>
  );
};

index.propTypes = {
  className: propTypes.string,
  href: propTypes.string,
};

export default index;
