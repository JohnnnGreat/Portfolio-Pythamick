import React from "react";
import Bulb from "./interactions/BULB.svg";
import Photo from "./interactions/PHOTO.svg";
import Tilda from "./interactions/TILDA.svg";
import Schema from "./interactions/SCHEMA.svg";
import CircleImage from "./interactions/Ex-c.svg";
function Expertise() {
  return (
    <div id="expertise" className="expertise">
      <div className="expertise__wrapper">
        <h1 className="e-text" data-aos="fade-up" data-duration="1000">
          My Expertise Area
        </h1>
        <div className="expertises">
          <div className="box">
            <img src={Tilda} alt="Cinematography" />
            <h1>Cinematography</h1>
            <p>
              Ugorji Michael is a master of cinematography, bringing his
              creative vision to life through stunning visual storytelling.{" "}
            </p>
            <div className="rate">
              <div className="circle yellow"></div>
              <div className="circle yellow"></div>
              <div className="circle yellow"></div>
              <div className="circle yellow"></div>
              <div className="circle yellow"></div>
              <div className="circle yellow"></div>
              <div className="circle yellow"></div>
              <div className="circle yellow"></div>
              <div className="circle"></div>
            </div>
          </div>
          <div className="box">
            <img src={Photo} alt="Photography" />
            <h1>Photography</h1>
            <p>
              My photography captures the beauty and emotion of the world around
              us.{" "}
            </p>
            <div className="rate">
              <div className="circle yellow"></div>
              <div className="circle yellow"></div>
              <div className="circle yellow"></div>
              <div className="circle yellow"></div>
              <div className="circle yellow"></div>
              <div className="circle yellow"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </div>
          <div className="box">
            <img src={Schema} alt="Graphics Designing" />
            <h1>Graphics Design</h1>
            <p>
              My graphics design work is both beautiful and functional, blending
              creativity with technical expertise.{" "}
            </p>
            <div className="rate">
              <div className="circle yellow"></div>
              <div className="circle yellow"></div>
              <div className="circle yellow"></div>
              <div className="circle yellow"></div>
              <div className="circle yellow"></div>
              <div className="circle yellow"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </div>
          <div className="box">
            <img src={Bulb} alt="Creative Writing" />
            <h1>Creative Writing</h1>
            <p>
              Ugorji Michael's writing is a powerful expression of his thoughts,
              emotions, and ideas.{" "}
            </p>
            <div className="rate">
              <div className="circle yellow"></div>
              <div className="circle yellow"></div>
              <div className="circle yellow"></div>
              <div className="circle yellow"></div>
              <div className="circle yellow"></div>
              <div className="circle yellow"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="num">02</h1>
      <img className="ex-c" src={CircleImage} alt="Circle Image" />
    </div>
  );
}

export default Expertise;
