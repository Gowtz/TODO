import { useContext } from "react"
import { TodoContext } from "./App"
import List from "./List"
export default function Lists() {
    const [todos,setTodos] = useContext(TodoContext)

  return (
  <>
 {
    todos.map((todo,index)=>  <List key={index} title={todo.title}/>)
 } 
 
  </>
  )
}
