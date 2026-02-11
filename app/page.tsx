import { Hero } from "@/components/sections/Hero";
import { FeaturesBar } from "@/components/sections/FeaturesBar";
import { NationwideOTR } from "@/components/sections/NationwideOTR";
import { ReliabilityStats } from "@/components/sections/ReliabilityStats";
import { SafetySection } from "@/components/sections/SafetySection";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesBar />
      <NationwideOTR />
      <ReliabilityStats />
      <SafetySection />
      <CTASection />
    </>
  );
}
