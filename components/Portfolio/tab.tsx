"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { TextAnimate } from "../ui/text-animate";
import { MagicCard } from "../ui/magic-card";
import Card from "./card";

const enum WorkTypes {
  FrontEnd = "Front-End",
  BackEnd = "Back-end",
  FullStack = "Full-Stack",
}

const Tab = () => {
  return (
    <div className="text-pink-400 font-semibold text-4xl">
      <TextAnimate>My Portfolio</TextAnimate>
      <div className="m-auto w-fit mt-9">
        <Tabs defaultValue={WorkTypes.FrontEnd} className="w-full">
          <TabsList className="justify-around m-auto flex w-fit">
            <TabsTrigger
              className="data-[state=active]:bg-pink-400/30"
              value={WorkTypes.FrontEnd}
            >
              Front-End
            </TabsTrigger>
            <TabsTrigger
              className="data-[state=active]:bg-pink-400/30"
              value={WorkTypes.BackEnd}
            >
              Back-End
            </TabsTrigger>
            <TabsTrigger
              className="data-[state=active]:bg-pink-400/30"
              value={WorkTypes.FullStack}
            >
              Full-Stack
            </TabsTrigger>
          </TabsList>
          {/* Conteúdo Front-end */}
          <TabsContent
            value={WorkTypes.FrontEnd}
            className="lg:w-[992px] flex mt-4"
          >
            <div className="flex gap-5">
              <Card
                image="/placeholder.jpg"
                title="Estética Ouro"
                text="um texto qualquer"
                codeUrl="/"
                deployUrl="/"
              />
              <Card title="Flower Shop" codeUrl="/" deployUrl="/" />
              <Card title="Happy Tails" codeUrl="/" deployUrl="/" />
              <Card title="Frangolandia" codeUrl="/" deployUrl="/" />
            </div>
          </TabsContent>
          {/* Conteúdo Back-end */}
          <TabsContent value={WorkTypes.BackEnd}></TabsContent>
          {/* Conteúdo Fullstack */}
          <TabsContent value={WorkTypes.FullStack}></TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Tab;
