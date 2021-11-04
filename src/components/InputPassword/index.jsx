import { CopyToClipboard } from "react-copy-to-clipboard";

import { PasswordWrapper, Password, CopyButton, CopiedMsg } from "./styles";
const InputPassword = ({ password, copy, onCopy }) => {
  return (
    <div style={{ position: "relative" }}>
      <PasswordWrapper>
        <Password>{password}</Password>

        <CopyToClipboard text={password} onCopy={onCopy}>
          <CopyButton isActive={password !== ""} />
        </CopyToClipboard>
      </PasswordWrapper>
      <CopiedMsg isCopied={copy}>Copied.</CopiedMsg> 
    </div>
  );
};

export default InputPassword;
