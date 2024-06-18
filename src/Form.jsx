import { useContext } from "react";
import { TodoContext } from "./App";
import { useState } from "react";


export default function Form() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useContext(TodoContext);
  const handleClick = () => {
    if (input !== "") {
      setTodos((prev) => [...prev, { title: input }]);
      setInput("");
    }
  }
  return (
    <>
      <div className="">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="py-2 border border-slate-200 px-7 rounded w-full"
        />
        <br />
        <button
          className="px-5 py-2 bg-slate-500 rounded my-3"
          onClick={() => {if(input !== "") handleClick()}}
        >
          Add ToDO
        </button>
      </div>
    </>
  );
}
