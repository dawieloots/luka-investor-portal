import { Bot, FileCheck, Shield, Zap } from 'lucide-react';

const SolutionSection = () => {
  const solutions = [
    {
      icon: Bot,
      title: 'Not Retrofitted. Rebuilt.',
      description: 'Luka is designed as South Africa’s first AI-native insurer, with artificial intelligence embedded across every business function and customer touchpoint from inception.',
      highlight: 'AI-Native from day one',
    },
    {
      icon: Zap,
      title: 'Built In-House, Built to Evolve',
      description: 'Our in-house insurance system updates instantly across underwriting, pricing, claims, and service — improving continuously as AI and automation advance, without operational disruption.',
      highlight: 'Legacy-free insurance stack',
    },
    {
      icon: FileCheck,
      title: 'Lean by Design',
      description: 'Luka operates with ~50% fewer people, ~30% lower costs, and AI agents delivering up to 75% higher productivity than traditional insurance models.',
      highlight: 'Structural Cost Design',
    },
    {
      icon: Shield,
      title: 'AI Agents, Not Call Centres',
      description: 'Always-on AI agents operate 24/7, in customers’ own languages, and can adopt broker or influencer personalities — turning distribution, service, and learning into software.',
      highlight: 'Software-driven Distribution',
    },
  ];

  return (
    <section id="solution" className="py-24 md:py-32">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-sm text-primary font-medium tracking-wider uppercase mb-4 block">
              The Solution
            </span>
            <h2 className="text-3xl md:text-5xl font-light mb-6">
              Meet <span className="text-gradient font-normal">Luka</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A ground-up rebuild of insurance for the AI age. Every process automated.
              Every interaction intelligent. Every customer delighted.
            </p>
          </div>

          {/* Solution Features */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {solutions.map((solution, index) => (
              <div
                key={solution.title}
                className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <solution.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-primary font-medium tracking-wider uppercase mb-2">
                      {solution.highlight}
                    </div>
                    <h3 className="text-xl font-medium mb-3">{solution.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cost Advantage */}
          <div className="grid md:grid-cols-3 gap-8 p-8 md:px-12 md:pt-12 md:pb-8 rounded-2xl bg-card border border-border">
            <div className="md:col-span-1">
              <h3 className="text-2xl font-light mb-4">
                The <span className="text-primary">lean</span> advantage
              </h3>
              <p className="text-muted-foreground">
                AI-native operations designed to outperform legacy insurers on cost, speed, and scale.
              </p>
            </div>
            <div className="md:col-span-2 grid grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-xl bg-secondary">
                <div className="text-3xl md:text-4xl font-light text-primary mb-2">50%</div>
                <div className="text-sm text-muted-foreground">Fewer people</div>
                <div className="text-xs text-muted-foreground/60 mt-1">Compared to traditional insurers</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-secondary">
                <div className="text-3xl md:text-4xl font-light text-primary mb-2">30%</div>
                <div className="text-sm text-muted-foreground">Lower cost base</div>
                <div className="text-xs text-muted-foreground/60 mt-1">Structural operating cost reduction</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-secondary">
                <div className="text-3xl md:text-4xl font-light text-primary mb-2">10 - 15%</div>
                <div className="text-sm text-muted-foreground">Price advantage</div>
                <div className="text-xs text-muted-foreground/60 mt-1">Ability to undercut competitors while protecting margins</div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4 md:col-start-2 md:col-span-2">
              Projections are based on detailed internal modelling. Actual results may vary.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
