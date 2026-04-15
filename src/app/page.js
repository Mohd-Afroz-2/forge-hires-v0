import StatsSection from "@/components/custom/StatsSection";
import PartnershipSection from "@/components/custom/PartnershipSection";
import Hero from "@/components/custom/Hero";
import TrustedBy from "@/components/custom/TrustedBy";
import Partnerships from "@/components/custom/Partnerships";
import ClientExperience from "@/components/custom/ClientExperience";
import MissionVision from "@/components/custom/MissionVision";

export default function Home() {

  return (
    <div className="w-full min-h-screen flex flex-col gap-12 bg-white text-black">
      <Hero  />
      <TrustedBy />
      <StatsSection />
      <PartnershipSection />
      <Partnerships />
      <ClientExperience />
      <MissionVision />
    </div>
  );
}
