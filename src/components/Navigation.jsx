import React from 'react'
import {Link} from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light"> 
      <Link to ="/home">
      <img className="navbar-brand" src="../../images/R_Visions_Medical_Staffing_PNG.png" title="logo" width="220" height="60" class="block" alt="R-Visions logo"></img>
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav">
      
      <Link to="/home" style={{ textDecoration: 'none' }}>
      <li className="nav-item">
      <div className="nav-link">
        Home
      </div>
      </li>
      </Link>

      <Link to="/about" style={{ textDecoration: 'none' }}>
      <li className="nav-item">
      <div className="nav-link">
        About
      </div>
      </li>
      </Link>

      <Link to="/contact" style={{ textDecoration: 'none' }}>
      <li className="nav-item">
      <div className="nav-link">
        Contact
      </div>
      </li>
      </Link>

      <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#Nothing" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-expanded="false">
          More
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <ul>
            <Link to="/travelingprofessionals" style={{ textDecoration: 'none' }}>
              <li className="dropdown-item">Traveling Professionals</li>
            </Link>

            <Link to="/hospitals" style={{ textDecoration: 'none' }}>
              <li className="dropdown-item">Hospitals, Facilities, & Clients</li>
            </Link>

            <Link to="/meet" style={{ textDecoration: 'none' }}>
              <li className="dropdown-item">Meet R Visions</li>
            </Link>
          </ul>
        </div>
      </li>
    </ul>
    </div>
  </nav>
  )
}

export default Navigation