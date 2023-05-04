import { Link } from "react-router-dom";
import notFound from "./assets/placeholder.jpg";
export const Card = ({ movie, handleShowMore }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        className="card-img-top"
        src={movie.image ? movie.image.original : notFound}
        alt="Card image cap"
      />
      <div className="card-body text-center">
        <h6 className="card-title">
          <strong>Movie :</strong> {movie.name}
        </h6>
        <h6>
          <strong>Language :</strong> {movie.language}
        </h6>
        <h6>
          <strong>Genre :</strong>{" "}
          {movie.genres.map((genre) => {
            return genre + ", ";
          })}
        </h6>
        <Link
          id={movie.id}
          className="btn btn-primary btn-sm m-2"
          onClick={(e) => handleShowMore(e.target.id)}
          to="/bookmovie"
        >
          Show More
        </Link>
      </div>
    </div>
  );
};
