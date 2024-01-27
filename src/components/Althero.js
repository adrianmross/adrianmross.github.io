import React, { useState } from "react";
import { Link } from "gatsby";
import "./Althero.css";

const Althero = () => {
  const [phrases, setPhrases] = useState({
    first: "Hello.",
    second: "I am",
    third: "Adrian",
  });

  const handleMouseEnter = (phrase) => {
    switch (phrase) {
      case "first":
        setPhrases({ ...phrases, first: "About" });
        break;
      case "second":
        setPhrases({ ...phrases, second: "Work" });
        break;
      case "third":
        setPhrases({ ...phrases, third: "Contact" });
        break;
      default:
        break;
    }
  };

  const handleMouseLeave = (phrase) => {
    switch (phrase) {
      case "first":
        setPhrases({ ...phrases, first: "Hello." });
        break;
      case "second":
        setPhrases({ ...phrases, second: "I am" });
        break;
      case "third":
        setPhrases({ ...phrases, third: "Adrian" });
        break;
      default:
        break;
    }
  };

  return (
    <div className="hero">
      <Link
        to="/about"
        className="phrase"
        onMouseEnter={() => handleMouseEnter("first")}
        onMouseLeave={() => handleMouseLeave("first")}
      >
        {phrases.first}
      </Link>
      <Link
        to="/work"
        className="phrase"
        onMouseEnter={() => handleMouseEnter("second")}
        onMouseLeave={() => handleMouseLeave("second")}
      >
        {phrases.second}
      </Link>
      <Link
        to="/contact"
        className="phrase"
        onMouseEnter={() => handleMouseEnter("third")}
        onMouseLeave={() => handleMouseLeave("third")}
      >
        {phrases.third}
      </Link>
    </div>
  );
};

export default Althero;
