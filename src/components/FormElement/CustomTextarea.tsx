"use client"
import { SetStateAction, useEffect } from "react";

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
  useEffect(() => {
    // console.log(id)
    const targetarea = document.getElementById(`${id}`)
    if(targetarea && data && !edit) {
      // console.log(targetarea)
      targetarea.style.height = "auto";
      targetarea.style.height = `${targetarea.scrollHeight}px`;
    }

  },[data,edit])
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
