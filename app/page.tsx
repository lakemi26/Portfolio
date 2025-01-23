import AboutSection from "@/components/about/aboutSection";
import Banner from "@/components/Banner/banner";
import Card from "@/components/Portfolio/card";
import Tab from "@/components/Portfolio/tab";

export default function Home() {
  return (
    <div className="lg:px-[464px] flex flex-col gap-12">
      <Banner />
      <Tab />
      <AboutSection />
    </div>
  );
}
