import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Card from "./pages/Card";
import Products from "./pages/Products";

export default function App() {
  return (
    <div>
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Products/>} />
            <Route path="/people" element={<Card/>} />
          </Routes>
        <Footer/>
    </Router>
    </div>
  )
}