import React from 'react'

const Navigation = (props) => {
  return (
    <nav>
    <ul>
      <li>
        <a href = "#Home" className="nav-button" onClick={()=>props.setCurrentPage("Home")}>Home</a>
      </li>
      <li>
      <a href="#TravelingPros" className="nav-button" onClick={()=>props.setCurrentPage("TravelingPros")}>Traveling Professionals</a>
      </li>
      <li>
        <a href="#Hospitals" className="nav-button" onClick={()=>props.setCurrentPage("Hospitals")}>Hospitals, Facilities, & Clients</a>
      </li>
      <li>
        <a href="#Meet" className="nav-button" onClick={()=>props.setCurrentPage("Meet")}>Meet R Visions</a>
      </li>
      <li>
        <a href="#AboutUs" className="nav-button" onClick={()=>props.setCurrentPage("AboutUs")}>About Us</a>
      </li>
      <li>
        <a href="#ContactUs" className="nav-button" onClick={()=>props.setCurrentPage("ContactUs")}>Contact Us</a>
      </li>
    </ul>
  </nav>
  )
}

export default Navigation