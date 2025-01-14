import Link from "next/link";
import React from "react";

export interface NavItemInterface {
  url: string;
  label: string;
}

const NavItem = (props: NavItemInterface) => {
  return (
    <li>
      <Link className="text-2xl text-pink-400 relative group" href={props.url}>
        {props.label}
        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-pink-600 to-pink-300 transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
      </Link>
    </li>
  );
};

export default NavItem;
