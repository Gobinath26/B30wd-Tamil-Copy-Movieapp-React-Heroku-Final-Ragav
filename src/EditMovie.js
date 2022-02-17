import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { movieValidationSchema } from "./AddMovie";
import { API } from "./global";

export function EditMovie({ movieList, setMovieList }) {
  const { id } = useParams(); // extracting parameter from the URL
  // const movie = movieList[id];
  // console.log(movie);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`${API}/movies/${id}`, {
      method: "GET",
    }) // promise
      .then((data) => data.json()) // Response object
      .then((mv) => setMovie(mv))
      .catch((err) => console.log(err));
  }, []);

  console.log(movie);

  return (
    <div>{movie ? <EditMovieForm movie={movie} /> : <h2>Loading</h2>}</div>
  );
}

function EditMovieForm({ movie }) {
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      name: movie.name,
      poster: movie.poster,
      rating: movie.rating,
      summary: movie.summary,
      trailer: movie.trailer,
    },
    validationSchema: movieValidationSchema,
    onSubmit: (updatedMovie) => {
      editMovie(updatedMovie);
    },
  });

  const editMovie = (updatedMovie) => {
    console.log("Updated", updatedMovie);
    // 1. method must be PUT & pass id
    // 2. body - JSON data
    // 3. headers - JSON data
    // After PUT is complete ->  movie to /movies
    fetch(`${API}/movies/${movie.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedMovie),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => history.push("/movies"));
  };

  return (
    <form onSubmit={formik.handleSubmit} className="add-movie-form">
      <TextField
        label="Name"
        variant="outlined"
        id="name"
        name="name"
        onChange={formik.handleChange}
        value={formik.values.name}
        onBlur={formik.handleBlur}
        error={formik.touched.name && formik.errors.name}
        helperText={
          formik.touched.name && formik.errors.name ? formik.errors.name : ""
        }
      />

      {/* <input /> */}
      <TextField
        type="text"
        label="Poster"
        id="poster"
        name="poster"
        onChange={formik.handleChange}
        value={formik.values.poster}
        onBlur={formik.handleBlur}
        error={formik.touched.poster && formik.errors.poster}
        helperText={
          formik.touched.poster && formik.errors.poster
            ? formik.errors.poster
            : ""
        }
      />

      <TextField
        type="text"
        label="Rating"
        id="rating"
        name="rating"
        onChange={formik.handleChange}
        value={formik.values.rating}
        onBlur={formik.handleBlur}
        error={formik.touched.rating && formik.errors.rating}
        helperText={
          formik.touched.rating && formik.errors.rating
            ? formik.errors.rating
            : ""
        }
      />

      <TextField
        type="text"
        label="Summary"
        id="summary"
        name="summary"
        onChange={formik.handleChange}
        value={formik.values.summary}
        onBlur={formik.handleBlur}
        error={formik.touched.summary && formik.errors.summary}
        helperText={
          formik.touched.summary && formik.errors.summary
            ? formik.errors.summary
            : ""
        }
      />

      <TextField
        type="text"
        label="Trailer"
        id="trailer"
        name="trailer"
        onChange={formik.handleChange}
        value={formik.values.trailer}
        onBlur={formik.handleBlur}
        error={formik.touched.trailer && formik.errors.trailer}
        helperText={
          formik.touched.trailer && formik.errors.trailer
            ? formik.errors.trailer
            : ""
        }
      />

      {/* copy the movieList and add new movie to it */}
      {/* <button></button> */}
      <Button color="success" type="submit" variant="contained">
        Save
      </Button>
    </form>
  );
}
