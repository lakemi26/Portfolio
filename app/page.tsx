import AboutSection from "@/components/about/aboutSection";
import Banner from "@/components/Banner/banner";
import ExperienceSection from "@/components/education/experienceSection";
import Tab from "@/components/Portfolio/tab";

export default function Home() {
  return (
    <div className="lg:px-[464px] flex flex-col gap-12">
      <Banner />
      <Tab />
      <AboutSection />
      <ExperienceSection />
    </div>
  );
}
