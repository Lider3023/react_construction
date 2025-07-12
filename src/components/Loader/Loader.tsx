import React, { type FC } from 'react'
import './Loader.scss'


const Loader:FC = () => {
  return (
<>
<div className="loader">
<div className="loop cubes">
    <div className="load cubes"></div>
    <div className="load cubes"></div>
    <div className="load cubes"></div>
    <div className="load cubes"></div>
    <div className="load cubes"></div>
    <div className="load cubes"></div>
</div>
</div>

</>  )
}

export default Loader