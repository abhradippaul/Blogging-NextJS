"use client";
import {
  getItemLocalStorage,
  getItemStringLocalStorage,
} from "@/utils/LocalStorage";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface ContextValue {
  status: boolean;
  setStatus: React.Dispatch<React.SetStateAction<boolean>>;
  user: object;
  setUser: React.Dispatch<React.SetStateAction<object>>;
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
}

export const UserContext = createContext<ContextValue>({
  status: false,
  setStatus: () => {},
  user: {},
  setUser: () => {},
  token: "",
  setToken: () => {},
});

export const UseUserContext = () => {
  return useContext(UserContext);
};

type ChildrenValue = {
  children: ReactNode | JSX.Element;
};

function UserContextProvider({ children }: ChildrenValue) {
  const [user, setUser] = useState({});
  const [status, setStatus] = useState<boolean>(false);
  const [token, setToken] = useState<string>("");
  return (
    <UserContext.Provider
      value={{ user, setUser, status, setStatus, token, setToken }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
