import React, { type FC } from "react";
import './CustomBtn.scss'
interface IProps {
  width: number;
  height: number;
  text: string;
}
const CustomBtn: FC<IProps> = ({width, height, text}) => {
  return (
    <>
      <button className="button" style={{width: width, height: height}}><span>{text}</span></button>
    </>
  );
};

export default CustomBtn;
