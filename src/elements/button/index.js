import React from "react";
import { Link } from "react-router-dom";
import propsTypes from "prop-types";

export default function Button(props) {
  const className = [props.className];
  if (props.isPrimary) className.push["btn-primary"];
  if (props.isLarge) className.push["btn-lg"];
  if (props.isSmall) className.push["btn-sm"];
  if (props.isBlock) className.push["btn-block"];
  if (props.hasShadow) className.push["btn-shadow"];

  const onClick = () => {
    if (props.onClick) props.onClick();
  };
  if(props.isDisabled || props.isLoading){
  if(props.isDisabled) className.push("disabled")
  return(
  <span className={className.join(" ")}
  style={props.style}>
    {props.isLoading?<><span className="spinner-border spinner-border-sm mx-5"></span>
    <span className="sr-only">Loading .... </span>
    </>: (props.children)}
  </span>)
  }
  if (props.type === "link") {
    if (props.isExternal) {
      return (
        <a
          href={props.href}
          className={className.join(" ")}
          style={props.style}
          target={(props.target === "_blank") | ("_blank" === undefined)}
          rel={props.target === "blank" ? "noopener noreferrer" : undefined}
        >
          {props.children}
        </a>
      );
    } else {
      return (
        <Link
          to={props.href}
          className={props.style}
          style={props.style}
          onClick={onClick}
        >
          {props.children}
        </Link>
      );
    }
  }
  return(
  <button className={className.join(" ")} style={props.style} onClick={onClick}>
    {props.children}
  </button>
  )
}

Button.propsTypes = {
  //this just check for types of button
  types: propsTypes.oneOf(["button", "Link"]),
  onClick: propsTypes.function,
  target: propsTypes.string,
  href: propsTypes.string,
  className: propsTypes.bool,
  isDisabled: propsTypes.bool,
  isLoading: propsTypes.bool,
  isExternal: propsTypes.bool,
  isSmall: propsTypes.bool,
  isLarge: propsTypes.bool,
  isBlock: propsTypes.bool,
  hasShadow: propsTypes.bool,
};
