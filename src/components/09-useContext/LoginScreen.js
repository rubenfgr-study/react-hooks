import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const LoginScreen = () => {
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { user, password } = e.target.elements;
    setUser({
      id: new Date().getTime(),
      user: user.value,
      password: password.value,
    });
  };

  return (
    <div>
      <h1>LoginScreen</h1>
      <hr />

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            className="form-control"
            type="text"
            name="user"
            autoComplete="off"
            placeholder="Usuario"
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            type="password"
            name="password"
            placeholder="*************"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => setUser({})}
        >
          Login
        </button>
      </form>
    </div>
  );
};
