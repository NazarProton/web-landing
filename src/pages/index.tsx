import Layout from "@/layouts";
import BridgingTheGapSection from "@/widget/home/bridgingTheGap";
import BuildingWithEaseSection from "@/widget/home/buildingWithEase";
import CommunityOwnedSection from "@/widget/home/communityOwnedSection";
import PartnerSection from "@/widget/home/partner";
import TokenomicsSection from "@/widget/home/tokenomics";
import WhyFortuna from "@/widget/home/why-fortuna";
import React from "react";

export default function index() {
  return (
    <Layout>
      <WhyFortuna />
      <BuildingWithEaseSection />
      <BridgingTheGapSection />
      <CommunityOwnedSection />
      <TokenomicsSection />

      <PartnerSection />
    </Layout>
  );
}
