import React, { useState } from "react";

function Works() {
  const [Graphics, setGraphics] = useState(true);
  const [Writing, setWriting] = useState(false);
  const [Cinematography, setCinematograhy] = useState(false);
  const [PhotoGraphy, setPhotoGraphy] = useState(false);

  function handleWriting() {
    setGraphics(false);
    setWriting(true);
    setCinematograhy(false);
    setPhotoGraphy(false);
  }
  function handleGraphics() {
    setGraphics(true);
    setWriting(false);
    setCinematograhy(false);
    setPhotoGraphy(false);
  }

  function handleCinema() {
    setGraphics(false);
    setWriting(false);
    setCinematograhy(true);
    setPhotoGraphy(false);
  }

  function handlePhoto() {
    setGraphics(false);
    setWriting(false);
    setCinematograhy(false);
    setPhotoGraphy(true);
  }
  return (
    <div className="works">
      <div className="works__wrapper">
        <h1 className="works-t">Featured Works.</h1>
        <h1 className="desc">
          At the core of Ugorji Michael's work is his passion for creating
          meaningful content that captivates and inspires.
        </h1>
        <div className="links">
          <ul>
            <li>
              <button onClick={handleGraphics}>Graphics Designing</button>
            </li>
            <li>
              <button onClick={handleCinema}>Cinematography</button>
            </li>
            <li>
              <button onClick={handleWriting}>Creative Writing</button>
            </li>
            <li>
              <button onClick={handlePhoto}>Photography</button>
            </li>
          </ul>
        </div>

        <div className="project">
          <div className={`disp ${Graphics ? `show` : null}`}>
            <div className="container-p">
              <div className="one">
                <div className="box"></div>
              </div>
              <div className="one">
                <div className="box"></div>
                <div className="box"></div>
              </div>
            </div>
          </div>
          <div className={`disp ${Writing ? `show` : null}`}>
            <div className="container-p">
              <div className="one">
                <div className="box"></div>
              </div>
              <div className="one">
                <div className="box"></div>
                <div className="box"></div>
              </div>
            </div>
          </div>
          <div className={`disp ${Cinematography ? `show` : null}`}>
            <div className="container-p">
              <div className="one">
                <div className="box"></div>
              </div>
              <div className="one">
                <div className="box"></div>
                <div className="box"></div>
              </div>
            </div>
          </div>
          <div className={`disp ${PhotoGraphy ? `show` : null}`}>
            <div className="container-p">
              <div className="one">
                <div className="box"></div>
              </div>
              <div className="one">
                <div className="box"></div>
                <div className="box"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
