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
    <div id="portfolio" className="text-pink-400 font-semibold text-4xl">
      <TextAnimate className="ml-4 lg:ml-0">Meu Portfólio</TextAnimate>
      <div className="m-auto w-full lg:w-fit mt-9">
        <Tabs defaultValue={WorkTypes.FullStack} className="lg:w-full">
          <TabsList className="justify-around m-auto flex w-fit">
            <TabsTrigger
              className="data-[state=active]:bg-pink-400/30"
              value={WorkTypes.FullStack}
            >
              Full-Stack
            </TabsTrigger>

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
          </TabsList>
          {/* Conteúdo Front-end */}
          <TabsContent
            value={WorkTypes.FullStack}
            className="lg:w-[992px] flex mt-4"
          >
            <div className="flex gap-5 w-full px-20 lg:px-0 ">
              <Carousel className="w-full">
                <CarouselContent>
                  <CarouselItem className=" md:basis-1/2 lg:basis-1/3 ">
                    <Card
                      image="/clinsp-mockup.png"
                      title="ClinSP"
                      text="Site com área administrativa para cadastro de pets, desenvolvido em Next.js, TypeScript, Tailwind e Firebase, trazendo mais visibilidade e organização ao processo de adoção."
                      codeUrl="https://github.com/lakemi26/clinsp"
                      deployUrl="https://www.clinspvet.com"
                    />
                  </CarouselItem>
                  <CarouselItem className=" md:basis-1/2 lg:basis-1/3">
                    <Card
                      image=""
                      title="Snippetopoia"
                      text="Plataforma interativa para reunir e compartilhar recursos de programação, criada com Next.js, TypeScript e Tailwind, com foco em gamificação e colaboração entre desenvolvedores."
                      codeUrl="https://github.com/lakemi26/Snippetopia"
                      deployUrl="https://www.snippetopia.com"
                    />
                  </CarouselItem>
                  <CarouselItem className=" md:basis-1/2 lg:basis-1/3">
                    <Card
                      image="/greenfund-mockup.png"
                      title="GreenFund"
                      text="Aplicativo em React Native e Firebase para apoiar projetos de energia sustentável por meio de microdoações."
                      codeUrl="https://github.com/lakemi26/greenfund"
                      deployUrl="https://www.youtube.com/watch?v=T34a5Xrc0Bw"
                    />
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
