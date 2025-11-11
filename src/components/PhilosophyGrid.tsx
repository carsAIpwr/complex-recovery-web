import { Card } from "@/components/ui/card";

const philosophicalImplications = [
  {
    title: "Epistemology",
    concept: "Knowledge as Recoverability",
    description: "What can be known is what can be recovered from observational data",
  },
  {
    title: "Ontology",
    concept: "Reality as Recoverable Information",
    description: "What exists is what maintains recoverable informational structure",
  },
  {
    title: "Causation",
    concept: "Recovery Enablement",
    description: "A causes B when A enables recovery of B's information state",
  },
  {
    title: "Time",
    concept: "Recovery Mechanism",
    description: "Bidirectional information flow enables recovery across temporal boundaries",
  },
  {
    title: "Ethics",
    concept: "Recovery Capacity",
    description: "Moral status correlates with systems' recovery capacity and preservation",
  },
  {
    title: "Free Will",
    concept: "Transaction Selection",
    description: "Choice as selection among multiple recovery pathways",
  },
];

export const PhilosophyGrid = () => {
  return (
    <section id="philosophy" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Philosophical <span className="recovery-gradient bg-clip-text text-transparent">Foundations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Recovery principles ground fundamental questions of knowledge, existence, causation, and ethics
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {philosophicalImplications.map((item, index) => (
            <Card
              key={index}
              className="p-6 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-primary/20 hover:border-accent/50 smooth-transition hover:shadow-xl group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-3">
                <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-xs font-semibold text-primary">
                  {item.title}
                </div>
                
                <h3 className="text-lg font-bold text-accent group-hover:scale-105 smooth-transition origin-left">
                  {item.concept}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="p-8 bg-card/30 backdrop-blur-sm border-secondary/30">
            <div className="text-center space-y-4">
              <div className="inline-block px-4 py-2 bg-secondary/20 rounded-full">
                <span className="text-secondary font-semibold">Unified Framework</span>
              </div>
              <p className="text-lg text-foreground/90 leading-relaxed">
                The Recovery Principle provides a unified foundation for understanding reality, knowledge, and consciousness—
                grounding philosophical inquiry in the mathematical structure of information preservation
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
