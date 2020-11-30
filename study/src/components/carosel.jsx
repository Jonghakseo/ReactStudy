import React from "react";

function Carosel(props) {
  return (
    <div className="carosel" id={props.id}>
      <figure>
        <img src="../../img/nameuncho.jpg" alt="self img" />
      </figure>
      {/* <h1 className="carasel__text">자기소개</h1> */}
      <figcaption className="carasel__text">{props.text}</figcaption>
    </div>
  );
}

export default Carosel;
