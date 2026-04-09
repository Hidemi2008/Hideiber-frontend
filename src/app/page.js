import TopbarHeader from "@/components/ui/topbarHeader";
import HeroSection from "@/components/ui/heroSection";
import FeatureCards from "@/components/ui/featureCards";
import BenefitsList from "@/components/ui/benefitsList";

export default function Home() {
  return (
    <>
      <TopbarHeader />
      <HeroSection/>
      <FeatureCards/>
      <BenefitsList/>
    </>
  );
}
