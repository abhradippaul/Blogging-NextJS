import { SetStateAction } from "react";
import SubmitButton from "./SubmitButton";
import { updateBlog } from "@/utils/ConnectApi";

type PropsValue = {
  setEdit: React.Dispatch<SetStateAction<boolean>>;
  functionality: () => void;
  className?: string;
  outerClassName?: string;
};

function EditOrDelete({ setEdit, functionality, className, outerClassName }: PropsValue) {
  return (
    <div className="flex items-center">
      <SubmitButton
        children="Edit"
        setEdit={setEdit}
        className={`border-2 mx-2 border-green-500 px-4 py-1 rounded-md hover:bg-green-500 hover:text-white ${className}`}
      />
      <SubmitButton
        children="Delete"
        functionality={functionality}
        className={`border-2 mx-2 border-red-500 px-4 py-1  rounded-md hover:bg-red-500 hover:text-white ${className}`}
      />
    </div>
  );
}

export default EditOrDelete;
