import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { API } from "./global";

export function AddMovie() {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");
  const history = useHistory();

  const addMovie = () => {
    const newMovie = {
      name: name,
      poster: poster,
      rating: rating,
      summary: summary,
      trailer: trailer,
    };

    // 1. method must be POST
    // 2. body - JSON data
    // 3. headers - JSON data
    // After POST is complete ->  movie to /movies
    fetch(`${API}/movies/`, {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => history.push("/movies"));

    // setMovieList([...movieList, newMovie]);
  };
  return (
    <div className="add-movie-form">
      <TextField
        onChange={(event) => setName(event.target.value)}
        label="Name"
        variant="outlined"
      />
      {/* <input /> */}
      <TextField
        type="text"
        label="Poster"
        onChange={(event) => setPoster(event.target.value)}
      />
      <TextField
        type="text"
        label="Rating"
        onChange={(event) => setRating(event.target.value)}
      />
      <TextField
        type="text"
        label="Summary"
        onChange={(event) => setSummary(event.target.value)}
      />
      <TextField
        type="text"
        label="Trailer"
        onChange={(event) => setTrailer(event.target.value)}
      />
      {/* copy the movieList and add new movie to it */}
      {/* <button></button> */}
      <Button onClick={() => addMovie()} variant="contained">
        Add movie
      </Button>
    </div>
  );
}
