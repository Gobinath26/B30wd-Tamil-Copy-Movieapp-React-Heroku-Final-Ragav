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
  return (
    <div className="App">
      {/* Array of strings -> Array of Component | Transofmation - map */}
      {/* {names.map((nm) => (
        <Msg name={nm} />
      ))} */}

      {/* Array of Objects -> Array of Component | Transofmation - map */}
      {users.map((usr) => (
        <Welcome name={usr.name} profile={usr.profile} />
      ))}

      {/* {5*6} */}
      {/* Task Use map to loop Welcome component */}
      <Counter />
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

function Welcome({ name, profile }) {
  return (
    <div className="welcome">
      <img className="user-profile-pic" src={profile} alt="profile pic" />
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
