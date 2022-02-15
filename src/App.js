import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import { useState } from "react";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
// App -> component
// Declaration
import { AddColor } from "./AddColor";
import { AddMovie } from "./AddMovie";
import "./App.css";
import { EditMovie } from "./EditMovie";
import { INITIAL_MOVIE_LIST } from "./INITIAL_MOVIE_LIST";
import { MovieDetails } from "./MovieDetails";
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

  // /movies - add movie & movie list
  // /color-game - AddColor
  // / -> Welcome to the movie app

  // 1. Creating - createContext
  // 2. Publisher - provider - context.Provider
  // 3. Subscriber - useContext - useContext(context)
  const history = useHistory();
  const [mode, setMode] = useState("dark");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ borderRadius: "0px", minHeight: "100vh" }} elevation={4}>
        <div className="App">
          <AppBar position="static">
            <Toolbar>
              <Button color="inherit" onClick={() => history.push("/")}>
                Home
              </Button>
              <Button color="inherit" onClick={() => history.push("/movies")}>
                Movies
              </Button>
              <Button
                color="inherit"
                onClick={() => history.push("/color-game")}
              >
                Color game
              </Button>
              <Button
                color="inherit"
                onClick={() => history.push("/tic-tac-toe")}
              >
                Tic Tac Toe
              </Button>
              <Button
                color="inherit"
                onClick={() => history.push("/movies/add")}
              >
                Add Movies
              </Button>
              <Button
                color="inherit"
                style={{ marginLeft: "auto" }}
                startIcon={
                  mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />
                }
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
              >
                {mode === "light" ? "dark" : "light"} mode
              </Button>
            </Toolbar>
          </AppBar>

          <div className="route-container">
            {/* old path -> /films    new path -> /movies */}
            <Switch>
              <Route exact path="/">
                <Msg />
              </Route>
              <Route path="/films">
                <Redirect to="/movies" />
              </Route>
              {/* /movies/add */}
              {/* Task
Edit movie
/movies/edit/:id */}

              <Route path="/movies/add">
                <AddMovie movieList={movieList} setMovieList={setMovieList} />
              </Route>
              <Route path="/movies/edit/:id">
                <EditMovie movieList={movieList} setMovieList={setMovieList} />
              </Route>
              {/* : -> makes id a variable */}
              <Route path="/movies/:id">
                <MovieDetails />
              </Route>
              <Route path="/movies">
                <MovieList />
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
          </div>

          {/* <Msg /> */}

          {/* <AddColor /> */}
        </div>
      </Paper>
    </ThemeProvider>
  );
}

function Hi() {
  return <div>Hi</div>;
}
