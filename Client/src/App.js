import './App.css';
import { Routes, Route } from "react-router-dom";
import LandingPage from "./page/LandingPage/LandingPage.jsx"

function App() {
  return (
    <Routes>
        <Route exact path="/" element={<LandingPage />} />
    </Routes>
  );
}

export default App;
