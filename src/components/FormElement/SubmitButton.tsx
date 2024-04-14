import { Loader2 } from "lucide-react";
import { SetStateAction } from "react";
type PropsValue = {
  children: string;
  className?: string;
  setEdit?: React.Dispatch<SetStateAction<boolean>> | null;
  functionality?: () => void | null;
};
function SubmitButton({
  children,
  className = "",
  setEdit,
  functionality,
}: PropsValue) {
  return (
    <button
      onClick={() => {
        if (setEdit) {
          setEdit((prev) => !prev);
        } else {
          if (functionality) {
            functionality();
          }
        }
      }}
      className={className}
    >
      {children ? children : <div className="flex items-center justify-center"><Loader2 className="animate-spin h-8 w-8" /></div>}
    </button>
  );
}

export default SubmitButton;
