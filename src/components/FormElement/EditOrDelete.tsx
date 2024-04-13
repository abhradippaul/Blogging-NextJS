import { SetStateAction } from "react";
import SubmitButton from "./SubmitButton";
import { updateBlog } from "@/utils/ConnectApi";

type PropsValue = {
  // setEdit: React.Dispatch<SetStateAction<boolean>>;
  functionality2: React.Dispatch<SetStateAction<boolean>> | Function
  functionality1: React.Dispatch<SetStateAction<boolean>> | Function
  className?: string;
  outerClassName?: string;
  children1? : string
  children2? : string
};

function EditOrDelete({ className, children1,children2,functionality1,functionality2 }: PropsValue) {
  return (
    <div className="flex items-center">
      <SubmitButton
        children={children1 || "Edit"}
        functionality={functionality1}
        // setEdit={setEdit}
        className={`border-2 mx-2 border-green-500 px-4 py-1 rounded-md hover:bg-green-500 hover:text-white ${className}`}
      />
      <SubmitButton
        children={children2 || "Delete"}
        functionality={functionality2}
        className={`border-2 mx-2 border-red-500 px-4 py-1  rounded-md hover:bg-red-500 hover:text-white ${className}`}
      />
    </div>
  );
}

export default EditOrDelete;
