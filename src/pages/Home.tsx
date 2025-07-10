import React, { type FC } from "react";
import MainLayout from "../layouts/MainLayout/MainLayout";
import HomeContent from "../components/sections/HomeContent/HomeContent";
import Jobs from "../components/sections/Jobs/Jobs";
import Progress from "../components/sections/Progress/Progress";
import Works from "../components/sections/Works/Works";
import Offer from "../components/sections/Offer/Offer";
import About from "../components/sections/About/About";
import Choose from "../components/sections/Choose/Choose";
import Team from "../components/sections/Team/Team";
import Footer from "../components/sections/Footer/Footer";

const Home: FC = () => {
  return (
    <>
      <MainLayout>
        <div className="home">
          <HomeContent />
          <Jobs />
          <Progress />
          <Works />
          <Offer />
          <About />
          <Choose />
          <Team />
          <Footer/>
        </div>
      </MainLayout>
    </>
  );
};

export default Home;
