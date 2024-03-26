"use client";
export const setItemLocalStorage = (key: string, value: object) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getItemLocalStorage = (key: string) => {
    const value = localStorage.getItem(key);
    if(value) {
        return JSON.parse(value);
    } else {
        return null
    }
}

export const getItemStringLocalStorage = (key: string) => {
    const value = localStorage.getItem(key);
    if(value) {
        return value;
    } else {
        return null
    }
}

export const removeItemLocalStorage = (key: string) => {
    localStorage.removeItem(key);
}