import AboutUs from "@/components/about-us";
import Features from "@/components/features";
import FullScreenHero from "@/components/full-screen-hero";
import { PremiumPricing } from "@/components/payment";

export default function Home() {
  return (
    <>
      <FullScreenHero />
      <Features />
      <AboutUs />
      <PremiumPricing />
    </>
  );
}
