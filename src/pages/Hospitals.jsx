import React from "react";
import { Helmet } from "react-helmet-async";

const Hospitals = () => {
  return (
    <div className="hospitals">
      <Helmet>
        <title>Hospitals, Facilities, and Clients</title>
        <meta name="description" content="Hospitals, Facilities, and Clients" />
      </Helmet>

      <img
        className="info-hero"
        src="./images/corporate.jpg"
        alt="Businessman shaking hands"
      ></img>

      <h2>Services for our Corporate Partners</h2>
      <h3>Not just another Staffing Company!</h3>

      <p>
        At R Visions, we opened our doors, intent on not becoming just another
        staffing company among the thousands to choose from!
        <br />
        Innovation Decades of previous healthcare experience have enabled us to
        gain a thorough understanding of our industry and competition. Our
        careful design, implementation, and refinement of our systems assure we
        can consistently be the best at what we do.
        <br />
      </p>

      <h4>The Best in Flexibility to Meet Your Needs</h4>
      <p>
        At R Visions we are about providing superior services for both our
        facilities and our professionals. We realize that sometimes a staffing
        company‘s policies and financial expectations can interfere with the
        desire to work together to meet both the facility and traveler‘s needs.
        We at R Visions step out of the way and allow both the facility and
        traveler to devise a solution that meets all needs. We are here to
        facilitate those needs, not get in their way.
      </p>

      <h4>Your Facility and Our Traveling Professional Together</h4>
      <ul>
        <li>Set the regular hours</li>
        <li>Set the overtime hours careing heart</li>
        <li>Set the duration of the assignment careing heart</li>
      </ul>

      <h4>The Best by Design</h4>
      <p>
        Innovation lead us to design a streamlined Hiring/Screening process
        which enables us to maintain a large portfolio of traveling
        professionals to choose from, all of which have already gone through our
        rigorous, JACHO approved screening process, and are set to respond
        promptly for facility needs. We Guarantee You will not be disappointed
        by a file that is not complete or a traveler that is not 100% committed
        to the assignment.
      </p>

      <h4>Recruiting Only the Best</h4>
      <p>
        Innovation by design also means that we have assembled a group of
        recruiters, each with over 20 years of professional Healthcare, travel,
        hospital administration, and management experience. At R Visions, we put
        our experience to work for you.{" "}
      </p>

      <h4>We Guarantee</h4>
      <ul>
        <li>Travelers are at the top of their class.</li>
        <li>
          They are seasoned and will smoothly integrate into your facility.
        </li>
        <li>
          They are credentialed and our file will be complete to your
          specifications.
        </li>
        <li>
          We only represent the best of the best and their performance reviews
          reflect it.
        </li>
      </ul>

      <h5>
        99% of our nurses in 2016 were requested to return or extend their
        assignment.
      </h5>
      <p>
        We are there for your concerns, comments, and phone calls.
        <br />
        For more information on our company or partnering for services contact
        us.
      </p>

      <p className="contact-p">
        Questions regarding our services?
        <br />
        Call us at 1-866-218-3285 ext #2
        <br />
        or email us your questions
        <br />
        melj@rvisions.org
      </p>
    </div>
  );
};

export default Hospitals;
