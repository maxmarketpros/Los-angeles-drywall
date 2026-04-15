import type { Metadata } from "next";
import { Suspense } from "react";
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

export const metadata: Metadata = {
  title: "Los Angeles Drywall & Framing | Licensed Drywall Contractor in Los Angeles, CA",
  description:
    "Los Angeles Drywall & Framing is a licensed drywall contractor serving Los Angeles, CA. Professional drywall installation, repair, finishing, texturing, framing, stucco, and exterior painting. CA License #1141917. Call (310) 730-9832.",
  alternates: {
    canonical: "https://losangelesdrywallandframing.com",
  },
};

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
        <Suspense fallback={<div className="py-24" />}>
          <FAQ />
        </Suspense>
        <Suspense fallback={<div className="py-24" />}>
          <ContactCTA />
        </Suspense>
      </main>
      <Footer />
      <MobileCallButton />
    </>
  );
}
