import { BrowserRouter, Route, Routes } from "react-router-dom";
import { global, reset } from "./styles";
import { Global } from "@emotion/react";

import UnauthenticatedApp from "./UnauthenticatedApp";
import { useState } from "react";
import AuthenticatedApp from "./AuthenticatedApp";

function App() {
  const [user, setUser] = useState(false)
  return (
    <BrowserRouter>
      <>
        <Global styles={reset} />
        <Global styles={global} />
        {user ? <AuthenticatedApp/> : <UnauthenticatedApp/>}
      </>
    </BrowserRouter>
  );
}

export default App;
