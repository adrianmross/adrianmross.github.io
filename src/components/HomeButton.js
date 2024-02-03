import React, { useState } from "react";
import { Link } from "gatsby";
import {
  container,
  text,
} from "./HomeButton.module.css";

const HomeButton = ({page}) => {
  const [phrase, setPhrase] = useState("adrianmross");

  // set phrase to "adrian." + {page} on mouse enter
  const handleMouseEnter = () => setPhrase("adrian." + page);
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