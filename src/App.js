import { Outlet } from "react-router-dom";
import Home from "./pages/Home";
import AuthProvider from "./context/AuthProvider";

const App = () => {
  return (
    <AuthProvider>
      <Home />
      <Outlet />
    </AuthProvider>
  );
};

export default App;
