import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Link, Redirect, Route, Switch } from "react-router-dom";
// App -> component
// Declaration
import { AddColor } from "./AddColor";
import "./App.css";
import { INITIAL_MOVIE_LIST } from "./INITIAL_MOVIE_LIST";
import { MovieList } from "./MovieList";
import { double } from "./Msg"; // 1. Named imports & exports - latest
import { Msg } from "./Msg.1";
import { NotFound } from "./NotFound";
import { TicTacToe } from "./TicTacToe";

console.log(double(4));

// 2. Default imports & exports
export default function App() {
  const names = ["Harish", "Kavi Kumar", "Sankavi", "Vignesh", "Jerline mary"];
  // const good = "Keerthana !!!"
  // Array of objects - clue
  const users = [
    {
      profile:
        "https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Profile-Photo-Wallpaper.jpg",
      name: "Keerthana",
    },
    {
      name: "Tamil Selvan",
      profile:
        "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGFic3RyYWN0JTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
    },
    {
      profile:
        "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name: "Aaron",
    },
  ];

  const [movieList, setMovieList] = useState(INITIAL_MOVIE_LIST);

  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");

  // /movies - add movie & movie list
  // /color-game - AddColor
  // / -> Welcome to the movie app

  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/color-game">Color game</Link>
        </li>
        <li>
          <Link to="/tic-tac-toe">Tic Tac Toe</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      {/* old path -> /films    new path -> /movies */}
      <Switch>
        <Route exact path="/">
          <Msg />
        </Route>
        <Route path="/films">
          <Redirect to="/movies" />
        </Route>
        <Route path="/movies">
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
            {/* copy the movieList and add new movie to it */}
            {/* <button></button> */}
            <Button
              onClick={() => {
                const newMovie = {
                  name: name,
                  poster: poster,
                  rating: rating,
                  summary: summary,
                };

                setMovieList([...movieList, newMovie]);
              }}
              variant="contained"
            >
              Add movie
            </Button>
          </div>
          <MovieList movieList={movieList} setMovieList={setMovieList} />
        </Route>
        <Route path="/color-game">
          <AddColor />
        </Route>
        <Route path="/tic-tac-toe">
          <TicTacToe />
        </Route>

        <Route path="**">
          <NotFound />
        </Route>
      </Switch>

      {/* <Msg /> */}

      {/* <AddColor /> */}
    </div>
  );
}
