/* eslint-disable eqeqeq */
import React from "react";
import { Link, useParams } from "react-router-dom";
import { movies } from "./Movies";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

function Trailer() {
  const { id } = useParams();
  console.log("Movie Id", id);
  const movie = movies.find((movie) => movie.id == id);
  console.log(movie);

  return (
    <div className="trailer-container">
      <iframe
        width="720"
        height="400"
        src={movies[id - 1].trailer}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullscreen
        title="YouTube video player"
      ></iframe>
      <h2>{movies[id - 1].title}</h2>
      <h4> {movies[id - 1].type}</h4>
      <p style={{ width: "70%", textAlign: "center" }}>
        {movies[id - 1].description}
      </p>

      <Link to="/">
        <Button
          style={{ marginTop: "30px" }}
          variant="contained"
          color="primary"
          size="large"
        >
          Home
        </Button>
      </Link>
    </div>
  );
}

Trailer.propTypes = {
  movie: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
  posterUrl: PropTypes.string,
  rating: PropTypes.number,
};

export default Trailer;
