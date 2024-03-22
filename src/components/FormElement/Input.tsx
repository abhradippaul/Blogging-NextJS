import React, { useId } from "react";

interface Data {
  [key: string]: any;
}

type PropsValue = {
  inputClass: string;
  name: string;
  data: Data;
  setData: React.Dispatch<React.SetStateAction<object>>;
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
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setData((prev) => ({ ...prev, [name]: e.target.value }));
    };
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
          value={data[name]}
          onChange={handleOnChange}
          required={required}
          readOnly={readonly}
          className={inputClass}
        />
      </div>
    );
  }
);

export default Input;
