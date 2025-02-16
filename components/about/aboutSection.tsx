import React from "react";
import { TextAnimate } from "../ui/text-animate";
import TextAbout from "./textAbout";
import Skils from "./skils";
import DaysOfCode from "./daysOfCode";

const AboutSection = () => {
  return (
    <div id="sobre" className="">
      <TextAnimate className="text-pink-400 font-semibold text-4xl">
        About Me
      </TextAnimate>
      <div className="flex gap-8 mt-9">
        <div className="flex flex-col gap-10">
          <div>
            <TextAbout />
          </div>
          <div></div>
        </div>
        <div className="hidden md:block">
          <Skils />
        </div>
      </div>

      <DaysOfCode />
    </div>
  );
};

export default AboutSection;
