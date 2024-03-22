import { SetStateAction, useId } from "react";

interface Data {
  [key: string]: any;
}

type PropsValue = {
  edit: boolean;
  data: Data;
  textareaClass: string;
  name: string;
  setData: React.Dispatch<SetStateAction<object>>;
};

function CustomTextarea({
  edit,
  data,
  textareaClass,
  name,
  setData,
}: PropsValue) {
  const id = useId();
  return (
    <div>
      <textarea
        id={id}
        onChange={(e) => {
          setData((prev) => ({
            ...prev,
            [name]: e.target.value,
          }));
        }}
        readOnly={!edit}
        className={textareaClass}
        value={data[name]}
      />
    </div>
  );
}

export default CustomTextarea;
