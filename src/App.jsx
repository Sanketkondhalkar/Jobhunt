import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./component/Footer";
import Gallery from "./component/Gallery";
import Homepage from "./component/Homepage";
import Navbar from "./component/Navbar";
import Review from "./component/Review";
import Services from "./component/Services";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/review" element={<Review />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
