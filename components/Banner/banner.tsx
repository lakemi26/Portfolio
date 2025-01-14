import WordRotate from "../ui/word-rotate";
import MagicText from "../Text/magicText";
import ShineBorder from "../ui/shine-border";
import Icons from "./icons";

const Banner = () => {
  return (
    <div className="flex flex-col mt-4 gap-11 lg:gap-32  lg:justify-center items-center lg:mt-14 lg:flex-row">
      <div className="flex lg:w-1/4 flex-col gap-6">
        <div className="flex flex-col gap-3 lg:gap-2 mt-5">
          <p className="text-pink-400  text-4xl font-bold ">Hello World, I'm</p>
          <MagicText text="Larissa Akemi" duration={250} />
          <WordRotate
            duration={2800}
            className="text-2xl font-semibold text-pink-200"
            words={["Software Engineer", "Full-Stack Developer"]}
          />
        </div>
        <div className="m-auto lg:m-0">
          <Icons />
        </div>
      </div>
      <div className="order-first grow-0  lg:order-last ">
        <ShineBorder
          borderRadius={200}
          className="rounded-full min-h-0 min-w-0 p-0 aspect-square"
          color={["#A07CFE", "#FE8FB5", "#fb6f92", "#ff99c8"]}
          borderWidth={5}
        >
          <img
            src={"/avatar.jpeg"}
            alt="arte digital"
            className="rounded-full aspect-square object-cover w-60 lg:w-96 "
          />
        </ShineBorder>
      </div>
    </div>
  );
};

export default Banner;
