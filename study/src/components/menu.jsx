import React from "react";

export const menuList = [
  "home",
  "about",
  "skills",
  "projects",
  "experience",
  "career",
  "education",
];

export const Menu = (props) => (
  <li>
    <a href={props.name}>{props.name}</a>
  </li>
);

export default Menu;
