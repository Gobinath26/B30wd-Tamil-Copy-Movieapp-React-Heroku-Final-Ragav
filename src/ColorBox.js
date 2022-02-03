// ctrl+shift+p
// ctrl + z  undo , ctrl + y redo
// ctrl + d
export function ColorBox({ color }) {
  const styles = {
    backgroundColor: color,
    height: "25px",
    width: "200px",
    marginTop: "10px",
  };
  return <div style={styles}></div>;
}
