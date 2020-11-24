import React, { useState, useEffect, useRef } from "react";
import Slide from "./Slide";
import styled from "styled-components";
import img1 from "../assets/sample/1.png";
import img2 from "../assets/sample/2.png";
import img3 from "../assets/sample/3.png";
import img4 from "../assets/sample/4.png";
import img5 from "../assets/sample/5.png";
import img6 from "../assets/sample/6.png";
import img7 from "../assets/sample/7.png";

const Container = styled.div`
  width: 60%;
  overflow: hidden; // 선을 넘어간 이미지들은 보이지 않도록 처리
`;
const Button = styled.button`
  all: unset;
  border: 1px solid coral;
  padding: 0.5em 2em;
  color: coral;
  border-radius: 10px;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: coral;
    color: #fff;
  }
`;
const SliderContainer = styled.div`
  width: 100%;
  display: flex; //이미지들을 가로로 나열
`;

const TOTAL_SLIDES = 3; //슬라이드 개수(0부터 시작)
export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null) // useRef를 통해 Slider의 정보를 보여줌
  ;
const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) { // 더 이상 넘어갈 슬라이드가 없으면 슬라이드를 초기화
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => { // 현재 어느 슬라이드를 보여주고 있는지 정함
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // translateX를 통해 양옆으로 이미지의 위치를 조정
  }, [currentSlide]);
return (
    // 슬라이드 이미지 추가
    <Container>
      {currentSlide}
      <SliderContainer ref={slideRef}>
        <Slide img={img1} />
        <Slide img={img2} />
        <Slide img={img3} />
        <Slide img={img4} />
        <Slide img={img5} />
        <Slide img={img6} />
        <Slide img={img7} />
      </SliderContainer>
      <Button onClick={prevSlide}>Previous</Button>
      <Button onClick={nextSlide}>Next</Button>
    </Container>
  );
}