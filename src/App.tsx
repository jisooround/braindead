import { RouterProvider } from "react-router-dom";
import { routers } from "./router";
import GlobalStyles from "./styles/GlobalStyles";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <>
      <RecoilRoot>
        <GlobalStyles />
        <RouterProvider router={routers} />
      </RecoilRoot>
    </>
  );
}

export default App;
