import React, {useState} from "react";

import { HelmetProvider } from 'react-helmet-async';
import { Helmet } from "react-helmet";

import Navigation from './components/Navigation';
import Footer from './components/Footer';

import Home from "./pages/Home";
import TravelingPros from "./pages/TravelingPros";
import Hospitals from "./pages/Hospitals";
import Meet from "./pages/Meet";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

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
      <Helmet>
        <title>Rvisions</title>
        <meta name="description" content="Medical Staffing Company"/>
        <meta name="keywords" content="medical,staffing"/>
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="%PUBLIC_URL%/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="%PUBLIC_URL%/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="%PUBLIC_URL%/favicon-16x16.png"
      />
      <link rel="manifest" href="./site.webmanifest" />
      </Helmet>

        <HelmetProvider>
        <Navigation setCurrentPage={setCurrentPage}/>
        {handleChange()}
        <Footer setCurrentPage={setCurrentPage}/>
        </HelmetProvider>
    </div>
  );
}

export default App;
