"use client";
import { useTheme } from "next-themes";
import React from "react";
import GitHubCalendar from "react-github-calendar";

const themes = {
  light: ["#ffe6f0", "#ffb3c6", "#ff809f", "#ff4d79", "#ff1a53"],

  dark: [
    "rgba(22, 27, 34, 0.65)", // Translúcido do #161b22
    "rgba(255, 204, 213, 0.65)", // Translúcido do #ffccd5
    "rgba(255, 143, 163, 0.65)", // Translúcido do #ff8fa3
    "rgba(255, 117, 143, 0.65)", // Translúcido do #ff758f
    "rgba(201, 24, 74, 0.65)",
  ],
};

const DaysOfCode = () => {
  const { theme } = useTheme();
  const currentTheme = theme as "dark" | "light" | undefined;
  return (
    <div className="">
      <p className="lg:mb-4 text-pink-400 font-bold">Days of code</p>
      <GitHubCalendar
        theme={themes}
        colorScheme={!currentTheme ? "dark" : currentTheme}
        username="lakemi26"
      />
    </div>
  );
};

export default DaysOfCode;
