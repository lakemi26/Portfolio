import Github from "../Icons/github";
import React from "react";
import Linkedin from "../Icons/linkedin";
import Instagram from "../Icons/instagram";
import Youtube from "../Icons/youtube";

const Icons = () => {
  return (
    <div className="flex gap-8 mt-5 ">
      <a
        href="#"
        className="aspect-square w-14 block fill-pink-400 hover:fill-pink-600 transition-all duration-150 ease-linear"
      >
        <Github />
      </a>
      <a
        href="#"
        className="aspect-square w-14 block fill-pink-400 hover:fill-pink-600 transition-all duration-150 ease-linear"
      >
        <Linkedin />
      </a>
      <a
        href="#"
        className="aspect-square w-14 block fill-pink-400 hover:fill-pink-600 transition-all duration-150 ease-linear"
      >
        <Instagram />
      </a>
      <a
        href="#"
        className="aspect-square w-14 block fill-pink-400 hover:fill-pink-600 transition-all duration-150 ease-linear"
      >
        <Youtube />
      </a>
    </div>
  );
};

export default Icons;
