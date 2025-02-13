import React from "react";
import { IconCloud } from "../ui/icon-cloud";
const images = [
  "/android.png",
  "/azure.png",
  "/aws.png",
  "/css.png",
  "/database.png",
  "/docker.png",
  "/git.png",
  "/github.png",
  "/html.png",
  "/java.png",
  "/js.png",
  "/oracle.png",
  "/pythonicon.png",
  "/react.png",
  "/typescript.png",
  "/vscode.png",
];

const Skils = () => {
  return (
    <div className="flex  w-[400px] items-center justify-center overflow-hidden rounded-lg bg-background">
      <IconCloud images={images} />
    </div>
  );
};

export default Skils;
