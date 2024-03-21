export const submitButtonClass =
  "bg-green-500 text-white py-1 rounded-md  mx-auto hover:bg-green-600 text-lg w-1/2 sm:text-xl";

export const inputOuterClass = "flex items-center justify-between my-2";
export const inputLabelClass = "text-base sm:text-lg";
export const inputClass =
  "border-none outline-none rounded-sm w-[60%] p-1 text-base sm:text-lg";

export const SignUpForm = [
  {
    label: "Full Name : ",
    name: "fullName",
  },
  {
    label: "User Name : ",
    name: "userName",
  },
  {
    label: "Email : ",
    type: "email",
    name: "email",
  },
  {
    label: "Password : ",
    type: "password",
    name: "password",
  },
];

export const signInForm = [
  {
    label: "Email : ",
    type: "email",
    name: "email"
  },
  {
    label: "Password : ",
    type: "password",
    name: "password"
  },
];
