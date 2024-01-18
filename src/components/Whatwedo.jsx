import { Box } from "@chakra-ui/react";
import React from "react";
import "./Whatwedo.css";

export const Whatwedo = () => {
  return (
    <Box>
      <div id="mainzigzag" >
        <dvi className="floating-div_whatsnew">
          <h1>WHAT WE DO </h1>
        </dvi>
        {/* <div className="zigzag-container">
          <div className="zigzag-line" id="firstline"></div>
          <div className="zigzag-line" id="middleline"></div>
          <div className="zigzag-line" id="lastline"></div>
        </div>
        <div id="btncard">
          <RhombusButton text={"SEE MORE"} />
        </div> */}
      </div>
      {/* <Text id="para_whatwedo">
        <span>
          
        </span> */}

        <div className="Slider-container">
        <h2 className="whatwedo_h2heading">We connectSportsCommunities & Enthusiasts across the Globe by:</h2>
          <ul class="cards">
            <li class="card">
              <div>
                <h3 class="card-title">
                  ⊛ Organizing World Class Sports Activities that attracts
                  Sports Enthusiasts.
                </h3>
              </div>
            </li>
            <li class="card">
              <div>
                <h3 class="card-title">
                  ⊛Develops engaging content over Social Media (we are one ofthe
                  most active socialmedia page)
                </h3>
              </div>
            </li>
            <li class="card">
              <div>
                <h3 class="card-title">⊛ Training Camps & Activities</h3>
              </div>
            </li>
            <li class="card">
              <div>
                <h3 class="card-title">
                  ⊛Collaborate with organization within India and across the
                  globe to deliver world class sports & Adventure Tourism
                </h3>
              </div>
            </li>
            <li class="card">
              <div>
                <h3 class="card-title">
                  ⊛Aim to develop Eco-Friendly Infrastructure across Nation with
                  active involvement from the local community.
                </h3>
              </div>
            </li>
          </ul>
        </div>
        {/* <span className="bultsign">⊛</span> Organizing World Class Sports Activities that attracts Sports Enthusiasts.<br></br> <span className="bultsign">⊛</span>Develops engaging content over Social Media (we are one ofthe most active socialmedia page)<br></br>
            <span className="bultsign">⊛</span> Training Camps & Activities<br></br>
            <span className="bultsign">⊛</span>Collaborate with organization within India and across the globe to deliver world class sports & Adventure Tourism
            <span className="bultsign">⊛</span>Aim to develop Eco-Friendly Infrastructure across Nation with active involvement from the local community. */}
      {/* </Text> */}
    </Box>
  );
};


