import { useContext, useState, useRef } from "react";
import "./bookpage.css";
import { MovieContext } from "./movieContext";
import notFound from "./assets/placeholder.jpg";
import { Link } from "react-router-dom";

export const Bookpage = () => {
  const { currentMovie } = useContext(MovieContext);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const closeBtn = useRef();

  let movie = {
    name: "Not Found",
    language: "English",
    genres: ["Action"],
    premiered: "2023-03-21",
    rating: { average: 4.4 },
    summary: "Not Found",
  };

  if (currentMovie !== null) movie = currentMovie[0].show;

  const handleSubmit = () => {
    let user = {
      userName,
      email,
    };

    localStorage.setItem("user", JSON.stringify(user));
    closeBtn.current.click();
  };

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

        <button
          className="book-btn"
          data-bs-toggle="modal"
          data-bs-target="#bookMovieTicket"
        >
          Book Ticket
        </button>
      </div>

      <div
        className="modal fade"
        id="bookMovieTicket"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Book Tickets For : {movie.name}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <label for="name" class="form-label">
                  Name :
                </label>
                <input
                  type="Text"
                  id="name"
                  class="form-control"
                  aria-labelledby="passwordHelpBlock"
                  onChange={(e) => setUserName(e.target.value)}
                />
                <label for="name" class="form-label">
                  Email Address :
                </label>
                <input
                  type="email"
                  id="name"
                  class="form-control"
                  aria-labelledby="passwordHelpBlock"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={closeBtn}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
