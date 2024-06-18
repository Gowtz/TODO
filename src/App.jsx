import { createContext } from "react";
import { useState } from "react";
import Home from "./Home";
import { useEffect } from "react";
export const TodoContext = createContext(null);
function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("todos") || "[]");
    console.log(todos);
    setTodos(data);
  }, []);
  useEffect(() => {
    if(todos[0] != null){
    localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  return (
    <>
  
      <TodoContext.Provider value={[todos, setTodos]}>
        <Home />
      </TodoContext.Provider>
    </>
  );
}

export default App;
