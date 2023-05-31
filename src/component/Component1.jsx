import React, { useState } from "react";
import { UserContext } from "../UserContext";
import Component2 from "./Component2";
import Component3 from "./Component3";
const Component1 = () => {
  const [user, setUser] = useState({ id: 1, name: "Apurbo Deb Nath" });
  const [book, setBook] = useState({ id: 2, name: "Pather Panchali" });
  const [country, setCountry] = useState({ id: 3, name: "Bangladesh" });

  return (
    <UserContext.Provider value={{user,book,country}}>
      <Component2 />
      <Component3 />
    </UserContext.Provider>
  );
};

export default Component1;
