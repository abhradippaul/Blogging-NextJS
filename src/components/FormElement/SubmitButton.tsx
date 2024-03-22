import { SetStateAction } from "react";
type PropsValue = {
  children: string;
  className?: string;
  setEdit: React.Dispatch<SetStateAction<boolean>>;
};
function SubmitButton({ children, className = "", setEdit }: PropsValue) {
  return (
    <button
      onClick={() => {
        setEdit((prev) => !prev);
      }}
      className={className}
    >
      {children}
    </button>
  );
}

export default SubmitButton;
