import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { Movie } from "./Movie";

export function MovieList({ movieList, setMovieList }) {
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
        />
      ))}
    </div>
  );
}
