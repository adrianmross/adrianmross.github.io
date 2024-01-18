import React from "react";
import {
  body,
  gridContainer,
  grid,
  row,
  box,
  fill1,
  fill2,
  fill3,
  fill4,
  forward,
  backward,
  h1,
} from "./ScrollBoxes.module.css";

const ScrollBoxes = ({
  box1Content,
  box2Content,
  box3Content,
  box4Content,
  box5Content,
  box6Content,
  box7Content,
  box8Content,
}) => (
  <div className={body}>
    <div className={gridContainer}>
      <div className={grid}>
        <div className={`${row} ${forward}`}>
          <div className={`${box} ${fill1}`}>{box1Content}</div>
          <div className={`${box} ${fill2}`}>{box2Content}</div>
          <div className={`${box} ${fill3}`}>{box3Content}</div>
          <div className={`${box} ${fill4}`}>{box4Content}</div>
          {/* duplicate the row to scroll infinitely from center to center */}
          <div className={`${box} ${fill1}`}>{box1Content}</div>
          <div className={`${box} ${fill2}`}>{box2Content}</div>
          <div className={`${box} ${fill3}`}>{box3Content}</div>
          <div className={`${box} ${fill4}`}>{box4Content}</div>
        </div>
        <div className={`${row} ${backward}`}>
          <div className={`${box} ${fill1}`}>{box5Content}</div>
          <div className={`${box} ${fill2}`}>{box6Content}</div>
          <div className={`${box} ${fill3}`}>{box7Content}</div>
          <div className={`${box} ${fill4}`}>{box8Content}</div>
          {/* duplicate the row to scroll infinitely */}
          <div className={`${box} ${fill1}`}>{box5Content}</div>
          <div className={`${box} ${fill2}`}>{box6Content}</div>
          <div className={`${box} ${fill3}`}>{box7Content}</div>
          <div className={`${box} ${fill4}`}>{box8Content}</div>
        </div>
      </div>
    </div>
  </div>
);

export default ScrollBoxes;
