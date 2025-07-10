import React, { type FC } from "react";
import CustomBtn from "../../../UI/CustomBtn/CustomBtn";
import "./HomeContent.scss";
import { motion } from "framer-motion";
const HomeContent: FC = () => {
  return (
    <>
      <div className="container">
        <div className="home_content">
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
            <CustomBtn text="OUR PORTFOLIO" width={256} height={60} />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default HomeContent;
