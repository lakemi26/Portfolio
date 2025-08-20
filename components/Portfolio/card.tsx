import React from "react";
import { useTheme } from "next-themes";
import Buttons from "./buttons";
import CardTitle from "./title";
import Image from "next/image";

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
    <div className="bg-background border border-pink-400 p-3 rounded-md h-[410px]">
      <div className="space-y-2 ">
        <div className="rounded-md overflow-hidden flex justify-center w-[290px] h-[190px]">
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
        <p className="text-sm font-semibold text-center flex justify-center h-[100px] text-pink-300">
          {text}
        </p>
        <div className="flex gap-4 justify-center mt-auto">
          <div>{deployUrl && <Buttons title="Site" url={deployUrl} />}</div>
          <div>{codeUrl && <Buttons title="Git" url={codeUrl} />}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
