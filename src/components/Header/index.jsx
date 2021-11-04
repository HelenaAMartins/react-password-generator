import lock from "../../assets/img/lock.png"

import {
  LockImg,
  PageTitle,
  HeaderWrapper
} from "./styles";

const Header = () => {
  return (
    <HeaderWrapper>
    <LockImg src={lock} alt="random password generator"/>
    <PageTitle>Random Password Generator</PageTitle>
    </HeaderWrapper>
  )
}

export default Header
