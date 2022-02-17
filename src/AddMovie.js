import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { API } from "./global";

// Task 15mins
// Validation - on Add movie
// name - required
// poster - min 4 chars, required
// rating - 0 - 10, required
// summary - min 20 chars, required
// trailer -min 4, required

// Task 10mins
// Validation - on Edit movie
// name - required
// poster - min 4 chars, required
// rating - 0 - 10, required
// summary - min 20 chars, required
// trailer -min 4, required

export const movieValidationSchema = yup.object({
  name: yup.string().required("Why not fill this name? 😉"),
  poster: yup
    .string()
    .required("Why not fill this poster? 😉")
    .min(4, "Need a longer poster 😄"),
  rating: yup.number().min(0).max(10).required("Why not fill this rating? 😉"),
  summary: yup
    .string()
    .required("Why not fill this summary? 😉")
    .min(20, "Need a longer summary 😄"),
  trailer: yup
    .string()
    .required("Why not fill this trailer? 😉")
    .min(4, "Need a longer trailer 😄"),
});

export function AddMovie() {
  // const [name, setName] = useState("");
  // const [poster, setPoster] = useState("");
  // const [rating, setRating] = useState("");
  // const [summary, setSummary] = useState("");
  // const [trailer, setTrailer] = useState("");
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      name: "",
      poster: "",
      rating: "",
      summary: "",
      trailer: "",
    },
    validationSchema: movieValidationSchema,
    onSubmit: (newMovie) => {
      addMovie(newMovie);
    },
  });

  const addMovie = (newMovie) => {
    console.log("onSubmit", newMovie);
    // // 1. method must be POST
    // // 2. body - JSON data
    // // 3. headers - JSON data
    // // After POST is complete ->  movie to /movies
    fetch(`${API}/movies/`, {
      method: "POST",
      body: JSON.stringify(newMovie),
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
      <Button type="submit" variant="contained">
        Add movie
      </Button>
    </form>
  );
}
