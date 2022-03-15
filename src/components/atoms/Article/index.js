import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

const index = (props) => {
  const className = [
    "text-decoration-none",
    "mb-1 d-block",
    "text-fade-1",
    "border-bottom",
    "pb-3",
    "mb-3",
    "border-bottom-1px",
  ];
  className.push(props.className);

  return (
    <Link className={className.join(" ")} to={props.href}>
      <span className="text-fade-1 fw-bold">{props.title}</span>
      <br /> {props.date}
    </Link>
  );
};

index.propTypes = {
  className: propTypes.string,
  href: propTypes.string,
  title: propTypes.string,
  date: propTypes.string,
};

export default index;
