import React from "react";
import { TextAnimate } from "../ui/text-animate";
import TabList from "./tabList";

const ExperienceSection = () => {
  return (
    <div id="educacao" className="flex flex-col gap-10">
      <div>
        <TextAnimate className="text-pink-400 font-semibold text-4xl">
          Education & Experience
        </TextAnimate>
      </div>
      <TabList />
    </div>
  );
};

export default ExperienceSection;
