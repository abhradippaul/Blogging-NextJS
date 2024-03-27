import React, { createRef, useId, useRef, useState } from "react";

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
      setData
    }: PropsValue,
    ref
  ) => {
    const id = useId();
    const [info, setInfo] = useState<string>(data[name]);
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
          value={info}
          onChange={(e) => {
            setInfo(e.target.value);
          }}
          onBlur={() => {
            if (info) {
              setData((prev:any) => ({ ...prev, [name]: info }));
            }
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
