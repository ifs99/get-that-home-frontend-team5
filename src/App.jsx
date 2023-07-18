import { BrowserRouter, Route, Routes } from "react-router-dom";
import { global, reset } from "./styles";
import { Global } from "@emotion/react";

import UnauthenticatedApp from "./UnauthenticatedApp";

function App() {
  return (
    <BrowserRouter>
      <>
        <Global styles={reset} />
        <Global styles={global} />
        <Routes>
          <Route path="/" element={<UnauthenticatedApp />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
