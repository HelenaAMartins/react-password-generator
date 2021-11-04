import GlobalStyles from "../../styles/globals";
import { Main } from "../../styles/shared";
import Form from "../Form";
import Header from "../Header";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Main>
        <Header />
        <Form />
      </Main>
    </>
  );
};

export default App;
