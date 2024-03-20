import React from "react";

function CustomFileUpload() {
  return (
    <div className="group-hover:flex hidden absolute right-0 bottom-[0] bg-white rounded-full w-12 h-12 items-center justify-center">
      <label htmlFor="fileupload">
        <i className="fa-solid fa-camera text-4xl cursor-pointer text-black hover:text-gray-800"></i>
      </label>
      <input type="file" id="fileupload" className="" hidden />
    </div>
  );
}

export default CustomFileUpload;
