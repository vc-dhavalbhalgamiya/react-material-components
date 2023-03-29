import logo from "./logo.svg";
import "./App.css";
import { Header, StickyHeader } from "./components";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp";
import HeroSection from "./pages/HeroSection/HeroSection";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/hero-section" element={<HeroSection />} />
      </Routes>
      {/* <Header /> */}
      {/* <StickyHeader /> */}
    </div>
  );
}

export default App;
