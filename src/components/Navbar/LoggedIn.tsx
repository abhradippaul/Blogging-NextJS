import Link from "next/link";
import SubmitButton from "../FormElement/SubmitButton";
import Image from "next/image";

type PropsValue = {
  isLoggedIn: boolean | undefined;
  user: any;
};

// const image = process.env.NEXT_PUBLIC_DEV_IMAGE_URL;
const image = null;
const imageUrl = process.env.NEXT_PUBLIC_IMAGE_URL;

function LoggedIn({ isLoggedIn, user }: PropsValue) {
  const className =
    "border-2 text-xl border-green-500 px-4 py-1  rounded-md hover:bg-green-500 hover:text-white sm:text-2xl";
  if (isLoggedIn) {
    return (
      <div className="flex items-center justify-between w-32">
        <Link href="/blog/post" about="Add Post">
          <i className="fa-solid fa-circle-plus text-2xl cursor-pointer"></i>
        </Link>
        <Link href={`/user/${user.userName}`}>
          <div className="w-12 h-12 overflow-hidden rounded-full relative">
            <Image
              className="object-cover"
              src={image || imageUrl + "" + user.featuredImage.public_id}
              sizes="full"
              fill={true}
              alt="User image"
            />
          </div>
        </Link>
      </div>
    );
  } else {
    return (
      <Link href="/signin">
        <SubmitButton children="Sign In" className={className} />
      </Link>
    );
  }
}

export default LoggedIn;
