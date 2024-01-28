import React, { useState, useEffect } from "react";
import { usePageEnd } from "./PageEndContext";
import {
  message, 
  fadeIn, 
  fadeOut,
  scrolldownWrapper,
  scrolldown,
  scrolldownP1,
  scrolldownP2,
  mouseScroll,
  mouse,
  wheel,
  mScrollArrows,
  unu,
  doi,
  trei,
} from "./ScrollDownMessage.module.css";

const ScrollDownMessage = () => {
  const { hasReachedEnd } = usePageEnd();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!hasReachedEnd) {
      setIsVisible(true); // Show the message
    } else if (hasReachedEnd && isVisible) {
      // Wait for the fade-out animation to complete before hiding the message
      const timeoutId = setTimeout(() => setIsVisible(false), 250); // Match this duration with your fade-out animation
      return () => clearTimeout(timeoutId);
    }
  }, [hasReachedEnd, isVisible]);

  if (!isVisible && !hasReachedEnd) return null;

  return (
    <>
      <div className={`${!hasReachedEnd ? fadeIn : fadeOut}`}>
      <div className={scrolldownWrapper}>
        <div className={scrolldown}>
          <svg height="30" width="10">
            <circle className={scrolldownP1} cx="5" cy="15" r="2" />
            <circle className={scrolldownP2} cx="5" cy="15" r="2" />
          </svg>
        </div>
      </div>
      </div>
    </>
  );
};

export default ScrollDownMessage;
