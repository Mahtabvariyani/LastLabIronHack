import React from "react";
import {Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home.jsx";
import PhoneCard from "./components/Phone/phoneCard.jsx";
import PhonesData from "./phones-data.json"
import Phone from "./pages/phone"
import PhoneCardDetail from "./components/Phone/PhoneCardDetail.jsx";
import "./index.css";


function App() {
  return (

    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/contact" element={<Home />} />
        <Route path="/phone" element={<Phone />} />
        <Route path="/phones" element={<PhoneCard  phones={PhonesData} />} />
        <Route path="/phones/:phoneId" element={<PhoneCardDetail   />} />

      </Routes>
    </div>
  );
}

export default App;
