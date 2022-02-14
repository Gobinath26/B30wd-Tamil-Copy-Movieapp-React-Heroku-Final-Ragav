import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import { useHistory } from "react-router-dom";
import { Movie } from "./Movie";

export function MovieList({ movieList, setMovieList }) {
  const history = useHistory();
  return (
    <div className="movie-list">
      {movieList.map(({ name, poster, rating, summary }, index) => (
        <Movie
          key={index}
          name={name}
          poster={poster}
          rating={rating}
          summary={summary}
          deleteButton={
            <IconButton
              onClick={() => {
                console.log(index);
                const copyMovieList = [...movieList];
                copyMovieList.splice(index, 1);
                setMovieList(copyMovieList);
              }}
              aria-label="delete"
              color="error"
            >
              <DeleteIcon />
            </IconButton>
          }
          editButton={
            <IconButton
              onClick={() => history.push(`/movies/edit/${index}`)}
              aria-label="delete"
              color="secondary"
            >
              <EditIcon />
            </IconButton>
          }
          id={index}
        />
      ))}
    </div>
  );
}

// /movies/edit/1
