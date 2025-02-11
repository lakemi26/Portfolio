"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { TextAnimate } from "../ui/text-animate";
import Card from "./card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const enum WorkTypes {
  FrontEnd = "Front-End",
  BackEnd = "Back-end",
  FullStack = "Full-Stack",
}

const Tab = () => {
  return (
    <div className="text-pink-400 font-semibold text-4xl">
      <TextAnimate>My Portfolio</TextAnimate>
      <div className="m-auto w-full lg:w-fit mt-9">
        <Tabs defaultValue={WorkTypes.FrontEnd} className="lg:w-full">
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
            <div className="flex gap-5 w-full px-20 lg:px-0 md:bg-pink-200 lg:bg-blue-300 xl:bg-purple-300">
              <Carousel className="w-full">
                <CarouselContent>
                  <CarouselItem className=" md:basis-1/2 lg:basis-1/3 ">
                    <Card
                      image="/placeholder.jpg"
                      title="Estética Ouro"
                      text=""
                      codeUrl="/"
                      deployUrl="/"
                    />
                  </CarouselItem>
                  <CarouselItem className=" md:basis-1/2 lg:basis-1/3">
                    <Card title="Flower Shop" codeUrl="/" deployUrl="/" />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <Card title="Happy Tails" codeUrl="/" deployUrl="/" />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <Card title="Frangolandia" codeUrl="/" deployUrl="/" />
                  </CarouselItem>
                  <CarouselItem className=" md:basis-1/2 lg:basis-1/3">
                    <Card title="Alguma Coisa" codeUrl="/" deployUrl="/" />
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
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
