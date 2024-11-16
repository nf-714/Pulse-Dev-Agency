import AboutUs from "@/components/about-us";
import ContactSectionComponent from "@/components/contact-section";
import Features from "@/components/features";
import Footer from "@/components/footer";
import FullScreenHero from "@/components/full-screen-hero";
import { PremiumPricing } from "@/components/payment";
import WhyUs from "@/components/why-us";

export default function Home() {
  return (
    <>
      <FullScreenHero />
      <Features />
      <WhyUs />
      <AboutUs />
      <PremiumPricing />
      <ContactSectionComponent />
      <Footer />
    </>
  );
}
