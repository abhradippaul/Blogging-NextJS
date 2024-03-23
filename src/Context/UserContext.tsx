"use client";
import { ReactNode, createContext, useContext, useState } from "react";

interface ContextValue {
  status: boolean;
  setStatus: React.Dispatch<React.SetStateAction<boolean>>;
  user: object;
  setUser: React.Dispatch<React.SetStateAction<object>>;
}

export const UserContext = createContext<ContextValue>({
  status: false,
  setStatus: () => {},
  user: {},
  setUser: () => {},
});

export const UseUserContext = () => {
  return useContext(UserContext);
};

type ChildrenValue = {
  children: ReactNode | JSX.Element;
};

function UserContextProvider({ children }: ChildrenValue) {
  const [user, setUser] = useState({});
  const [status, setStatus] = useState(false);
  return (
    <UserContext.Provider value={{ user, setUser, status, setStatus }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
