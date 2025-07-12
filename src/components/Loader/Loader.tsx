import React, { type FC } from "react";
import s from "./Loader.module.scss";

const Loader: FC = () => {
  return (
    <>
      <div className={s.box}>
        <div className={s.loader}></div>
      </div>
    </>
  );
};

export default Loader;
