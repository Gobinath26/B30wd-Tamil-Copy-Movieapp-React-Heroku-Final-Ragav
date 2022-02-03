import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import "./App.css";

// App -> component
// Declaration
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

  return (
    <div className="App">
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
      {/* <AddColor /> */}
    </div>
  );
}

function AddColor() {
  const [color, setColor] = useState("pink");
  const styles = {
    background: color,
  };

  // const colorList = ;

  const [colorList, setColorList] = useState([
    "crimson",
    "orange",
    "skyblue",
    "red",
  ]);

  // Todo - Capture - Typing event
  // event.target.value - typed word
  // setColor - informs react color has changed
  return (
    <div>
      <input
        value={color}
        style={styles}
        onChange={(event) => setColor(event.target.value)}
        placeholder="Enter a color"
      />
      {/* copy the colorList and add new color to it */}
      <button onClick={() => setColorList([...colorList, color])}>
        Add Color
      </button>

      {colorList.map((clr) => (
        <ColorBox color={clr} />
      ))}
      {/* <ColorBox color="red" />
      <ColorBox color="orange" />
      <ColorBox color="teal" /> */}
    </div>
  );
}

// ctrl+shift+p
// ctrl + z  undo , ctrl + y redo
// ctrl + d

function ColorBox({ color }) {
  const styles = {
    backgroundColor: color,
    height: "25px",
    width: "200px",
    marginTop: "10px",
  };
  return <div style={styles}></div>;
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

// camel case  onClick -> C must be capital
// hooks - function - 'use'
// useState -> To inform react the value is update
function Counter() {
  // let like = 4;
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);
  // const [state, setState] = useState(Intial value)
  // state -> Current value
  // setState -> helps to update state
  return (
    <div className="counter-container">
      <IconButton
        className="like-dislike"
        onClick={() => setLike(like + 1)}
        aria-label="like button"
        color="primary"
      >
        <Badge badgeContent={like} color="primary">
          👍
        </Badge>
      </IconButton>

      <IconButton
        className="like-dislike"
        onClick={() => setDisLike(disLike + 1)}
        aria-label="dislike button"
        color="error"
      >
        <Badge badgeContent={disLike} color="error">
          👎
        </Badge>
      </IconButton>
    </div>
  );
}

function Welcome({ name, profile }) {
  return (
    <div className="welcome">
      <img className="user-profile-pic" src={profile} alt="profile pic" />
      <h1>Hello, {name}😁🤩🤸‍♂️🎊🎉</h1>
    </div>
  );
}

// Task
// 1. Dislike -> onClicked dislike must increase
// 2. Listing Movies
// Github link & Netlify

// 1. Thupakki
// 2. Pushpa
// 3. Mankatha
// 4. Hangover
// 5. Avengers

// Movies
// 1. Poster
// 2. Name
// 3. Summary
// 4. Rating

// Array of strings -> Array of Component | Transofmation - map

function Msg({ name }) {
  return (
    <div className="welcome">
      <h1>Hello, {name}😁🤩🤸‍♂️🎊🎉</h1>
    </div>
  );
}

// props -> properties
// Welcome
// Persistence

// function Welcome(props) {
//   // const name = "Aravind";
//   // console.log(props);
//   const {name} = props;
//   return (
//     <div className="welcome">
//       <h1>Hello, {name}😁🤩🤸‍♂️🎊🎉</h1>
//     </div>
//   );
// }

// function Welcome() {
//   const name = "Aravind";
//   return (
//     <div className="welcome">
//       <h1>Hello, {name}😁🤩🤸‍♂️🎊🎉</h1>
//     </div>
//   );
// }

// Component
// 1. First letter must be capital
// 2. It should return one jsx element

// win + . -> emoji

// This not html
// className
// jsx -> js
// JSX -> Javascript XML

// {} template syntax

// ctrl + c

// let x = 100;
// // ...
// // 1000 lines codes
// console.log(x);

// Immutablity
// const x = 100;
// // ...
// // 1000 lines codes
// console.log(x);

// const y = [3, 4, 5];
// // y.push(7);
// // [3, 4, 5, 7]
// // ... 1000 lines code
// const z = [...y, 7];
// console.log(y, z);

// const like  =10;
// // like++;
// const like1  = like + 1;

// Task
// 1. Buttons & input - Convert to material
// 2. Toggle description (css display) - none -> block (Conditional styling)
