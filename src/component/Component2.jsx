import React, { useContext } from "react";
import { UserContext } from "../UserContext";

const Component2 = () => {
  const {user,book,country} = useContext(UserContext);

  //   console.log(data);
  return (
    <div>
      <h3>First State data:</h3>
      <h2> {user.id}</h2>
      <h3>{user.name}  </h3>
    </div>
  );
};

export default Component2;
