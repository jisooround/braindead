import styled from "@emotion/styled";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Button>hello</Button>
    </div>
  );
}

const Button = styled.button``;

export default App;
