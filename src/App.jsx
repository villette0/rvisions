import React, {useState} from "react";

import Home from "./pages/Home";
import TravelingPros from "./pages/TravelingPros";
import Hospitals from "./pages/Hospitals";
import Meet from "./pages/Meet";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

import Navigation from './components/Navigation';
import Footer from './components/Footer';

import "./style.css"
// import logo from './logo.svg';

function App() {
  const [currentPage, setCurrentPage] = useState("Home");
  const handleChange = () => {
    if (currentPage === "Home") {
      return <Home/>
    }
    if (currentPage === "TravelingPros") {
      return <TravelingPros/>
    }
    if (currentPage === "Hospitals") {
      return <Hospitals/>
    } 
    if (currentPage === "Meet") {
      return <Meet/>
    } 
    if (currentPage === "AboutUs") {
      return <AboutUs/>
    } 
    if (currentPage === "ContactUs") {
      return <ContactUs/>
    }
  };
  return (
    <div>
        <Navigation setCurrentPage={setCurrentPage}/>
        {handleChange()}
        <Footer setCurrentPage={setCurrentPage}/>
    </div>
  );
}

export default App;
