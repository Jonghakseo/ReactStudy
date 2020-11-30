import React from "react";

const this_year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer>
      <p>NAMU copyright ⓒ {this_year}</p>
    </footer>
  );
};

export default Footer;
