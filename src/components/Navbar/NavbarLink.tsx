import { Divide } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

type PropsValue = {
  children: string;
  liClassName: string;
  hamburgerClick: () => void;
  link: string;
  imageSrc?: string;
};

// const image = process.env.NEXT_PUBLIC_DEV_IMAGE_URL;
const image = null;
const imageUrl = process.env.NEXT_PUBLIC_IMAGE_URL;

function NavbarLink({
  children,
  liClassName,
  link,
  hamburgerClick,
  imageSrc,
}: PropsValue) {
  const router = useRouter();
  return (
    <li
      className={liClassName}
      onClick={() => {
        router.push(link);
        hamburgerClick();
        if (children === "Logout") {
          localStorage.removeItem("isUserLoggedIn");
          localStorage.removeItem("token");
          window.location.reload();
        }
      }}
    >
      <Link href={link} className="flex w-full items-center justify-between">
        {imageSrc && (
          <div className="w-8 h-8 relative rounded-full overflow-hidden">
            <Image
              fill={true}
              sizes="full"
              src={image || imageUrl + "" + imageSrc}
              className="object-cover"
              alt="icon"
            />
          </div>
        )}
        {children && (
          <h1 className={imageSrc && "w-full text-center"}>{children}</h1>
        )}
      </Link>
    </li>
  );
}

export default NavbarLink;
