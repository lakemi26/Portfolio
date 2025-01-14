import WordRotate from "../ui/word-rotate";
import MagicText from "../Text/magicText";
import ShineBorder from "../ui/shine-border";
import Icons from "./icons";

const Banner = () => {
  return (
    <div className="flex gap-32 justify-center items-center mt-14">
      <div className="flex w-1/4 flex-col">
        <div className="flex flex-col gap-2">
          <p className="text-pink-400  text-4xl font-bold">Hello World, I'm</p>
          <MagicText text="Larissa Akemi" duration={250} />
          <WordRotate
            duration={2800}
            className="text-2xl font-semibold text-pink-200"
            words={["Software Engineer", "Full-Stack Developer"]}
          />
        </div>
        <div>
          <Icons />
        </div>
      </div>
      <div>
        <ShineBorder
          borderRadius={200}
          className="rounded-full p-0"
          color={["#A07CFE", "#FE8FB5", "#fb6f92", "#ff99c8"]}
          borderWidth={5}
        >
          <img
            src={"/avatar.jpeg"}
            alt="arte digital"
            className="rounded-full aspect-square object-cover w-96 "
          />
        </ShineBorder>
      </div>
    </div>
  );
};

export default Banner;
