import React, { type FC } from "react";
import "./Jobs.scss";
import CustomBtn from "../../../UI/CustomBtn/CustomBtn";
import { jobs_card1, jobs_card2, jobs_card3 } from "../../../utils/img";
const Jobs: FC = () => {
  return (
    <>
      <div className="jobs container">
        <div className="jobs__info">
          <div className="card">
            <img src={jobs_card1} alt="" />
            <div className="text">
              <h3>Construction Consultant</h3>
              <p>
                Sed sit amet sapien sit amet odio lobortis ullamcorper quis vel
                nisl. Nam blandit maximus tristique. Vivamus enim quam,
                tincidunt vel blandit eu, molestie eget arcu.
              </p>
              <CustomBtn text="READ MORE" width={145} height={40} />
            </div>
          </div>
          <div className="card">
            <img src={jobs_card2} alt="" />
            <div className="text">
              <h3>Resconstruction Services</h3>
              <p>
                Sed sit amet sapien sit amet odio lobortis ullamcorper quis vel
                nisl. Nam blandit maximus tristique. Vivamus enim quam,
                tincidunt vel blandit eu, molestie eget arcu.
              </p>
              <CustomBtn text="READ MORE" width={145} height={40} />
            </div>
          </div>
          <div className="card">
            <img src={jobs_card3} alt="" />
            <div className="text">
              <h3>Architectural Design</h3>
              <p>
                Sed sit amet sapien sit amet odio lobortis ullamcorper quis vel
                nisl. Nam blandit maximus tristique. Vivamus enim quam,
                tincidunt vel blandit eu, molestie eget.
              </p>
              <CustomBtn text="READ MORE" width={145} height={40} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Jobs;
