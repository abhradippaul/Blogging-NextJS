import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

type PropsValue = {
  children: string;
  liClassName: string;
  hamburgerClick: () => void;
  link: string;
  imageSrc?:string
};

function NavbarLink({
  children,
  liClassName,
  link,
  hamburgerClick,
  imageSrc
}: PropsValue) {
  const router = useRouter();
  return (
    <li
      className={liClassName}
      onClick={() => {
        router.push(link);
        hamburgerClick();
      }}
    >
      <Link href={link} className="flex w-[70%] items-center justify-between">
        {imageSrc && <img src={`${imageSrc}`} className="w-8 h-8" />}
        {children}
      </Link>
    </li>
  );
}

export default NavbarLink;
