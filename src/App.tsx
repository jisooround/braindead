import GeneralLayout from "./components/GeneralLayout";
import { RouterProvider } from "react-router-dom";
import { routers } from "./router";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <GeneralLayout>
      <GlobalStyles />
      <button>hello</button>
      <RouterProvider router={routers} />
    </GeneralLayout>
  );
}

export default App;
