import React from "react";
import Sign from "./interactions/Pythamick.svg";
import circle from "./interactions/circle.svg";
import rec from "./interactions/rec.svg";
import ProfileImage from "./About.svg";
function About() {
  return (
    <section id="about" className="about">
      <div className="about__wrapper">
        <div className="about-container">
          <div className="about-desc">
            <div className="about-heading">
              <div className="line"></div>
              <h1
                data-aos="fade-up"
                data-duration="1000"
                className="header-text"
              >
                About Me
              </h1>
            </div>
            <div className="description">
              <p className="text-one" data-aos="fade-up" data-duration="1000">
                Welcome to the portfolio of Ugorji Michael, a multitalented
                artist and storyteller. As a cinematographer, graphics designer,
                photographer, and writer, Ugorji brings a unique perspective and
                skill set to every project.{" "}
              </p>
              <p data-aos="fade-up" className="text-two" data-duration="1000">
                Through his work, he captivates audiences with his visual
                storytelling and attention to detail. From stunning
                cinematography to thought-provoking writing, Ugorji's portfolio
                is a testament to his passion for creating meaningful content.
                Explore his work and discover the art of storytelling through
                his lens.
              </p>
            </div>
            <img className="sign" src={Sign} alt="My signature" />
            <div className="cv-lin">
              <a className="i-cv" href="#">
                Hire Me
              </a>
            </div>
          </div>
          <div className="about-sec">
            <div className="about-cont">
              <div className="first-ab">
                <h1>3+</h1>
                <p>Years Experience</p>
              </div>
              <div className="card">
                <div className="box">
                  <h1>40+</h1>
                  <p>Projects</p>
                </div>
                <div className="box">
                  <h1>5</h1>
                  <p>Achievements</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* number */}
      <h1 className="num">01</h1>
      <img className="circle" src={circle} alt="circle-interaction" />
      <img className="rec" src={rec} alt="rec-interaction" />
    </section>
  );
}

export default About;
