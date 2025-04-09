import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@radix-ui/react-hover-card";

const enum SectionTypes {
  Certifications = "Certifications",
  Experience = "Experience",
}

const TabList = () => {
  return (
    <div className="m-auto w-fit">
      <Tabs defaultValue={SectionTypes.Certifications} className="w-full">
        <TabsList className="justify-around m-auto flex w-fit lg:mb-6">
          <TabsTrigger
            className="data-[state=active]:bg-pink-400/30"
            value={SectionTypes.Certifications}
          >
            Certifications
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-pink-400/30"
            value={SectionTypes.Experience}
          >
            Experience
          </TabsTrigger>
        </TabsList>
        {/* Certifications */}
        <TabsContent
          value={SectionTypes.Certifications}
          className="flex flex-col lg:flex-row lg:gap-44"
        >
          <div className="flex flex-col gap-3">
            <p className="font-bold text-pink-500 text-xl">Graduations</p>
            <HoverCard>
              <HoverCardTrigger>
                Análise e desenvolvimento de Sistemas
              </HoverCardTrigger>
              <HoverCardContent className="bg-slate-900 p-1">
                <p>FIAP</p>
                <p>2023-2024</p>
              </HoverCardContent>
            </HoverCard>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-bold text-pink-500 text-xl">Certifications</p>
            <HoverCard>
              <HoverCardTrigger className="z-10">
                Python - FIAP
              </HoverCardTrigger>
              <HoverCardContent>
                <img
                  src={"python.png"}
                  alt="Certificado Python"
                  className="w-[400px]"
                />
              </HoverCardContent>
            </HoverCard>
            <HoverCard>
              <HoverCardTrigger className="z-10">
                Java Fundamentos - FIAP
              </HoverCardTrigger>
              <HoverCardContent>
                <img
                  src={"javaFundamentos.png"}
                  alt="Certificado Java"
                  className="w-[400px]"
                />
              </HoverCardContent>
            </HoverCard>
            <HoverCard>
              <HoverCardTrigger className="z-10">
                Gestão de Projetos - FIAP
              </HoverCardTrigger>
              <HoverCardContent>
                <img
                  src={"gestaoProjetos.png"}
                  alt="Certificado Gestão de projetos"
                  className="w-[400px]"
                />
              </HoverCardContent>
            </HoverCard>
            <HoverCard>
              <HoverCardTrigger>Engenharia de Software - FIAP</HoverCardTrigger>
              <HoverCardContent className="z-10">
                <img
                  src={"engenhariaSoftware.png"}
                  alt="Certificado Engenharia de Software"
                  className="w-[400px]"
                />
              </HoverCardContent>
            </HoverCard>
            <HoverCard>
              <HoverCardTrigger>Git e GitHub - ALURA</HoverCardTrigger>
              <HoverCardContent className="z-10">
                <img
                  src={"git1.jpg"}
                  alt="Certificado Git e GitHub"
                  className="w-[350px]"
                />
                <img
                  src={"git2.jpg"}
                  alt="Certificado Git e GitHub"
                  className="w-[350px]"
                />
              </HoverCardContent>
            </HoverCard>
          </div>
        </TabsContent>
        {/*Experience */}
        <TabsContent value={SectionTypes.Experience}>Freelancer</TabsContent>
      </Tabs>
    </div>
  );
};

export default TabList;
