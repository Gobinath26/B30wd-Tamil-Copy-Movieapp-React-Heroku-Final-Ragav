import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";

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
