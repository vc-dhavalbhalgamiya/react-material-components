import { Route, Routes } from "react-router-dom";
import "./App.css";
import HeroSection from "./pages/HeroSection/HeroSection";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/hero-section" element={<HeroSection />} />
      </Routes>
    </div>
  );
}

export default App;
