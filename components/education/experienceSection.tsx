import React from "react";
import { TextAnimate } from "../ui/text-animate";
import TabList from "./tabList";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";

const ExperienceSection = () => {
  return (
    <div id="educacao" className="flex flex-col gap-10">
      <div>
        <TextAnimate className="text-pink-400 font-semibold text-4xl ml-4 lg:ml-0">
          Educação & Experiência
        </TextAnimate>
      </div>
      <TabList />
      <InteractiveHoverButton className="m-auto">
        CV Download
      </InteractiveHoverButton>
    </div>
  );
};

export default ExperienceSection;
