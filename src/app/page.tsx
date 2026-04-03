import dynamic from "next/dynamic";
import Header from "@/components/Header";
import HeroImage from "@/components/HeroImage";
import TrustBar from "@/components/TrustBar";
import AuthorityIntro from "@/components/AuthorityIntro";
import ServicesGrid from "@/components/ServicesGrid";
import QualityStandard from "@/components/QualityStandard";
import ProcessTimeline from "@/components/ProcessTimeline";
import LocalKnowledge from "@/components/LocalKnowledge";
import Footer from "@/components/Footer";
import MobileCallButton from "@/components/MobileCallButton";

const FAQ = dynamic(() => import("@/components/FAQ"));
const ContactCTA = dynamic(() => import("@/components/ContactCTA"));

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroImage />
        <TrustBar />
        <AuthorityIntro />
        <ServicesGrid />
        <QualityStandard />
        <ProcessTimeline />
        <LocalKnowledge />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
      <MobileCallButton />
    </>
  );
}
