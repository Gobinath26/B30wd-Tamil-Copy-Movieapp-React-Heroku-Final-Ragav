import { useState } from "react";
import { ColorBox } from "./ColorBox";

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
