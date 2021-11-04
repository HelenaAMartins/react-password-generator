import styled from "styled-components";

import { colors } from "../../styles/variables";

export const RangeSlide = styled.input`
  margin: 10px 0;
  margin-bottom: 20px;
  -webkit-appearance: none;
  width: 100%;
  &:focus {
    outline: none;
  }
  &::-webkit-slider-runnable-track {
    background: ${colors.background};
    border: 0px solid #000101;
    border-radius: 50px;
    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
    cursor: pointer;
    height: 12.8px;
    width: 100%;
  }
  &::-webkit-slider-thumb {
    background: ${colors.lightPink};
    border: 0px solid #000000;
    border-radius: 50px;
    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
    cursor: pointer;
    height: 30px;
    margin-top: -10px;
    -webkit-appearance: none;
    width: 30px;

    &:focus::-webkit-slider-runnable-track {
      background: #ac51b5;
    }
  }
`;

export const Headline = styled.small`
  font-weight: 300;
  color: ${colors.textColor};
  margin-bottom: 40px;
`;
