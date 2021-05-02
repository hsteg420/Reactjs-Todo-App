import React from "react";
import { TodoItem } from "./TodoItem";

export const Todos = ({todos, onDelete}) => {
  let myStyle = {
    minHeight: "50vh"
  };
  return (
    <div className="container my-3" style={myStyle}>
      <div className="list">
        {todos.length === 0? "No Todos to display": 
        todos.map((todo) => {
              return (
                <>
                <div className="hr">
                  <TodoItem todo={todo} onDelete={onDelete} /> 
                  <hr/>       
                </div>
                </>
              );
            })}
      </div>
    </div>
  );
};
