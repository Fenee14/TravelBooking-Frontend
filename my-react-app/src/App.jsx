import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import Navbar from './component/Navbar'
import Hotel from './component/Hotel';
import Flight from './component/Flight'
import TourPackage from './component/TourPackage';
import AllCard from './component/AllCard'
import Footer from './component/Footer';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      
      <br/>
      <Routes>
        <Route path="/hotel" element={<Hotel />} /> {/* Route to Hotel component */}
        <Route path="/Flight" element={<Flight />} /> {/* Route to Hotel component */}
        <Route path="/TourPackage" element={<TourPackage />} /> {/* Route to Hotel component */}

       
      </Routes>
      <br/>
      <AllCard/>
      <br/>
      <Footer/>
    </Router>

    
    </>
  );
}

export default App
