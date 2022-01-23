import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const HomeScreen = () => {
  const userContext = useContext(UserContext);

  console.log("HomeScreen -> userContext", userContext);

  const { user } = userContext;

  return (
    <div>
      <h1>HomeScreen</h1>
      <hr />
      <pre className="bg-dark p-2 text-white">
        {JSON.stringify(user, null, 3)}
      </pre>
    </div>
  );
};
