import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import { useEffect, useState } from "react";

// camel case  onClick -> C must be capital
// hooks - function - 'use'
// useState -> To inform react the value is update
export function Counter() {
  // let like = 4;
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);
  // const [state, setState] = useState(Intial value)
  // state -> Current value
  // setState -> helps to update state
  useEffect(() => {
    console.log("Like is update", like);
  }, [like, disLike]);

  const incrementLike = () => setLike(like + 1);
  const incrementDisLike = () => setDisLike(disLike + 1);

  return (
    <div className="counter-container">
      <IconButton
        className="like-dislike"
        onClick={incrementLike}
        aria-label="like button"
        color="primary"
      >
        <Badge badgeContent={like} color="primary">
          👍
        </Badge>
      </IconButton>

      <IconButton
        className="like-dislike"
        onClick={incrementDisLike}
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

// Design an UI to implement the CRUD
// CRUD - Create,Read,Update,Delete
// Dashboard // List Users - /users
// Create User - /create-user
// Edit User - /edit-user/:id
// profile - /profile/:id // edit-profile – /edit-profile/🆔
