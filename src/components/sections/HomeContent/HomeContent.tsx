import React, { type FC } from "react";
import CustomBtn from "../../../UI/CustomBtn/CustomBtn";
import "./HomeContent.scss";
import { motion } from "framer-motion";
import { useWindowSize } from "../../../utils/WindowSize";
const HomeContent: FC = () => {

  const {width, height}=useWindowSize()
  
  const widthBtn= width < 1702 ? 200 : 256
  const heightBtn=width < 1702 ? 40 : 60

  return (
    <>
      <div className="container">
        <div className="home_content" id="home">
          <motion.h1
            className="home_content_title"
            initial={{ scale: 1.6 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            THE CONSTRUCTION
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, type: "tween" }}
          >
            Leading the way in building
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <CustomBtn text="OUR PORTFOLIO" width={widthBtn} height={heightBtn} />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default HomeContent;
