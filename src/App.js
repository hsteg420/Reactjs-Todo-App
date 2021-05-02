//import "./App.css";
import "./MyComponents/style.css";
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { AddTodo } from "./MyComponents/AddTodo";
import { Footer } from "./MyComponents/Footer";
import React, { useState} from "react";

function App() {
  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };
  
  const addTodo = (title, desc) => {
    const myTodo = {
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
  };
  const [todos, setTodos] = useState([]);

  return (
    <>
      <Header />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer />
    </>
  );
}

export default App;
