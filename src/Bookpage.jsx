import { useContext } from "react";
import "./bookpage.css";
import { MovieContext } from "./movieContext";
import notFound from "./assets/placeholder.jpg";
import { Link } from "react-router-dom";

export const Bookpage = () => {
  const { currentMovie } = useContext(MovieContext);

  let movie = {
    name: "Not Found",
    language: "English",
    genres: ["Action"],
    premiered: "2023-03-21",
    rating: { average: 4.4 },
    summary: "Not Found",
  };

  if (currentMovie !== null) {
    movie = currentMovie[0].show;
  }

  return (
    <div className="screen2">
      <div className="left">
        <Link to="/" className="back-btn">
          Back
        </Link>
        <img
          src={movie.image ? movie.image.original : notFound}
          alt={movie.name}
          className="left-img"
        />
      </div>
      <div className="right text-center">
        <h1 className="movie-title">{movie.name}</h1>
        <h6>
          <strong>Language :</strong> {movie.language}
        </h6>
        <h6>
          <strong>Genre :</strong>{" "}
          {movie.genres.map((genre) => {
            return genre + ", ";
          })}
        </h6>
        <h6>
          <strong>Date :</strong> {movie.premiered}
        </h6>
        <h6>
          <strong>Rating :</strong> {movie.rating.average}
        </h6>
        <h6>
          <strong>About Movie :</strong>
        </h6>
        <div className="movie-summary lead">{movie.summary}</div>

        <button className="book-btn">Book Ticket</button>
      </div>
    </div>
  );
};
