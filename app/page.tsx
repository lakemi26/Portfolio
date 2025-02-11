import AboutSection from "@/components/about/aboutSection";
import Banner from "@/components/Banner/banner";
import Contact from "@/components/contact/contact";
import ExperienceSection from "@/components/education/experienceSection";
import Tab from "@/components/Portfolio/tab";

export default function Home() {
  return (
    <div className=" lg:max-w-[992px] m-auto flex flex-col gap-12">
      <Banner />
      <Tab />
      <AboutSection />
      <ExperienceSection />
      <Contact />
    </div>
  );
}
