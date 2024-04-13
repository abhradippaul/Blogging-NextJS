import Link from "next/link";
import SubmitButton from "../FormElement/SubmitButton";



type PropsValue = {
  isLoggedIn: boolean | undefined;
  user : any;
};

function LoggedIn({ isLoggedIn,user }: PropsValue) {
  const className = "border-2 text-xl border-green-500 px-4 py-1  rounded-md hover:bg-green-500 hover:text-white sm:text-2xl"
  if (isLoggedIn) {

    return (
      <div className="flex items-center justify-between w-32">
        <Link href="/blog/post" about="Add Post">
          <i className="fa-solid fa-circle-plus text-2xl cursor-pointer"></i>
        </Link>
        <Link href={`/user/${user.userName}`}>
          <img
            className="w-12 h-12 object-cover rounded-full"
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8fDA%3D"
            alt="User image"
          />
        </Link>
        {/* <SubmitButton children="Logout" className={className}/> */}
      </div>
    );
  } else {
    return (
      <Link href="/signin">
        <SubmitButton
          children="Sign In"
          className={className}
        />
      </Link>
    );
  }
}

export default LoggedIn;
