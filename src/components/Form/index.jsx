import { useEffect, useState } from "react";

import getPassword from "utils";
import RangeSlider from "components/RangeSlide";
import ToggleAndLabel from "components/CheckToggle";
import InputPassword from "components/InputPassword";
import { ButtonSubmit, FormWrapper } from "./styles";

const Form = () => {
  const [copy, setCopy] = useState(false);
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (copy) {
      const timer = setTimeout(() => {
        setCopy(false);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [copy]);

  const [quantity, setQuantity] = useState(10);
  const [upperCase, setUpperCase] = useState(true);
  const [lowerCase, setLowerCase] = useState(true);
  const [number, setNumber] = useState(true);
  const [symbol, setSymbol] = useState(true);

  /**
   * Password generating and attribution on React state
   * @return {void} no return
   */

  const generatePassword = () => {
    const pass = getPassword(quantity, upperCase, lowerCase, number, symbol);
    setPassword(pass);
  };

  /**
   * Function that handles the quantity of characters of the password
   * @return {void} no return
   */
  const handleQuantity = (value) => setQuantity(value);

  return (
    <FormWrapper>
      <InputPassword password={password} copy={copy} onCopy={() => setCopy(true)}/>

      <RangeSlider quantity={quantity} handle={handleQuantity} />

      <ToggleAndLabel
        title="Uppercase Letters"
        state={upperCase}
        onChange={() => setUpperCase(!upperCase)}
      />
      <ToggleAndLabel
        title="Lowercase Letters"
        state={lowerCase}
        onChange={() => setLowerCase(!lowerCase)}
      />
      <ToggleAndLabel
        title="Numbers"
        state={number}
        onChange={() => setNumber(!number)}
      />
      <ToggleAndLabel
        title="Symbols"
        state={symbol}
        onChange={() => setSymbol(!symbol)}
      />

      <ButtonSubmit
        disabled={!upperCase && !lowerCase && !number && !symbol}
        onClick={() => generatePassword()}
      >
        Get Password
      </ButtonSubmit>
    </FormWrapper>
  );
};

export default Form;
