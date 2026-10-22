import Hero from "@/components/sections/Hero";
import WhyUs from "@/components/sections/WhyUs";
import ServicesGrid from "@/components/sections/ServicesGrid";
import Benefits from "@/components/sections/Benefits";
import FAQ from "@/components/sections/FAQ";
import LatestPosts from "@/components/sections/LatestPosts";
import Verticals from "@/components/sections/Verticals";
import VideoStats from "@/components/sections/VideoStats";
import LogoStrip from "@/components/sections/LogoStrip";
import Testimonials from "@/components/sections/Testimonials";
import Supporters from "@/components/sections/Supporters";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoStrip/>
      
      <Benefits />
      
      <ServicesGrid />
      <WhyUs />
      <VideoStats/>
      <Verticals/>
      <Testimonials />
      <FAQ />
      <LatestPosts />
      <Supporters />

 
    </>
  );
}