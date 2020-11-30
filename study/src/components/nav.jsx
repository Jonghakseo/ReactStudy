import React from "react";
import { Menu, menuList } from "./menu";

const Nav = (props) => (
  <nav>
    <figure>
      <img src="../../img/nameuncho.jpg" alt="profile picture" />
    </figure>
    <h1 className="nav__name">Nameun CHO</h1>
    <span className="nav__position">Front-end Developer</span>
    {/* <span></span> */}
    <ul>
      {/* <Menu name="home" />
      <Menu name="about" />
      <Menu name="skills" />
      <Menu name="projects" />
      <Menu name="experience" />
      <Menu name="career" />
      <Menu name="education" /> */}
      {menuList.map((item, index) => {
        return <Menu key={index} name={item} />;
      })}
      {/* <Menu name="" /> */}
    </ul>
  </nav>
);

export default Nav;
