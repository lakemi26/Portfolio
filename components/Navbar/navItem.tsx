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
        className="text-2xl text-pinkzinho hover:text-pink-500 transition duration-300 ease-in-out relative group"
        href={props.url}
      >
        {props.label}
        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-pink-500 transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
      </Link>
    </li>
  );
};

export default NavItem;
