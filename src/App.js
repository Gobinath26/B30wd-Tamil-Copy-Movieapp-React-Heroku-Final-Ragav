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

  const movieList = [
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

  return (
    <div className="App">
      {/* Array of strings -> Array of Component | Transofmation - map */}
      {/* {names.map((nm) => (
        <Msg name={nm} />
      ))} */}

      {/* Array of Objects -> Array of Component | Transofmation - map */}
      {/* {users.map((usr) => (
        <Welcome name={usr.name} profile={usr.profile} />
      ))} */}

      {/* {5*6} */}
      {/* Task Use map to loop Welcome component */}
      {/* <Counter /> */}

      {/* {movieList.map((mv) => (
        <Movie
          name={mv.name}
          poster={mv.poster}
          rating={mv.rating}
          summary={mv.summary}
        />
      ))} */}
      <div className="movie-list">
        {movieList.map(({ name, poster, rating, summary }) => (
          <Movie
            name={name}
            poster={poster}
            rating={rating}
            summary={summary}
          />
        ))}
      </div>
    </div>
  );
}

function Movie({ name, poster, rating, summary }) {
  return (
    <div className="movie-container">
      <img src={poster} alt={name} className="movie-poster" />
      <div className="movie-specs">
        <h2 className="movie-name">{name}</h2>
        <p className="movie-rating">⭐ {rating}</p>
      </div>
      <p className="movie-summary">{summary}</p>
    </div>
  );
}

// camel case  onClick -> C must be capital
// hooks - function - 'use'
// useState -> To inform react the value is update
function Counter() {
  // let like = 4;
  const [like, setLike] = useState(0);
  // const [state, setState] = useState(Intial value)
  // state -> Current value
  // setState -> helps to update state
  return (
    <div>
      <button onClick={() => setLike(like + 1)}>👍 {like}</button>
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
