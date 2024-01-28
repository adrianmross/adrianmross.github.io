import React, { useState } from "react";
import { Link } from "gatsby";
import {
  container,
  text,
} from "./HomeButton.module.css";

const HomeButton = () => {
  const [phrase, setPhrase] = useState("adrianmross");

  const handleMouseEnter = () => setPhrase("adrianmross.home");
  const handleMouseLeave = () => setPhrase("adrianmross");

  return (
    <div className={container}>
      <Link
        to="/"
        className={text}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {phrase}
      </Link>
    </div>
  );
};

export default HomeButton;