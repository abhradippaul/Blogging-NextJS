import React, { Dispatch, SetStateAction } from "react";

type PropsValue = {
    setEdit : Dispatch<SetStateAction<boolean>>;
    onSave : () => void
}

function CustomConfirm({setEdit,onSave} : PropsValue) {
  return (
    <div id="comment-btn" className="flex justify-end my-2">
      <button
        className="border border-red-500 px-2 py-1 mx-2 rounded-md hover:bg-red-500 hover:text-white"
        onClick={() => {
          setEdit(prev => !prev);
        }}
      >
        Cancel
      </button>
      <button onClick={onSave} className="border border-green-500 px-2 py-1 mx-2 rounded-md hover:bg-green-500 hover:text-white">
        Save
      </button>
    </div>
  );
}

export default CustomConfirm;
