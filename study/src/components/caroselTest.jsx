import React from "react";

function CaroselTest(props) {
  return (
    <div className="caroselTest" id={props.id}>
      <figure>
        <img src="../../img/nameuncho.jpg" alt="" />
      </figure>
      <figcaption className="caraselTest__text">{props.text}</figcaption>
    </div>
  );
}

export default CaroselTest;
