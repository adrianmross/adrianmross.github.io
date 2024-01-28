import React, { useState, useEffect } from "react";
import { usePageEnd } from "./PageEndContext";
import {message, fadeIn, fadeOut} from "./EndOfPageMessage.module.css";

const EndOfPageMessage = () => {
  const { hasReachedEnd } = usePageEnd();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (hasReachedEnd) {
      setIsVisible(true); // Show the message
    } else if (!hasReachedEnd && isVisible) {
      // Wait for the fade-out animation to complete before hiding the message
      const timeoutId = setTimeout(() => setIsVisible(false), 500); // Match this duration with your fade-out animation
      return () => clearTimeout(timeoutId);
    }
  }, [hasReachedEnd, isVisible]);

  if (!isVisible && !hasReachedEnd) return null;

  return (
    <div
      className={`${message} ${
        hasReachedEnd ? fadeIn : fadeOut
      }`}
    >
      👆 Hover over to explore.
    </div>
  );
};

export default EndOfPageMessage;
