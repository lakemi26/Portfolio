import Link from "next/link";
import React from "react";

export interface NavItemInterface {
  url: string;
  label: string;
}

const NavItem = (props: NavItemInterface) => {
  return (
    <li>
      <Link
        className="text-2xl dark:text-pink-400 text-sky-900  relative group"
        href={props.url}
      >
        {props.label}
        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-sky-500 to-pink-300 dark:bg-gradient-to-r dark:from-pink-600 dark:to-pink-300 transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
      </Link>
    </li>
  );
};

export default NavItem;
