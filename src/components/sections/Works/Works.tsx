import React, { useState, type FC } from "react";
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
import { motion, AnimatePresence } from "framer-motion";
const Works: FC = () => {
  const images = [
    { id: 1, image: img1, categories: ["Architecture"] },
    { id: 2, image: img2, categories: ["Building"] },
    { id: 3, image: img3, categories: ["Interior", "Garden", "Building"] },
    { id: 4, image: img4, categories: ["Office", "Architecture"] },
    { id: 5, image: img5, categories: ["Workspace"] },
    {
      id: 6,
      image: img6,
      categories: ["Architecture", "Interior", "Building"],
    },
    { id: 7, image: img7, categories: ["Garden", "Architecture"] },
    { id: 8, image: img8, categories: ["Interior", "Office", "Architecture"] },
  ];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredImages =
    selectedCategory === "All"
      ? images
      : images.filter((img) => img.categories.includes(selectedCategory));
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
            {[
              "All",
              "Architecture",
              "Building",
              "Garden",
              "Interior",
              "Office",
              "Workspace",
            ].map((cat) => (
              <li key={cat}>
                <button
                  className={`link ${selectedCategory === cat ? "active" : ""}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="works__images grid">
          <AnimatePresence>
            {filteredImages.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="box"
              >
                <img src={item.image} alt="" />
                <div className="pop">
                  <h2>LUXURY BUILDINGS</h2>
                  <p>{item.categories.join(", ")}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default Works;
