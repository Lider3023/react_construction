import React, { useEffect, useState, type FC, type ReactNode } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./MainLayout.scss";
import { motion } from "framer-motion";

interface IProps {
  children: ReactNode;
}
const MainLayout: FC<IProps> = ({ children }) => {
  

  return (
    <>
      <div className="mainlayout">
        <Navbar />
        <motion.div
          className="mainlayout_content"
          // initial={{ opacity: 0, y: -20 }}
          // animate={{ opacity: 1, y: 0 }}
          // exit={{ opacity: 0, y: -20 }}
        >
          {children}
        </motion.div>
      </div>
    </>
  );
};

export default MainLayout;
