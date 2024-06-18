import Form from "./Form"
import Lists from "./Lists"
export default function Home() {
  return (
  <>
  <div className="w-80 mx-auto my-10">
  <h1 className="text-5xl mb-5">Todo List App</h1>
  <Form/>
  <Lists />
  </div>
  </>
  )
}
