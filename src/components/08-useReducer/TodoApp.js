import React, { useEffect, useReducer } from "react";
import { TodoAdd } from "./TodoAdd";
import "./todoapp.css";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) ?? [];
};

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (newTodo) => {
    dispatch({
      type: "add",
      payload: newTodo,
    });
  };

  const handleRemove = (id) => {
    dispatch({
      type: "remove",
      payload: { id },
    });
  };

  const handleComplete = (id) => {
    dispatch({
      type: "complete",
      payload: { id },
    });
  };

  return (
    <div>
      <h1>TodoApp: ({todos.length})</h1>
      <hr />

      <div className="row">
        <div className="col-7">
          {/* TodoList = ({todos, handleRemove, handleComplete}) */}
          <TodoList
            todos={todos}
            handleRemove={handleRemove}
            handleComplete={handleComplete}
          />
        </div>
        <div className="col-5">
          <TodoAdd handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
