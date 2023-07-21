import UnauthenticatedApp from "./UnauthenticatedApp";
import AuthenticatedApp from "./AuthenticatedApp";
import { useAuth } from "./context/AuthContext";

function App() {
  const { user } = useAuth();
  return <>{user ? <AuthenticatedApp /> : <UnauthenticatedApp />}</>;
}

export default App;
