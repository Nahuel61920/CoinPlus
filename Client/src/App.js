import { Routes, Route } from "react-router-dom";
import LandingPage from "./page/LandingPage/LandingPage.jsx";
import AuthPrivateRoutes from "./routes/AuthPrivateRoutes";
import PrivateRoutes from "./routes/PrivateRoutes";

import { Provider } from "react-redux";
import store from "./redux/store";
import Pagado from "./components/Pagado/Pagado.jsx";
import Equipo from "./components/Equipo/Equipo.jsx";

import RouterScrollTop from "./components/ScrollTop/RouterScrollTop"

function App() {

  return (
    <Provider store={store}>
      <RouterScrollTop />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/pagado" element={<Pagado />} />
        <Route path="/equipo" element={<Equipo />} />
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
