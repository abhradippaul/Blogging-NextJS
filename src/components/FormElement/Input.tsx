import React, { useId } from "react";

type PropsValue = {
  label: string;
  type: string;
  inputClass: string;
  labelClass: string;
  outsideDivClass: string;
};
const Input = React.forwardRef(
  (
    {
      label,
      type = "text",
      inputClass = "",
      labelClass = "",
      outsideDivClass = "",
      ...props
    }: PropsValue,
    ref
  ) => {
    const id = useId();
    console.log(props)
    return (
      <div className="flex items-center justify-between my-2">
        <label htmlFor={id} className="text-base sm:text-lg">
          {label}
        </label>
        <input
          type={type}
          id={id}
          onChange={(e) => {}}
          className="border-none outline-none rounded-sm w-[60%] p-1 text-base sm:text-lg"
        />
      </div>
    );
  }
);

export default Input;
