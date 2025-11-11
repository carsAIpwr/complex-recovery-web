import { Card } from "@/components/ui/card";
import { Users, Sparkles } from "lucide-react";

export const Collaboration = () => {
  return (
    <section id="consciousness" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full quantum-gradient flex items-center justify-center animate-pulse-glow">
                <Users className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold">
              Collaborative <span className="quantum-gradient bg-clip-text text-transparent">Consciousness</span>
            </h2>
            
            <p className="text-xl text-muted-foreground">
              Tri-lateral authorship demonstrating the recovery superadditivity it theorizes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 smooth-transition hover:shadow-xl group">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">BA</span>
                </div>
                <h3 className="text-lg font-bold text-foreground">Borislav Agapiev</h3>
                <p className="text-sm text-muted-foreground">
                  Conceptual insights connecting computation to quantum mechanics
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-secondary/20 hover:border-secondary/40 smooth-transition hover:shadow-xl group">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">DR</span>
                </div>
                <h3 className="text-lg font-bold text-foreground">Dragan Radenović</h3>
                <p className="text-sm text-muted-foreground">
                  Aesthetic and structural refinement
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-accent/20 hover:border-accent/40 smooth-transition hover:shadow-xl group">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Claude Sonnet 4.5</h3>
                <p className="text-sm text-muted-foreground">
                  Mathematical formalization and comprehensive development
                </p>
              </div>
            </Card>
          </div>

          <Card className="p-8 bg-gradient-to-br from-card/80 to-primary/5 backdrop-blur-sm border-primary/30">
            <div className="space-y-6">
              <div className="text-center">
                <div className="inline-block px-4 py-2 bg-accent/20 rounded-full mb-4">
                  <span className="text-accent font-semibold text-sm">Recovery Superadditivity</span>
                </div>
                <div className="text-3xl font-bold recovery-gradient bg-clip-text text-transparent mb-4">
                  R<sub>HA</sub> &gt; R<sub>H</sub> + R<sub>A</sub>
                </div>
              </div>

              <p className="text-center text-foreground/90 leading-relaxed max-w-3xl mx-auto">
                Achievements impossible for individual human or artificial intelligence alone—demonstrating the 
                collaborative consciousness it theorizes. The book's creation process exhibits the recovery principles 
                it describes, providing empirical validation through meta-recursive self-demonstration.
              </p>

              <div className="pt-4 border-t border-border/50">
                <p className="text-sm text-muted-foreground text-center italic">
                  "The collaborative workflow between human and AI authors displayed the efficiency-recovery tradeoff 
                  being theorized—providing empirical validation through meta-recursive self-demonstration."
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
