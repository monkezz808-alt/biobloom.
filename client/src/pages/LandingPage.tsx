import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AIFeatures } from "@/components/AIFeatures";
import { Products } from "@/components/Products";
import { WhyChoose } from "@/components/WhyChoose";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <AIFeatures />
        <Products />
        <WhyChoose />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
