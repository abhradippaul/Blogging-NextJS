import Link from "next/link";
import SubmitButton from "../FormElement/SubmitButton";

type PropsValue = {
  isLoggedIn: boolean;
};

function LoggedIn({ isLoggedIn }: PropsValue) {
  if (isLoggedIn) {
    return (
      <div className="flex items-center justify-between w-32">
        <Link href="/blog/post">
          <i className="fa-solid fa-circle-plus text-2xl cursor-pointer"></i>
        </Link>
        <img
          className="w-12 h-12 object-cover rounded-full"
          src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8fDA%3D"
          alt=""
        />
      </div>
    );
  } else {
    return (
      <Link href="/signin">
        <SubmitButton
          children="Sign In"
          className="border-2 text-xl border-green-500 px-4 py-1  rounded-md hover:bg-green-500 hover:text-white sm:text-2xl"
        />
      </Link>
    );
  }
}

export default LoggedIn;
