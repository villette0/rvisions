import React from 'react'

const Navigation = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">RVisions</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    
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
      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown link
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#TravelingPros"  onClick={()=>props.setCurrentPage("TravelingPros")}>Traveling Professionals</a>
          <a className="dropdown-item" href="#Hospitals"  onClick={()=>props.setCurrentPage("Hospitals")}>Hospitals, Facilities, & Clients</a>
          <a className="dropdown-item" href="#Meet"  onClick={()=>props.setCurrentPage("Meet")}>Meet R Visions</a>
        </div>
      </li>
    </ul>
    </div>
  </nav>
  )
}

export default Navigation