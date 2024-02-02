// TimelineEvent.js
import React from "react";
import { timelineEvent, timelineContent } from "./TimelineEvent.module.css";

const TimelineEvent = ({ title, company, role, period, description }) => (
  <div className={timelineEvent}>
    <div className={timelineContent}>
      <h3>{title}</h3>
      <h4>{company}</h4>
      <h5>{role}</h5>
      <time>{period}</time>
      <p>{description}</p>
    </div>
  </div>
);

export default TimelineEvent;
