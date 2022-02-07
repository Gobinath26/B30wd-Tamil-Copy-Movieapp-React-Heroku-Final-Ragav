import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Confetti from "react-confetti";
import { Link, Route, Switch } from "react-router-dom";
// App -> component
// Declaration
import useWindowSize from "react-use/lib/useWindowSize";
import { AddColor } from "./AddColor";
import "./App.css";
import { Counter } from "./Counter";
import { double } from "./Msg"; // 1. Named imports & exports - latest

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

  const INITIAL_MOVIE_LIST = [
    {
      name: "RRR",
      poster:
        "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
      rating: 8.8,
      summary:
        "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
    },
    {
      name: "Iron man 2",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
      rating: 7,
      summary:
        "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
    },
    {
      name: "No Country for Old Men",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
      rating: 8.1,
      summary:
        "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
    },
    {
      name: "Jai Bhim",
      poster:
        "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
      summary:
        "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
      rating: 8.8,
    },
    {
      name: "The Avengers",
      rating: 8,
      summary:
        "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
      poster:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
    },
    {
      name: "Interstellar",
      poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
      rating: 8.6,
      summary:
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
    },
    {
      name: "Baahubali",
      poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
      rating: 8,
      summary:
        "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
    },
    {
      name: "Ratatouille",
      poster:
        "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
      rating: 8,
      summary:
        "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
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

      <Switch>
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
          <div className="movie-list">
            {movieList.map(({ name, poster, rating, summary }, index) => (
              <Movie
                key={index}
                name={name}
                poster={poster}
                rating={rating}
                summary={summary}
              />
            ))}
          </div>
        </Route>
        <Route path="/color-game">
          <AddColor />
        </Route>
        <Route path="/tic-tac-toe">
          <TicTacToe />
        </Route>
        <Route path="/">
          <Msg />
        </Route>
      </Switch>

      {/* <Msg /> */}

      {/* <AddColor /> */}
    </div>
  );
}

function Msg() {
  return (
    <div>
      <h2>Welcome to the movie app 😊🎉🎉</h2>
    </div>
  );
}

// Task
// > 8.5 green
// <= 8.5 red

// Task
// 1. New Movie - AddMovie
// 2. Warning: Each child in a list should have a unique "key" prop - Why?

function Movie({ name, poster, rating, summary }) {
  // Normal JS
  // Conditional styling
  const styles = {
    // backgroundColor: "green",
    color: rating > 8.5 ? "green" : "red",
  };
  // Inside return only jsx
  //  none -> block (Conditional styling)
  const [show, setShow] = useState(true);

  // Conditional styling
  // const summaryStyles = {
  //   display: show ? "block" : "none",
  // };

  return (
    <Card className="movie-container">
      <img src={poster} alt={name} className="movie-poster" />
      <CardContent>
        <div className="movie-specs">
          <h2 className="movie-name">
            {name}
            <IconButton
              color="primary"
              onClick={() => setShow(!show)}
              aria-label="Toggle summary"
            >
              {/* Conditional rendering*/}
              {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </h2>
          <p style={styles} className="movie-rating">
            ⭐ {rating}
          </p>
        </div>

        {/* Conditional rendering - prefered*/}
        {show ? <p className="movie-summary">{summary}</p> : ""}
      </CardContent>
      <CardActions>
        <Counter />
      </CardActions>
    </Card>
  );
}

// loop -> map
//  Parent component -> child component (Data has to be passed) -> props
function TicTacToe() {
  const [board, setBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  // useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);

  const decideWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    // if winning condition present in board then we have a winner
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      // console.log(a, b, c);
      if (board[a] !== null && board[a] === board[b] && board[b] === board[c]) {
        console.log("Winner is", board[a]);
        return board[a];
      }
    }
    return null;
  };

  const winner = decideWinner(board);

  const [isXturn, setIsXTurn] = useState(true);

  const handleClick = (index) => {
    // copy the board and replace with 'X' in the clicked GameBox
    // Update only untouched boxes & until no winner
    if (winner === null && board[index] === null) {
      const boardCopy = [...board];
      console.log(boardCopy, index);
      boardCopy[index] = isXturn ? "X" : "O";
      setBoard(boardCopy);
      setIsXTurn(!isXturn);
    }

    // console.log(index);
  };

  const { width, height } = useWindowSize();

  return (
    <div className="full-game">
      {winner ? <Confetti width={width} height={height} gravity={0.01} /> : ""}
      <div className="board">
        {board.map((val, index) => (
          <GameBox val={val} onPlayerClick={() => handleClick(index)} />
        ))}
      </div>
      {winner ? <h2>Winner is: {winner}</h2> : ""}
      <button
        onClick={() => {
          setBoard([null, null, null, null, null, null, null, null, null]);
          setIsXTurn(true);
        }}
      >
        Restart
      </button>
    </div>
  );
}

// Changing val requires hook
function GameBox({ val, onPlayerClick }) {
  // const val = "X";
  // const [val, setVal] = useState(null);
  const styles = {
    color: val === "X" ? "green" : "red",
  };
  return (
    <div
      // onClick={() => setVal(val === "X" ? "O" : "X")}
      onClick={() => onPlayerClick()}
      style={styles}
      className="game-box"
    >
      {val}
    </div>
  );
}

// { val } -> Object destructuring
// function GameBox({ val }) {
//   // const val = "X";
//   const styles = {
//     color: val === "X" ? "green" : "red",
//   };
//   return (
//     <div style={styles} className="game-box">
//       {val}
//     </div>
//   );
// }

// {} -> template syntax
// X -> green  O -> red | Conditional styling

// Multi page - advantage
// 1. Performance
// 2. Ease of access - organized
// 3. Sharing

// SPA
// 1. No refresh
// 2. Smooth experience

// React router dom
// Condition rendering

// Flow of Class
// Total 2hr 30mins session = 2hours topic & 30mins doubt clarification on today's topic
// First 10mins previous class doubts

// Today's topic
// Basic routing & Recap Session

// Task - 10mins
// /movies - add movie & movie list
// /color-game - AddColor
// / -> Welcome to the movie app

// npm install react-router-dom@5

// Task
// 1. Draw condition
// 2. X turn/ O turn
// 3. Whom to start the game with X or O
// 4. Restart - board empty

// Today's topic
// React router - useParams, useHistory
// Edit Movie & Delete Movie
