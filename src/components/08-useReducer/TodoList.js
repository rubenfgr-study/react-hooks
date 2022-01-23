import React from "react";
import { TodoListItem } from "./TodoListItem";

export const TodoList = ({ todos, handleRemove, handleComplete }) => {
  console.log("TodoList!!!");
  return (
    <ul className="list-group list-group-flush">
      {todos.map((todo, index) => (
        // TodoListItem = ({todo, index, handleRemove, handleComplete})
        <TodoListItem
          key={todo.id}
          todo={todo}
          index={index}
          handleRemove={handleRemove}
          handleComplete={handleComplete}
        />
      ))}
    </ul>
  );
};
