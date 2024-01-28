import React, { useEffect, useRef } from "react";
import { usePageEnd } from "./PageEndContext";

const EndOfPageDetector = () => {
  const { setHasReachedEnd } = usePageEnd();
  const sentinelRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      setHasReachedEnd(entries[0].isIntersecting);
    });

    const sentinel = sentinelRef.current;
    observer.observe(sentinel);

    return () => observer.unobserve(sentinel);
  }, [setHasReachedEnd]);

  return <div ref={sentinelRef} style={{ height: "1px" }} />;
};

export default EndOfPageDetector;
