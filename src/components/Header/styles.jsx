import styled from "styled-components";

import { colors } from "../../styles/variables";

export const HeaderWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px 0 10px;
`;

export const LockImg = styled.img`
  width: 80px;

  @media (min-width: 768px) {
    width: 120px;
  }
`;

export const PageTitle = styled.h1`
  color: ${colors.textColor};
  font-family: var(--font-title);
  font-size: 20px;
  font-weight: 700;
  margin-top: 8px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;
