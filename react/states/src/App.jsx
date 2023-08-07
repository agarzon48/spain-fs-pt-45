import { useState, useEffect } from "react";

function App() {
  const [xState, setXState] = useState(0);
  const [yState, setYState] = useState(0);
  const [counter, setCounter] = useState(0);

  const handleMouseMovement = (e) => {
    setXState((e.clientX / window.innerWidth) * 255);
    setYState((e.clientY / window.innerHeight) * 255);
  };

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  useEffect(() => {
    console.log("Comprobando si debo reiniciar");
    if (counter > 5) {
      setCounter(0);
    }
  }, [counter]);

  return (
    // <div id="main" onMouseMove={handleMouseMovement} style={{ backgroundColor: `rgba(${xState}, ${yState}, 255, 1)` }}>
    <div id="main">
      <h1>{counter}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default App;
