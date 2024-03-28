"use client";
import React, { createRef, useEffect, useId, useRef, useState } from "react";

interface Data {
  [key: string]: any;
}

type PropsValue = {
  inputClass: string;
  name: string;
  data: Data;
  setData: React.Dispatch<React.SetStateAction<any>>;
  outsideDivClass?: string;
  labelClass?: string;
  label?: string | null;
  type?: string;
  required?: boolean;
  readonly?: boolean;
};

const Input = React.forwardRef(
  (
    {
      label = null,
      type = "text",
      name,
      outsideDivClass = "",
      labelClass = "",
      inputClass = "",
      required = true,
      readonly = false,
      data,
      setData,
    }: PropsValue,
    ref
  ) => {
    const id = useId();
    const innerRef = () => (ref || createRef(), [ref]);
    return (
      <div className={outsideDivClass}>
        {label && (
          <label htmlFor={id} className={labelClass}>
            {label}
          </label>
        )}
        <input
          type={type}
          id={id}
          ref={innerRef}
          value={data[name]}
          onChange={(e) => {
            if (name === "title" && readonly) {
              // console.log(e.target.value)
              setData((prev: any) => ({
                ...prev,
                [name]: e.target.value,
                slug: e.target.value.replaceAll(" ", "-"),
              }));
            }
            setData((prev: any) => ({ ...prev, [name]: e.target.value }));
          }}
          required={required}
          readOnly={readonly}
          className={inputClass}
        />
      </div>
    );
  }
);

export default Input;
