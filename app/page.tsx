import { Hero } from "@/components/sections/Hero";
import { FeaturesBar } from "@/components/sections/FeaturesBar";
import { Services } from "@/components/sections/Services"; // TrustBar is now inside Services
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesBar />
      <Services />
      <CTASection />
    </>
  );
}
