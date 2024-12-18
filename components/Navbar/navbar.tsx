"use client";
import { useState } from "react";
import NavItem, { NavItemInterface } from "./navItem";
import { Divide as Hamburger } from "hamburger-react";

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const items: NavItemInterface[] = [
    {
      url: "/portfolio",
      label: "Portfólio",
    },
    {
      url: "/about",
      label: "Sobre",
    },
    {
      url: "/blog",
      label: "Blog",
    },
    {
      url: "/education",
      label: "Educação",
    },
    {
      url: "/contact",
      label: "Contato",
    },
  ];
  return (
    <nav className="flex relative justify-center h-32 items-center mx-auto">
      <div className="lg:hidden absolute top-[50%] z-10 left-11">
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          size={50}
          color="#ec4899"
          duration={0.8}
        />
      </div>
      <div
        className={`flex items-center absolute left-11 top-[110%] lg:hidden ${
          isOpen ? "visible" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-12 ">
          {items.map((item, index) => (
            <NavItem key={index} url={item.url} label={item.label} />
          ))}
        </ul>
      </div>

      <div className="items-center hidden lg:flex ">
        <ul className="flex items-center gap-12 ">
          {items.map((item, index) => (
            <NavItem key={index} url={item.url} label={item.label} />
          ))}
        </ul>
      </div>
    </nav>
  );
};