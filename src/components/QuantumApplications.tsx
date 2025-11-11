import { Card } from "@/components/ui/card";
import { Boxes, RotateCcw, Flame, Shield } from "lucide-react";

const applications = [
  {
    icon: Boxes,
    title: "Quantum Advantage",
    description: "Quantum computational superiority traces directly to recovery capacity optimization",
  },
  {
    icon: RotateCcw,
    title: "Reversible Computing",
    description: "Preservation of imaginary components enables perfect computational reversibility",
  },
  {
    icon: Flame,
    title: "Landauer's Principle",
    description: "Quantifies the thermodynamic cost of destroying recovery information",
  },
  {
    icon: Shield,
    title: "Error Correction",
    description: "Quantum error correction codes as recovery capacity optimization",
  },
];

export const QuantumApplications = () => {
  return (
    <section id="applications" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Quantum Computing <span className="quantum-gradient bg-clip-text text-transparent">Applications</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Practical implications for quantum computation and information processing
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {applications.map((app, index) => {
              const Icon = app.icon;
              return (
                <Card
                  key={index}
                  className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 smooth-transition hover:shadow-xl group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg quantum-gradient flex items-center justify-center flex-shrink-0 group-hover:scale-110 smooth-transition">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary smooth-transition">
                        {app.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {app.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm border-primary/30">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-center recovery-gradient bg-clip-text text-transparent">
                The Answer to Physics' Central Question
              </h3>
              <p className="text-center text-lg text-foreground/90 leading-relaxed max-w-4xl mx-auto">
                This work answers quantum mechanics' central question—"Why complex numbers?"—while simultaneously 
                illuminating computation, consciousness, causation, and the structure of reality itself. Complex 
                amplitudes encode computational redemption: the universe's own error correction code ensuring 
                nothing is truly lost, only transformed.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
