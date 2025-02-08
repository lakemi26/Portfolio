import React from "react";
import { useTheme } from "next-themes";
import Buttons from "./buttons";
import CardTitle from "./title";
import Image from "next/image";
import ShineBorder from "../ui/shine-border";

interface CardProps {
  image?: string;
  title: string;
  text?: string;
  deployUrl?: string;
  codeUrl?: string;
}

const Card = ({ image, title, text, deployUrl, codeUrl }: CardProps) => {
  const { theme } = useTheme();
  return (
    <div className="bg-background border border-pink-400 p-3 rounded-md">
      <div className="space-y-2 ">
        <div className="rounded-md overflow-hidden flex justify-center">
          <Image
            src={!!image ? image : "/placeholder.jpg"}
            alt="alguma coisa"
            width={350}
            height={250}
          />
        </div>
        <div className="flex justify-center">
          <CardTitle title={title} />
        </div>
        <p className="text-sm flex justify-center">{text}</p>
        <div className="flex gap-4 justify-center">
          <div>{deployUrl && <Buttons title="Site" url={deployUrl} />}</div>
          <div>{codeUrl && <Buttons title="Git" url={codeUrl} />}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
