import React from "react";
//to display todos
export const TodoItem = ({ todo, onDelete }) => {
  return (
    <>
      <div className="showStyle">
        <h4> {todo.title} </h4>
        <p>{todo.desc}</p>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => {
            onDelete(todo);
          }}
        >
          Delete
        </button>

      </div>
    </>
  );
};
