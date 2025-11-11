import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const innovations = [
  {
    title: "Four Recovery Guarantees",
    description: "Complex amplitudes provide perfect recoverability, error detection, complementary pathways, and reversibility",
  },
  {
    title: "Information Preservation",
    description: "The imaginary component isn't mathematical convenience—it's information preservation itself",
  },
  {
    title: "Classical to Quantum Bridge",
    description: "Classical branch predictors with accuracy 'a' naturally extend to quantum structure: a + bi where a² + b² = 1",
  },
  {
    title: "Recursive Recovery",
    description: "Consciousness requires recursive recovery capacity—the ability to maintain coherent information across meta-levels",
  },
];

export const KeyInnovation = () => {
  return (
    <section id="key-innovation" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold">
            The Central <span className="quantum-gradient bg-clip-text text-transparent">Breakthrough</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complex amplitudes aren't just mathematical tools—they encode the universe's fundamental error correction mechanism
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {innovations.map((innovation, index) => (
            <Card
              key={index}
              className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 smooth-transition hover:shadow-xl hover:glow-effect group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-8 h-8 text-accent group-hover:scale-110 smooth-transition" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary smooth-transition">
                    {innovation.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {innovation.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="inline-block p-8 bg-card/30 backdrop-blur-sm border-accent/30 glow-effect max-w-4xl">
            <div className="text-6xl lg:text-7xl font-bold mb-4 recovery-gradient bg-clip-text text-transparent">
              |a|² + |b|² = 1
            </div>
            <p className="text-xl text-foreground/90 italic">
              Nature's Commitment to Perfect Recoverability
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};
