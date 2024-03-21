type PropsValue = {
  children: string;
  className?: string;
};
function SubmitButton({ children, className = "" }: PropsValue) {
  return (
    <button
      className={className}
    >
      {children}
    </button>
  );
}

export default SubmitButton;
