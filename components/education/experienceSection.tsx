import React from "react";
import { TextAnimate } from "../ui/text-animate";
import TabList from "./tabList";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";
import Link from "next/link";

const ExperienceSection = () => {
  return (
    <div id="educacao" className="flex flex-col gap-10">
      <div>
        <TextAnimate className="text-pink-400 font-semibold text-4xl ml-4 lg:ml-0">
          Educação & Experiência
        </TextAnimate>
      </div>
      <TabList />
      <Link
        href="./curriculo-larissa-akemi.pdf"
        target="_blank"
        download
        className="m-auto border-2 border-pink-500 rounded-full text-pink-500 font-bold p-3 hover:bg-blue-950"
      >
        CV Dowload
      </Link>
    </div>
  );
};

export default ExperienceSection;
