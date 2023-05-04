import { createContext, useState } from "react";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [currentMovie, setCurrentMovie] = useState(null);

  return (
    <MovieContext.Provider value={{ currentMovie, setCurrentMovie }}>
      {children}
    </MovieContext.Provider>
  );
};
