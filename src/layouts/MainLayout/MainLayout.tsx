import React, { useEffect, useState, type FC, type ReactNode } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./MainLayout.scss";
import { motion } from "framer-motion";
import BackToTopButton from "../../components/BackToTopButton/BackToTopButton";
import { ScrollToHash } from "../../utils/ScrollToHash";
import Loader from "../../components/Loader/Loader";

interface IProps {
  children: ReactNode;
}
const MainLayout: FC<IProps> = ({ children }) => {
  const [loaderShow, setLoaderShow] = useState(true);

  const randomNumber = Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000;
console.log(randomNumber);

  useEffect(() => {
    setTimeout(() => {
      setLoaderShow(false);
    }, randomNumber);
  }, []);

  return (
    <>
      {loaderShow ? (
        <Loader />
      ) : (
        <div className="mainlayout">
          <Navbar />
          <ScrollToHash />
          <motion.div
            className="mainlayout_content"
            // initial={{ opacity: 0, y: -20 }}
            // animate={{ opacity: 1, y: 0 }}
            // exit={{ opacity: 0, y: -20 }}
          >
            {children}
          </motion.div>
          <BackToTopButton />
        </div>
      )}
    </>
  );
};

export default MainLayout;
