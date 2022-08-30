import { Routes, Route } from "react-router-dom";
import LandingPage from "./page/LandingPage/LandingPage.jsx";
import AuthPrivateRoutes from "./routes/AuthPrivateRoutes";
import PrivateRoutes from "./routes/PrivateRoutes";

import { Provider } from "react-redux";
import store from "./redux/store";
import Pagado from "./components/Pagado/Pagado.jsx";

import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <Provider store={store}>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/pagado" element={<Pagado />} />
        <Route
          path="/*"
          element={
            <AuthPrivateRoutes>
              <PrivateRoutes />
            </AuthPrivateRoutes>
          }
        />
      </Routes>
    </Provider>
  );
}

export default App;
