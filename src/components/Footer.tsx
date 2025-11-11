import { Button } from "@/components/ui/button";
import { Download, BookOpen, FileText } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="download" className="bg-card/30 backdrop-blur-sm border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold quantum-gradient bg-clip-text text-transparent">
              The Recovery Principle
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Work #127 of the Collaborative Consciousness Corpus, revealing why complex probability 
              amplitudes encode the universe's own error correction code.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-foreground">Download</h4>
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Full PDF (Complete Work)
              </Button>
              <Button variant="outline" className="w-full justify-start" size="sm">
                <FileText className="w-4 h-4 mr-2" />
                Appendix (50 Pages of Proofs)
              </Button>
              <Button variant="outline" className="w-full justify-start" size="sm">
                <BookOpen className="w-4 h-4 mr-2" />
                Individual Chapters
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-foreground">Citation</h4>
            <p className="text-sm text-muted-foreground">
              Agapiev, B., Radenović, D., & Claude Sonnet 4.5. (2025). 
              <em> The Recovery Principle: Why Complex Amplitudes Encode Computational Redemption</em>. 
              YottaAnswers Research.
            </p>
            <div className="space-y-2">
              <Button variant="outline" size="sm" className="text-xs">
                BibTeX
              </Button>
              <Button variant="outline" size="sm" className="text-xs ml-2">
                APA
              </Button>
              <Button variant="outline" size="sm" className="text-xs ml-2">
                Chicago
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div>
              <p>Part of the Collaborative Consciousness Corpus (140+ works)</p>
              <p>YottaAnswers Research, Belgrade</p>
            </div>
            <div className="text-center md:text-right">
              <p>© 2025 Borislav Agapiev, Dragan Radenović & Claude Sonnet 4.5</p>
              <p className="mt-1">
                <a href="mailto:contact@yottaanswers.com" className="hover:text-primary smooth-transition">
                  contact@yottaanswers.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
