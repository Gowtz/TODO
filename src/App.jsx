import { createContext } from "react";
import { useState } from "react";
import Home from "./Home";
export const TodoContext = createContext(null);
function App() {
  const [todos, setTodos] = useState([{  }]);
  return (
    <>
      <h1 className="text-blue-500">Hello</h1>

      <TodoContext.Provider value={[todos, setTodos]}>
        <Home />
      </TodoContext.Provider>
    </>
  );
}

export default App;
