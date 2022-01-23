import React from "react";
import useForm from "../../hooks/useForm";

export const TodoAdd = ({ handleAddTodo }) => {
  const [{ desc }, handleInputChange, reset] = useForm({
    desc: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (desc.trim().length === 0) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc,
      done: false,
    };

    handleAddTodo(newTodo);
    reset();
  };

  return (
    <>
      <h4>Agregar TODO</h4>
      <hr />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="desc"
          className="form-control"
          placeholder="Aprender..."
          autoComplete="off"
          onChange={handleInputChange}
          value={desc}
        />
        <button
          type="submit"
          className="btn btn-outline-primary mt-3 btn-block"
        >
          Agregar
        </button>
      </form>
    </>
  );
};
