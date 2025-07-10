import React, { type FC } from "react";
import "./Choose.scss";
import Accordion from "../../Accordion/Accordion";
import { chooseImage } from "../../../utils/img";

const Choose: FC = () => {
  return (
    <>
      <div className="choose">
        <img src={chooseImage} className="choose_image" alt="" />
        <div className="choose_content">
          <h2 className="choose_content_title">WHY CHOOSE US?</h2>
          <svg
            width="807"
            height="4"
            viewBox="0 0 807 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.300003"
              y="0.700195"
              width="70"
              height="3"
              fill="#FFC925"
            />
          </svg>
          <div className="choose_content_info">
            <Accordion
              title="Employees have many years of experience"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a metus pellentesque, scelerisque ex sed, volutpat nisi. Curabitur
tortor mi, eleifend ornare lobortis non. Nulla porta purus quis iaculis ultrices. Proin aliquam sem at nibh hendrerit sagittis.
Nullam ornare odio eu lacus tincidunt malesuada. Sed eu vestibulum elit. Curabitur tortor mi, eleifend ornare."
            />
            <Accordion
              title="Quality construction continues after the project"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a metus pellentesque, scelerisque ex sed, volutpat nisi. Curabitur
tortor mi, eleifend ornare lobortis non. Nulla porta purus quis iaculis ultrices. Proin aliquam sem at nibh hendrerit sagittis.
Nullam ornare odio eu lacus tincidunt malesuada. Sed eu vestibulum elit. Curabitur tortor mi, eleifend ornare."
            />
            <Accordion
              title="We use technology to do the job more quickly"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a metus pellentesque, scelerisque ex sed, volutpat nisi. Curabitur
tortor mi, eleifend ornare lobortis non. Nulla porta purus quis iaculis ultrices. Proin aliquam sem at nibh hendrerit sagittis.
Nullam ornare odio eu lacus tincidunt malesuada. Sed eu vestibulum elit. Curabitur tortor mi, eleifend ornare."
            />
            <Accordion
              title="Employees are continually trained on safety issues"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a metus pellentesque, scelerisque ex sed, volutpat nisi. Curabitur
tortor mi, eleifend ornare lobortis non. Nulla porta purus quis iaculis ultrices. Proin aliquam sem at nibh hendrerit sagittis.
Nullam ornare odio eu lacus tincidunt malesuada. Sed eu vestibulum elit. Curabitur tortor mi, eleifend ornare."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Choose;
