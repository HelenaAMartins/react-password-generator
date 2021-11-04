import styled from "styled-components";

import { colors } from "../../styles/variables";

export const Slider = styled.div`
  background-color: #ccc;
  border-radius: 34px;
  cursor: pointer;
  height: 27px;
  position: relative;
  transition: 0.4s;
  width: 60px;

  &:before {
    background-color: ${colors.white};
    border-radius: 50%;
    bottom: 4px;
    content: "";
    height: 21px;
    left: 4px;
    position: absolute;
    transition: 0.4s;
    width: 21px;
  }
`;

export const CheckToggle = styled.label`
  border-bottom: 1px solid #ccc;
  display: flex;
  font-weight: 300;
  justify-content: space-between;
  padding: 15px 0;
  position: relative;
  width: 100%;

  input {
    display: none;

    &:checked + ${Slider} {
      background-color: ${colors.lightPink};

      &:before {
        transform: translateX(30px);
      }
    }
  }
`;
