import UnauthenticatedApp from "./UnauthenticatedApp";
import AuthenticatedApp from "./AuthenticatedApp";
import { useAuth } from "./context/AuthContext";
import { Button, ConfigProvider } from "antd";

function App() {
  const { user } = useAuth();

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#F48FB1",
        },
      }}
    >
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </ConfigProvider>
  );
}

export default App;
