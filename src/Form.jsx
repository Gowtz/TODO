import { useContext } from "react";
import { TodoContext } from "./App";
import { useState } from "react";

export default function Form() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useContext(TodoContext);

  const handleClick = () => {

    if (input !== "") {
      setTodo((prev) => [...prev, { title: input }]);
      setInput("")

    }
  };
  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={()=>handleClick()}>Add ToDO</button>
    </>
  );
}
