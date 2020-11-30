import React, { useState, useEffect, useRef } from "react";
import CaroselTest from "./caroselTest";

const totalCarosel = 4;

function Education(props) {
  const [currentCarosel, setCurrentCarosel] = useState(0);
  const slideRef = useRef(null);

  useInterval(() => {
    setCurrentCarosel(currentCarosel === totalCarosel ? 0 : currentCarosel + 1);
  }, 2000);

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentCarosel}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
  }, [currentCarosel]);

  return (
    // <>
    //   <h1>{currentCarosel}</h1>
    <div className="containerTest">
      <div className="caroselTestWrapper" ref={slideRef}>
        <CaroselTest id="caroselTest--0" text="자기소개0" />
        <CaroselTest id="caroselTest--1" text="자기소개1" />
        <CaroselTest id="caroselTest--2" text="자기소개2" />
        <CaroselTest id="caroselTest--3" text="자기소개3" />
        <CaroselTest id="caroselTest--4" text="자기소개4" />
      </div>
    </div>
    // </>
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

export default Education;
