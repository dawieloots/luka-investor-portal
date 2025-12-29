import { Database, Users, Plug, Smartphone } from 'lucide-react';

const ProblemSection = () => {
  const problems = [
    {
      icon: Database,
      title: 'Legacy Cost Structures',
      description: 'Decades-old systems and manual workflows make insurers expensive to run and difficult to modernise.',
    },
    {
      icon: Users,
      title: 'Human-heavy Operations',
      description: 'Large call centres and manual decision-making drive errors, slow service, and poor scalability.',
    },
    {
      icon: Plug,
      title: 'Technology Retrofitting',
      description: 'AI bolted onto rigid systems delivers incremental gains, not structural advantage.',
    },
    {
      icon: Smartphone,
      title: 'The Next Consumer is Unserved',
      description: 'Younger generations expect personalised, interactive, always-on experiences that current insurance models cannot deliver.',
    },
  ];

  return (
    <section id="problem" className="py-24 md:py-32 bg-card">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-sm text-primary font-medium tracking-wider uppercase mb-4 block">
              The Problem
            </span>
            <h2 className="text-3xl md:text-5xl font-light mb-6">
              Insurance is structurally
              <span className="text-gradient font-normal"> outdated</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              South Africa’s insurance market moves hundreds of billions of rand each year,
              but much of it is still powered by legacy technology and manual operations,
              creating inefficiency at scale.
            </p>
          </div>

          {/* Problem Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {problems.map((problem, index) => (
              <div
                key={problem.title}
                className="group p-8 rounded-2xl bg-secondary border border-border hover:border-primary/30 transition-all duration-300 card-shadow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <problem.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-3">{problem.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
              </div>
            ))}
          </div>

          {/* Opportunity Statement */}
          <div className="mt-16 p-8 md:p-12 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 text-center">
            <h3 className="text-2xl md:text-3xl font-light mb-4">
              The opportunity is <span className="text-primary font-normal">massive</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              AI and automation create a once-in-a-generation opportunity to rebuild insurance
              from first principles — faster, fairer, and 10x more efficient.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
