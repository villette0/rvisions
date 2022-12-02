import React from "react";
// Renamed to router
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

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

function App() {
  return (
    <div className="whole-site">
      <Helmet>
        <title>Rvisions</title>
        <meta name="description" content="Medical Staffing Company"/>
        <meta name="keywords" content="medical,staffing"/>
        <link rel="icon" href="/public/favicon.ico" />
      <link
        rel="icon"
        sizes="192x192"
        href="/public/android-chrome-192X192.png"
      />
      <link
        rel="icon"
        sizes="512x512"
        href="/public/android-chrome-512X512.png"
      />
        <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/public/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/public/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/public/favicon-16x16.png"
      />
      <link rel="manifest" href="/public/site.webmanifest" />
      </Helmet>

        <HelmetProvider>
          <Router>
          <div className="App">
          <Navigation/>
            <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>  
            <Route path="/about" element={<AboutUs/>}/>
            <Route path="/contact" element={<ContactUs/>}/>
            <Route path="/travelingprofessionals" element={<TravelingPros/>}/>
            <Route path="/hospitals" element={<Hospitals/>}/>
            <Route path="/meet" element={<Meet/>}/>  
            </Routes>    
          <Footer/>
          </div>
          </Router>
        </HelmetProvider>
    </div>
  );
}

export default App;
