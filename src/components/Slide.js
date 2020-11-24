import React from "react";
import styled from "styled-components";

const IMG = styled.img`
  width: 50%;
  height: 400px;
`;

// Slider의 요소가 될 컴포넌트 
export default function Slide({ img }) {
    return (
        <IMG src = {img}/>
    );
}