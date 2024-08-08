import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = (props) => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <UserContext.Provider
      value={{ loggedInUser, setLoggedInUser, isLoggedIn: !!loggedInUser }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
