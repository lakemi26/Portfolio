import React from "react";
import { TextAnimate } from "../ui/text-animate";
import TextAbout from "./textAbout";
import Skils from "./skils";
import DaysOfCode from "./daysOfCode";

const AboutSection = () => {
  return (
    <div id="sobre" className="ml-4 lg:ml-0">
      <TextAnimate className="text-pink-400 font-semibold text-4xl">
        Sobre mim
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
