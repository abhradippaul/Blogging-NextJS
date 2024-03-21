"use client"
import { createContext, useContext } from "react";

export const UserContext = createContext({})

export const UserContextProvider = UserContext.Provider

export const UseUserContext = () => {
    return useContext(UserContext)
}