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
      {children}
    </button>
  );
}

export default SubmitButton;
