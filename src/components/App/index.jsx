import GlobalStyles from "styles/globals";
import { Main } from "styles/shared";
import Form from "components/Form";
import Header from "components/Header";

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
