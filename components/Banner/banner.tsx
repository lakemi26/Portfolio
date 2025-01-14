import TypingAnimation from "../ui/typing-animation";
import WordRotate from "../ui/word-rotate";
import MagicText from "../Text/magicText";

const Banner = () => {
  return (
    <div>
      <div>
        <div>
          <p className="dark:text-pink-400 text-sky-800 text-4xl font-bold">
            Hello World, I'm
          </p>
          <MagicText text="Larissa Akemi" duration={250} />
          <WordRotate
            duration={2800}
            className="text-2xl font-semibold text-pink-200"
            words={["Software Engineer", "Full-Stack Developer"]}
          />
        </div>
        <div>icones</div>
      </div>
      <div>arte</div>
    </div>
  );
};

export default Banner;
