import React from "react";

export const TodoListItem = ({ todo, index, handleRemove, handleComplete }) => {
  console.log("TodoListItem!!!");
  return (
    <li
      key={index}
      className="list-group-item d-flex justify-content-between align-items-center"
    >
      <p
        className={`"text-center m-0" ${todo.done ? "complete" : ""}`}
        onClick={() => handleComplete(todo.id)}
      >
        {index + 1}. {todo.desc} [{todo.done ? "Done" : "Pending"}]
      </p>
      <button onClick={() => handleRemove(todo.id)} className="btn btn-danger">
        Borrar
      </button>
    </li>
  );
};
