import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="aboutuscontiner">
      <h1>About us</h1>
      <div className="projectpic">
        <div className="flip-box">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img src="2021-07-26.jpg" alt="store" id="test" />
            </div>
            <div className="flip-box-back">
              <p>
                {" "}
                Being a pet owner is one of the best things in the world. And we
                understand because we're pet parents too. In fact, PetsJo.com
                was founded by people who love helping pets. We wanted to make
                the process of finding food, treats and all that good stuff easy
                to find--and deliver it straight to your doorstep. ...
                Headquartered in Amman, Jordan dedicated staff are committed to
                providing the kind of service that makes you go "wow." dedicated
                staff can ship the freshest, highest quality products--and fast.
                Our guys in customer service are here day and night to help.
                Bottom line is, we're here to make pet happiness happen.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <p>
        Being a pet owner is one of the best things in the world. And we
        understand because we're pet parents too. In fact, PetsJo.com was
        founded by people who love helping pets. We wanted to make the process
        of finding food, treats and all that good stuff easy to find--and
        deliver it straight to your doorstep. ... Headquartered in Amman, Jordan
        dedicated staff are committed to providing the kind of service that
        makes you go "wow." dedicated staff can ship the freshest, highest
        quality products--and fast. Our guys in customer service are here day
        and night to help. Bottom line is, we're here to make pet happiness
        happen.
      </p> */}
    </div>
  );
}

export default AboutUs;
