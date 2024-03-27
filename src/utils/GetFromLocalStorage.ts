"use client"

import { getItemLocalStorage, getItemStringLocalStorage } from "@/utils/LocalStorage";

export const getLocalSetContext = () => {
    const userData = getItemLocalStorage("isUserLoggedIn");
    const token = getItemStringLocalStorage("token");
    if (userData && token) {
      return {userData, token};
    } else {
        return null
    }
}