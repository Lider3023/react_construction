import React, { type FC } from "react";
import "./Works.scss";
import { Link } from "react-router-dom";
import {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
} from "../../../utils/img";
const Works: FC = () => {
  const images = [
    { id: 1, image: img1 },
    { id: 2, image: img2 },
    { id: 3, image: img3 },
    { id: 4, image: img4 },
    { id: 5, image: img5 },
    { id: 6, image: img6 },
    { id: 7, image: img7 },
    { id: 8, image: img8 },
  ];

  return (
    <>
      <div className="works">
        <div className="works__info container">
          <h1>RECENT WORKS</h1>
          <svg
            width="1171"
            height="4"
            viewBox="0 0 1171 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="550.5" y="0.48999" width="70" height="3" fill="#FFC925" />
          </svg>
          <ul className="works_list">
            <li>
              <Link to="/" className="link">
                All
              </Link>
            </li>
            <li>
              <Link to="/" className="link">
                Architecture
              </Link>
            </li>
            <li>
              <Link to="/" className="link">
                Building
              </Link>
            </li>
            <li>
              <Link to="/" className="link">
                Garden
              </Link>
            </li>
            <li>
              <Link to="/" className="link">
                Interior
              </Link>
            </li>
            <li>
              <Link to="/" className="link">
                Office
              </Link>
            </li>
            <li>
              <Link to="/" className="link">
                Workspace
              </Link>
            </li>
          </ul>
        </div>
        <div className="works__images">
          {images.map((item) => (
            <div className="box">
              <img src={item.image} key={item.id} alt="" />
              <div className="pop">
                <h2>LUXURY BUILDINGS</h2>
                <p>Construction</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Works;
