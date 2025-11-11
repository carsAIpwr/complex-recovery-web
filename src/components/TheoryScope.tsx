import { Card } from "@/components/ui/card";
import { Cpu, Atom, GitBranch, Zap, Brain, Lightbulb } from "lucide-react";

const theoryParts = [
  {
    icon: Cpu,
    number: "01",
    title: "Computational Recovery",
    description: "From branch predictors to quantum amplitudes—the computational foundations of reality",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Atom,
    number: "02",
    title: "Quantum Foundations",
    description: "Why Schrödinger, Born rule, and Hermitian observables follow from recovery requirements",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: GitBranch,
    number: "03",
    title: "Classical-Quantum Bridge",
    description: "How classical computation extends seamlessly to quantum structure",
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    icon: Zap,
    number: "04",
    title: "Quantum Advantage",
    description: "Grover, Shor, and error correction as recovery optimization",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: Brain,
    number: "05",
    title: "Consciousness & Collaboration",
    description: "Awareness as recursive recovery; R_HA > R_H + R_A superadditivity",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Lightbulb,
    number: "06",
    title: "Philosophical Implications",
    description: "Epistemology, ontology, causation, time, and ethics grounded in recovery",
    gradient: "from-rose-500 to-red-500",
  },
];

export const TheoryScope = () => {
  return (
    <section id="theory" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Six Pillars of the <span className="quantum-gradient bg-clip-text text-transparent">Theory</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive framework connecting computation, physics, consciousness, and philosophy
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {theoryParts.map((part, index) => {
            const Icon = part.icon;
            return (
              <Card
                key={index}
                className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 smooth-transition hover:shadow-xl group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${part.gradient} flex items-center justify-center group-hover:scale-110 smooth-transition`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-4xl font-bold text-muted/20 group-hover:text-muted/40 smooth-transition">
                      {part.number}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary smooth-transition">
                    {part.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {part.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
