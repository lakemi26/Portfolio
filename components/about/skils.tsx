import React from "react";
import { IconCloud } from "../ui/icon-cloud";

const slugs = [
  "java",
  "javascript",
  "typescript",
  "react",
  "html15",
  "css3",
  "vercel",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "firebase",
  "androidstudio",
  "figma",
  "firebase",
  "sql",
];

const Skils = () => {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );
  return (
    <div className="flex  w-[400px] items-center justify-center overflow-hidden rounded-lg border bg-background">
      <IconCloud images={images} />
    </div>
  );
};

export default Skils;
