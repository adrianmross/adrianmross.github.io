// Timeline.js
import React from "react";
import TimelineEvent from "./TimelineEvent";
import { timeline } from "./Timeline.module.css"; // make sure to create this CSS module

const Timeline = ({ events }) => (
  <div className={timeline}>
    {events.map((event, index) => (
      <TimelineEvent key={index} {...event} />
    ))}
  </div>
);

export default Timeline;