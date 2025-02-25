import { useState } from "react";
import UserRefParent from "./hooks/useref/UserefParent";

function App() {
  console.log('App render');
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>App</h1>
        <p>Check the console for logs</p>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>

      <div>
        <UserRefParent />
      </div>
    </>
  )
}

export default App
