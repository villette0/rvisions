import React from 'react'

const Navigation = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light"> 
      <a className="navbar-brand" href="#Home" onClick={()=>props.setCurrentPage("Home")}><img src="../../images/R_Visions_Medical_Staffing_PNG.png" title="logo" width="200" height="60" class="block" alt="R-Visions logo"></img></a>
    
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href = "#Home" onClick={()=>props.setCurrentPage("Home")}>Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#AboutUs"  onClick={()=>props.setCurrentPage("AboutUs")}>About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#ContactUs"  onClick={()=>props.setCurrentPage("ContactUs")}>Contact</a>
      </li>
      <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#Nothing" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-expanded="false">
          More
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#TravelingPros"  onClick={()=>props.setCurrentPage("TravelingPros")}>Traveling Professionals</a>
          <a className="dropdown-item" href="#Hospitals"  onClick={()=>props.setCurrentPage("Hospitals")}>Hospitals, Facilities, & Clients</a>
          <a className="dropdown-item" href="#Meet"  onClick={()=>props.setCurrentPage("Meet")}>Meet R Visions</a>
        </div>
      </li>
    </ul>
  </nav>
  )
}

export default Navigation