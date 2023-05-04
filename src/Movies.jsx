import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Card } from "./Card";
import { MovieContext } from "./movieContext";
export const Movies = () => {
  const [movies, setMovies] = useState([]);

  const { setCurrentMovie } = useContext(MovieContext);

  useEffect(() => {
    const fetchMovieData = async () => {
      const API_ENDPOINT = "https://api.tvmaze.com/search/shows?q=all";
      const res = await axios.get(API_ENDPOINT);
      setMovies(res.data);
    };
    fetchMovieData();
  }, []);

  const handleShowMore = (movieID) => {
    const selectedMovie = movies.filter((movie) => {
      return movie.show.id == movieID;
    });
    setCurrentMovie(selectedMovie);
  };

  return (
    <>
      {movies.map(({ show }) => {
        return (
          <Card
            key={show.id}
            movie={show}
            id={show.id}
            handleShowMore={handleShowMore}
          />
        );
      })}
    </>
  );
};
