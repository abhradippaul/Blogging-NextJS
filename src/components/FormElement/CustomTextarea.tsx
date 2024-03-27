"use client"
import { SetStateAction } from "react";

interface Data {
  [key: string]: any;
}

type PropsValue = {
  edit: boolean;
  data: Data;
  textareaClass: string;
  name: string;
  setData: React.Dispatch<SetStateAction<any>>;
  id? : string;
};

function CustomTextarea({
  edit,
  data,
  textareaClass,
  name,
  setData,
  id
}: PropsValue) {
  // console.log(data)
  return (
    <div>
      <textarea
        id={id}
        onChange={(e) => {
          setData((prev:any) => ({
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
