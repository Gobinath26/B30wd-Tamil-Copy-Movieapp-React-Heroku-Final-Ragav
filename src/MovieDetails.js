import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { API } from "./global";
export function MovieDetails() {
  const { id } = useParams(); // extracting parameter from the URL
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetch(`${API}/movies/${id}`, {
      method: "GET",
    }) // promise
      .then((data) => data.json()) // Response object
      .then((mv) => setMovie(mv))
      .catch((err) => console.log(err));
  }, []);

  const history = useHistory();
  return (
    <div>
      {/* copy embed code */}
      <iframe
        width="100%"
        height="650"
        src={movie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="movie-detail-container">
        <div className="movie-specs">
          <h3 className="movie-name">{movie.name}</h3>
          <p className="movie-rating">⭐ {movie.rating}</p>
        </div>
        <p className="movie-summary">{movie.summary}</p>
        <Button
          variant="contained"
          onClick={() => history.goBack()}
          startIcon={<ArrowBackIosIcon />}
        >
          Back
        </Button>
      </div>
    </div>
  );
}
