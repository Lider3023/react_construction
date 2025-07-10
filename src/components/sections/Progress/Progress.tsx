import React, { type FC } from "react";
import "./Progress.scss";
import { Counter } from "../../Counter";


const Progress: FC = () => {
  return (
    <>
      <div className="progress">
        <div className="container">
          <div className="progress_items">
            <div className="item">
              <h3>{Counter(868)}</h3>
              <p>PROJECT COMPLETED</p>
            </div>
            <div className="item">
              <h3>{Counter(1225)}+</h3>
              <p>HAPPY CLIENTS</p>
            </div>
            <div className="item">
              <h3>{Counter(689)}</h3>
              <p>WORKERS EMPLOYED</p>
            </div>
            <div className="item">
              <h3>{Counter(67)}</h3>
              <p>AWARDS WON</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Progress;
