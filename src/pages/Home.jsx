import React  from 'react'
import {Link} from 'react-router-dom'

// How do I route my page links here
const Home = () => {
  return (
<div className="home"> 
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block w-100" src="../../images/travel.png" alt="First slide" />
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="../../images/mountainConquered.png" alt="Second slide" />
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="../../images/loveWhatYouDo.png" alt="Third slide" />
      </div>
      <div class="carousel-item text-container">
        <img class="d-block w-100" src="../../images/teamHands.jpeg" alt="Third slide" />
        <div class="clickable-text">
        <a href="https://ctms.contingenttalentmanagement.com/instaffing/WorkforcePortal/login.cfm">Join<br/>Us<br/>Today</a>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only"></span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only"></span>
    </a>
  </div>

<div className="home-travel-section  d-sm-block d-md-flex align-items-center">
  <div className="travel-float"><img class="half-pic" src="../../images/travelstaff.jpg" alt="Travelling Staff"/></div>
  <div className="home-travel-text">
  <Link to="/travelingprofessionals" style={{ textDecoration: 'none' }}>
  <h2>Traveling Professionals</h2>
  </Link>
  <p>We’re not your average company. We are innovative and have been a leader for over 15 years. We offer nationwide placement and we are your team. We thrive on finding an assignment that fits the uniqueness in you. One that elevates your career to a new professional level. One that truly contributes to meeting your goals. Create your account to log in to our current nationwide and exclusive offerings.</p>
  </div>
</div>

<div className="home-hospital-section d-sm-block d-md-flex  align-items-center">
  {/* show this image only when small screen */}
<div className="hospital-float small-hosp d-md-none d-sm-block"><img class="half-pic" src="../../images/hospital.jpg" alt="Hospital"/></div>
<div className="home-hospital-text">
<Link to="/hospitals" style={{ textDecoration: 'none' }}>
<h2>Hospitals, Facilities & Clients</h2>
</Link>
<p>We provide your facility with an experienced professional that is committed to quality outcomes. We are flexible. We are the company that listens to your specific needs.</p>
</div>
  {/* show this image only when large screen */}
<div className="hospital-float d-md-block d-none"><img class="half-pic" src="../../images/hospital.jpg" alt="Hospital"/></div>
</div>

<div className="home-about-section d-sm-block d-md-flex align-items-center ">
<div className="business-float"><img class="half-pic" src="../../images/aboutbusiness.jpg" alt="Business Concept" /></div>
<div className="home-about-text">
<Link to="/about" style={{ textDecoration: 'none' }}>
<h2>About Us</h2>
</Link>
<p>R Visions, is about “your vision”. You may be a nurse that needs flexible hours, block scheduling, or a weekly guarantee. You may be a facility that needs the same. Our job is to get all your “visions” met.</p>
</div>
</div>

</div>
  )
}

export default Home