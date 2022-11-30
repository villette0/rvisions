import React from 'react'

const Home = () => {
  return (
<div> 
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

<div className="home-travel-section">
  <h2>Traveling Professionals</h2>
  <p>We’re not your average company. We are innovative and have been a leader for over 15 years. We offer nationwide placement and we are your team. We thrive on finding an assignment that fits the uniqueness in you. One that elevates your career to a new professional level. One that truly contributes to meeting your goals. Create your account to log in to our current nationwide and exclusive offerings.</p>
</div>

<div className="home-hospital-section">
<h2>Hospitals, Facilities & Clients</h2>
<p>We provide your facility with an experienced professional that is committed to quality outcomes. We are flexible. We are the company that listens to your specific needs.</p>
</div>

<div className="home-about-section">
<h2>About Us</h2>
<p>R Visions, is about “your vision”. You may be a nurse that needs flexible hours, block scheduling, or a weekly guarantee. You may be a facility that needs the same. Our job is to get all your “visions” met.</p>
</div>

</div>
  )
}

export default Home