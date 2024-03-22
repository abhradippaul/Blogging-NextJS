import React from "react";

type PropsValue = {
    edit : boolean;
    setEdit : (prev : boolean) => void
}

function CustomConfirm({setEdit,edit} : PropsValue) {
  return (
    <div id="comment-btn" className="flex justify-end my-2">
      <button
        className="border border-red-500 px-2 py-1 mx-2 rounded-md hover:bg-red-500 hover:text-white"
        onClick={() => {
          setEdit(!edit);
        }}
      >
        Cancel
      </button>
      <button className="border border-green-500 px-2 py-1 mx-2 rounded-md hover:bg-green-500 hover:text-white">
        Save
      </button>
    </div>
  );
}

export default CustomConfirm;
