import { useState } from "react";


import Styles from "./newtodo.module.css";

export default function NewTodo(props) {
    const {onAddTodo}=props;

const [todo , setTodo]= useState({title:"",desc:""});
const {title , desc} = todo;


const handleChange =(e)=>{
     const name =e.target.name;
     setTodo((oldTodo)=>{
        return {...oldTodo, [name]:e.target.value}
     })
}

const handleSubmit =(e)=>{
     e.preventDefault();
     setTodo({ title:"", desc:""})
     onAddTodo(todo)
    
} 


    return (
      <form className={Styles.container} onSubmit={handleSubmit}>
        <fieldset>
          <legend>Add New Todo</legend>
          <div className={Styles.inputFeild}>
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" value={title} onChange={handleChange}/>
          </div>
          <div className={Styles.inputFeild}>
            <label htmlFor="desc">Description:</label>
            <textarea id="desc" name="desc" value={desc} onChange={handleChange}></textarea>
          </div>
          <div className={Styles.inputFeild}>
            <button type="submit">Add Todo</button>
          </div>
        </fieldset>
      </form>
    );
}
