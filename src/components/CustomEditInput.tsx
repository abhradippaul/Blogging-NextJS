
type PropsValue = {
    value : string
    edit : boolean
}

function CustomEditInput({value,edit}:PropsValue) {
  return (
    <input
      id="title-input"
      value={value}
      readOnly={!edit}
      className={`w-full py-2 text-xl font-bold my-4 ${
        !edit && "border-none"
      } border-2 rounded-md outline-none sm:text-3xl`}
    />
  );
}

export default CustomEditInput;
