import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export function AddMovie({ movieList, setMovieList }) {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");
  const history = useHistory();
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
      <Button
        onClick={() => {
          const newMovie = {
            name: name,
            poster: poster,
            rating: rating,
            summary: summary,
            trailer: trailer,
          };

          setMovieList([...movieList, newMovie]);
          history.push("/movies");
        }}
        variant="contained"
      >
        Add movie
      </Button>
    </div>
  );
}
