import HeroSection from "@/app/components/home/HeroSection";
import ServicesOverview from "@/app/components/home/ServicesOverview";
import TrackingInterface from "@/app/components/home/TrackingInterface";
import QuoteCalculator from "@/app/components/home/QuoteCalculator";
import Statistics from "@/app/components/home/Statistics";
import Testimonials from "@/app/components/home/Testimonials";
import ClientLogos from "@/app/components/home/ClientLogos";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      <HeroSection />
      <ServicesOverview />
      <TrackingInterface />
      <QuoteCalculator />
      <Statistics />
      <Testimonials />
      <ClientLogos />
    </div>
  );
}
