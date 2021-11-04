import styled from "styled-components";

import copy from "../../assets/img/copy.png";
import { colors } from "../../styles/variables";

export const PasswordWrapper = styled.div`
  align-items: center;
  border-radius: 3px;
  background-color: #f5f5f5;
  display: flex;
  height: 65px;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 15px;
  width: 100%;
`;

export const InputWrapper = styled.div`
width: 100%;
position: relative;

`

export const Password = styled.h2`
  color: ${colors.textColor};
  font-size: 14px;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

export const CopyButton = styled.button`
  background-color: transparent;
  background-image: url(${copy});
  background-size: cover;
  cursor: pointer;
  height: 30px;
  opacity: ${({ isActive }) => (isActive ? "1" : "0")};
  transition: all 0.5s;
  visibility: ${({ isActive }) => (isActive ? "visible" : "hidden")};
  width: 30px;
`;

export const CopiedMsg = styled.span`
  bottom: 5px;
  color: ${colors.textColor};
  font-size: 12px;
  opacity: ${({ isCopied }) => (isCopied ? "1" : "0")};
  position: absolute;
  right: 0;
  text-transform: uppercase;
  transition: all 0.5s;
  visibility: ${({ isCopied }) => (isCopied ? "visible" : "hidden")};
`;
