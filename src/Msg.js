function Msg({ name }) {
  return (
    <div className="welcome">
      <h1>Hello, {name}ππ€©π€ΈββοΈππ</h1>
    </div>
  );
}

const double = (n) => n * 2;
// 1. Named imports & exports - latest
// 2. Default imports & exports - old - only one can be exported per file

// end of file
export { Msg, double };
