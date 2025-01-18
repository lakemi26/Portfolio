import React from "react";
import { MagicCard } from "../ui/magic-card";
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
    <div>
      <MagicCard className="p-4">
        <div className="space-y-2">
          <div className="rounded-md overflow-hidden">
            <Image
              src={!!image ? image : "/placeholder.jpg"}
              alt="alguma coisa"
              width={200}
              height={150}
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
      </MagicCard>
    </div>
  );
};

export default Card;
