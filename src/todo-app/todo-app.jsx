import { useState } from "react";
import {v4 as uuid4} from "uuid";

import Todos from "./components/todos";
import NewTodo from "./components/newtodo"
import Styles from "./todoApp.module.css"


export default function TodoApp() {

  const [todos, setTodos] = useState([
    { id: uuid4(), title: "Learn React", desc: "Study the React documentation and build projects." },
    { id: uuid4(), title: "Do the dishes", desc: "Clean the dishes after dinner." }
  ]);
  

  const handleAddTodo=(todo)=>{
    const newTodo = { ...todo, id: uuid4() };
      setTodos((prev)=>{
        return [...prev, newTodo]
      })
      console.log(newTodo)
  }


  const handleremove =(id)=>{
     setTodos((prevtodos)=>{
      const filtertodo=prevtodos.filter((todo)=>todo.id !== id);
      return filtertodo;
     })
  }

  return (
    <div className={Styles.container}>
      <NewTodo onAddTodo={handleAddTodo}/>
      <Todos todos={todos} onremoveTodo={handleremove}/>
    </div>
  )
}
