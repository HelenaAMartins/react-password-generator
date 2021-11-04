import { RangeSlide, Headline } from "./styles";

const RangeSlider = ({ quantity, handle }) => {
  return (
    <>
    <h1>{quantity}</h1>
      <RangeSlide
        type="range"
        min="4"
        max="20"
        value={quantity}
        onChange={(e) => handle(e.target.value)}
      />

      <Headline>Password Length</Headline>
    </>
  );
};

export default RangeSlider;
