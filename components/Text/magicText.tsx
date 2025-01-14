"use client";
import React, { useEffect, useState } from "react";
import SparklesText from "../ui/sparkles-text";
import TypingAnimation from "../ui/typing-animation";

interface Props {
  duration: number;
  text: string;
}

const MagicText = ({ duration, text }: Props) => {
  const [typing, setTyping] = useState(true);
  useEffect(() => {
    const totalDuration = (text.length + 1) * duration;
    const timer = setTimeout(() => {
      setTyping(false);
    }, totalDuration);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <>
      {typing ? (
        <TypingAnimation
          duration={duration}
          className="text-6xl font-black tracking-normal"
        >
          {text}
        </TypingAnimation>
      ) : (
        <SparklesText text={text} />
      )}
    </>
  );
};

export default MagicText;
