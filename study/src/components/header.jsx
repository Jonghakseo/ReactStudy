import React, { useState, useEffect, useRef } from "react";
import Carosel from "./carosel";

const totalCarosel = 1;

function Header(props) {
  const [currentCarosel, setCurrentCarosel] = useState(0);
  const caroselRef = useRef(null);

  useInterval(() => {
    setCurrentCarosel(currentCarosel === totalCarosel ? 0 : currentCarosel + 1);
    // // console.log((caroselRef.current.style.opacity = 0));
    // // console.log(secondCaroselRef.current);
    // if (currentCarosel === 0) {
    //   // caroselRef.current.style.opacity = 0;
    // } else {
    //   // caroselRef.current.style.opacity = 1;
    // }
  }, 2000);

  useEffect(() => {
    const firstCarosel = document.querySelector("#carosel--0");
    const secondCarosel = document.querySelector("#carosel--1");

    if (currentCarosel === 0) {
      secondCarosel.style.transition = "all 1s ease-in-out";
      secondCarosel.style.transform = `translateY(-${1}00%)`;
      firstCarosel.animate({ opacity: "0" }, 1000);
      // secondCarosel.animate({ opacity: "1" }, 1000);
      // firstCarosel.style.transform = `translateY(${1}00%)`;
    } else {
      // firstCarosel.style.transition = "all 2s ease";
      // firstCarosel.style.transform = `translateY(0%)`;
      secondCarosel.animate({ opacity: "0" }, 1000);
      secondCarosel.style.transform = `translateY(${0}00%)`;
      // secondCarosel.style.display = "none";
    }
  }, [currentCarosel]);

  return (
    <header ref={caroselRef}>
      {/* <button onClick={goForward}>앞</button> */}
      {/* <h1>Namu's resume</h1> */}
      {/* <h1>{currentCarosel}</h1> */}
      {/* <div className="header__carosels"> */}
      <Carosel id="carosel--0" text="자기소개1" />
      <Carosel id="carosel--1" text="자기소개2" />
      {/* </div> */}
      {/* <button onClick={goBackward}>뒤</button> */}
    </header>
  );
}

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default Header;
