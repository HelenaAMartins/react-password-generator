import { CopyToClipboard } from "react-copy-to-clipboard";

import { PasswordWrapper, InputWrapper, Password, CopyButton, CopiedMsg } from "./styles";
const InputPassword = ({ password, copy, onCopy }) => {
  return (
    <InputWrapper>
      <PasswordWrapper>
        <Password>{password}</Password>

        <CopyToClipboard text={password} onCopy={onCopy}>
          <CopyButton isActive={password !== ""} />
        </CopyToClipboard>
      </PasswordWrapper>
      <CopiedMsg isCopied={copy}>Copied.</CopiedMsg> 
    </InputWrapper>
  );
};

export default InputPassword;
