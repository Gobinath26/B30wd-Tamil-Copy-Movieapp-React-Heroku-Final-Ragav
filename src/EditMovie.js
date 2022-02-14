import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";

export function EditMovie({ movieList, setMovieList }) {
  const { id } = useParams(); // extracting parameter from the URL
  const movie = movieList[id];
  console.log(movie);
  const [name, setName] = useState(movie.name);
  const [poster, setPoster] = useState(movie.poster);
  const [rating, setRating] = useState(movie.rating);
  const [summary, setSummary] = useState(movie.summary);
  const [trailer, setTrailer] = useState(movie.trailer);
  const history = useHistory();
  return (
    <div className="add-movie-form">
      <TextField
        value={name}
        onChange={(event) => setName(event.target.value)}
        label="Name"
        variant="outlined"
      />
      {/* <input /> */}
      <TextField
        value={poster}
        type="text"
        label="Poster"
        onChange={(event) => setPoster(event.target.value)}
      />
      <TextField
        value={rating}
        type="text"
        label="Rating"
        onChange={(event) => setRating(event.target.value)}
      />
      <TextField
        value={summary}
        type="text"
        label="Summary"
        onChange={(event) => setSummary(event.target.value)}
      />
      <TextField
        value={trailer}
        type="text"
        label="Trailer"
        onChange={(event) => setTrailer(event.target.value)}
      />
      {/* copy the movieList and add new movie to it */}
      {/* <button></button> */}
      <Button
        onClick={() => {
          const updatedMovie = {
            name: name,
            poster: poster,
            rating: rating,
            summary: summary,
            trailer: trailer,
          };
          const copyMovieList = [...movieList];
          copyMovieList[id] = updatedMovie;
          setMovieList(copyMovieList);
          history.push("/movies");
        }}
        variant="contained"
        color="success"
      >
        Save
      </Button>
    </div>
  );
}
