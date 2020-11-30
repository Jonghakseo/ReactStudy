import React from "react";
import { useHistory } from "react-router-dom";

function About(props) {
  let history = useHistory();

  function handleClick() {
    history.push("/career");
  }
  return (
    <>
      <span>About</span>
      <button onClick={handleClick}>button to career</button>
    </>
  );
}

export default About;
