import Footer from "@/components/Footer";
import { GalleryShowcaseSection } from "@/components/GallaryShowcaseSection";
import { HomeHeroSection } from "@/components/HomeHeroSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import WallOfLoveSection from "@/components/WallOfLoveSection";

export default function Home() {
  return (
    <div>
      <HomeHeroSection />
      <GalleryShowcaseSection />
      <HowItWorksSection />
      <WallOfLoveSection />
      <Footer />
    </div>
  );
}
