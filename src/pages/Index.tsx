import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { KeyInnovation } from "@/components/KeyInnovation";
import { TheoryScope } from "@/components/TheoryScope";
import { QuantumApplications } from "@/components/QuantumApplications";
import { Collaboration } from "@/components/Collaboration";
import { PhilosophyGrid } from "@/components/PhilosophyGrid";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main id="home">
        <Hero />
        <KeyInnovation />
        <TheoryScope />
        <QuantumApplications />
        <Collaboration />
        <PhilosophyGrid />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
