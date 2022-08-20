import './App.css';
import { Routes, Route } from "react-router-dom";
import LandingPage from "./page/LandingPage/LandingPage.jsx"
import AuthPrivateRoutes from './routes/AuthPrivateRoutes';
import PrivateRoutes from './routes/PrivateRoutes';

import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const {isAuthenticated} = useAuth0()
  
  return (
    <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/*" element={<AuthPrivateRoutes><PrivateRoutes /></AuthPrivateRoutes>} />
    </Routes>
  );
}

export default App;
