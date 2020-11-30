import React from "react";
import { useHistory } from "react-router-dom";

function Career(props) {
  let history = useHistory();

  function handleClick() {
    history.push("/about");
  }
  return (
    <>
      <span>Career</span>
      <button onClick={handleClick}>button to About</button>
    </>
  );
}

export default Career;
