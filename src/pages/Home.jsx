import React from 'react'

const Home = () => {
  return (
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
  )
}

export default Home