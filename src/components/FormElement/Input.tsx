import React, { useId } from "react";

type PropsValue = {
  inputClass: string;
  name: string;
  data: object;
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
          // value={data}
          onChange={(e) => {
            setData({
              ...data,
              [name]: e.target.value,
            });
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
