import { SetStateAction } from "react";
type PropsValue = {
  children: string;
  className?: string;
  setEdit?: React.Dispatch<SetStateAction<boolean>> | null;
};
function SubmitButton({ children, className = "", setEdit }: PropsValue) {
  if (setEdit) {
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
  } else {
    return <button className={className}>{children}</button>;
  }
}

export default SubmitButton;
