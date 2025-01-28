// codes by chat gpt and modified by Sukhdeep Singh 
import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ThreeColumnSection from "./components/ThreeColumnSection";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ThreeColumnSection />
      <Footer />
    </div>
  );
}

export default App;
