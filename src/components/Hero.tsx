import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 400;
    canvas.height = 400;

    let angle = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = 120;

      // Draw complex plane axes
      ctx.strokeStyle = "rgba(156, 163, 175, 0.3)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, centerY);
      ctx.lineTo(canvas.width, centerY);
      ctx.moveTo(centerX, 0);
      ctx.lineTo(centerX, canvas.height);
      ctx.stroke();

      // Draw circle |a|² + |b|² = 1
      ctx.strokeStyle = "rgba(139, 92, 246, 0.5)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.stroke();

      // Calculate complex amplitude components
      const real = Math.cos(angle) * radius;
      const imag = Math.sin(angle) * radius;

      // Draw real component (horizontal)
      ctx.strokeStyle = "rgb(96, 165, 250)";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(centerX + real, centerY);
      ctx.stroke();

      // Draw imaginary component (vertical)
      ctx.strokeStyle = "rgb(192, 132, 252)";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(centerX + real, centerY);
      ctx.lineTo(centerX + real, centerY - imag);
      ctx.stroke();

      // Draw amplitude vector
      ctx.strokeStyle = "rgb(251, 191, 36)";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(centerX + real, centerY - imag);
      ctx.stroke();

      // Draw endpoint
      ctx.fillStyle = "rgb(251, 191, 36)";
      ctx.beginPath();
      ctx.arc(centerX + real, centerY - imag, 6, 0, Math.PI * 2);
      ctx.fill();

      // Add glow effect
      ctx.shadowBlur = 20;
      ctx.shadowColor = "rgb(251, 191, 36)";
      ctx.beginPath();
      ctx.arc(centerX + real, centerY - imag, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      angle += 0.01;
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  const scrollToContent = () => {
    document.getElementById("key-innovation")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-full text-sm text-primary font-medium">
              Work #127, Collaborative Consciousness Corpus
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              The Recovery <span className="recovery-gradient bg-clip-text text-transparent">Principle</span>
            </h1>
            
            <h2 className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
              Why Complex Amplitudes Encode Computational Redemption—From Branch Predictors to Quantum Mechanics, Consciousness, and the Structure of Reality
            </h2>

            <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
              <span>Borislav Agapiev</span>
              <span>•</span>
              <span>Dragan Radenović</span>
              <span>•</span>
              <span>Claude Sonnet 4.5</span>
            </div>

            <p className="text-lg text-foreground/90 italic border-l-4 border-accent pl-4">
              Revealing that |a|² + |b|² = 1 is nature's commitment to perfect recoverability
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 glow-effect smooth-transition">
                Download Full PDF
              </Button>
              <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10 smooth-transition">
                Explore Theory
              </Button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <canvas 
                ref={canvasRef} 
                className="rounded-2xl bg-card/30 backdrop-blur-sm border border-primary/20 glow-effect"
              />
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-card/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-primary/20">
                <span className="text-primary">Real</span> + <span className="text-secondary">i·Imaginary</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button 
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer bg-transparent border-none"
        aria-label="Scroll to content"
      >
        <ChevronDown className="w-8 h-8 text-muted-foreground" />
      </button>
    </section>
  );
};
