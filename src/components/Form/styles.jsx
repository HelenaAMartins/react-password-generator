import styled from "styled-components";

import { colors } from "styles/variables";

export const FormWrapper = styled.div`
  align-items: center;
  background-color: ${colors.white};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 25px auto 10px;
  max-width: 520px;
  min-height: 650px;
  width: 95%;
  padding: 30px;

  @media (min-width: 768px) {
    margin: 30px auto 10px;
    padding: 30px 60px;
  }
`;



export const ButtonSubmit = styled.button`
  background-color: ${colors.background};
  border-radius: 25px;
  color: ${colors.textColor};
  cursor: pointer;
  font-weight: 700;
  margin-top: 20px;
  padding: 18px;
  transition: all 0.5s;
  width: 235px;

  &:hover {
    background-color: ${colors.buttonHover};
    color: ${colors.white};
  }

  &:disabled {
    background-color: #ccc;
    pointer-events: none;
  }
`;
