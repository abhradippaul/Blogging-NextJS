import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

type PropsValue = {
  children: string;
  liClassName: string;
  hamburgerClick: () => void;
  link: string;
};

function NavbarLink({
  children,
  liClassName,
  link,
  hamburgerClick,
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
      <Link href={link}>
        {children}
      </Link>
    </li>
  );
}

export default NavbarLink;
