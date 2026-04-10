import TopbarHeader from "@/components/ui/topbarHeader";
import HeroSection from "@/components/ui/heroSection";
import FeatureCards from "@/components/ui/featureCards";
import BenefitsList from "@/components/ui/benefitsList";
import TopbarFooter from "@/components/ui/topbarFooter";

export default function Home() {
  return (
    <>
      <TopbarHeader />
      <HeroSection/>
      <FeatureCards/>
      <BenefitsList/>
      <TopbarFooter/>
    </>
  );
}
