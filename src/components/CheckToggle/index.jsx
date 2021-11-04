import { CheckToggle, Slider } from "./styles";

const ToggleAndLabel = ({ title, state, onChange }) => {
  const id = title.replace(/\s/g, '').toLowerCase()
  return (
    <CheckToggle htmlFor={id}>
      <span>{title}</span>
      <input checked={state} type="checkbox" id={id} onChange={onChange} />
      <Slider />
    </CheckToggle>
  );
};

export default ToggleAndLabel;
