import React, { createContext, useState, useContext } from "react";

// Create a context
const PageEndContext = createContext();

// Provider component
export const PageEndProvider = ({ children }) => {
  const [hasReachedEnd, setHasReachedEnd] = useState(false);

  return (
    <PageEndContext.Provider value={{ hasReachedEnd, setHasReachedEnd }}>
      {children}
    </PageEndContext.Provider>
  );
};

// Hook to use the context
export const usePageEnd = () => useContext(PageEndContext);
