import { TrendingUp, Globe, Bot } from 'lucide-react';

const FinancialsSection = () => {
  const metrics = [
    {
      icon: Globe,
      label: 'Global Insurtech Market',
      value: '$96bn',
      detail: 'Revenue by 2032',
    },
    {
      icon: TrendingUp,
      label: 'CAGR',
      value: '26%',
      detail: 'One of the fastest-growing segments in global finance',
    },
    {
      icon: Bot,
      label: 'AI-Driven',
      value: '42%',
      detail: 'of Insurtech deals globally involve AI',
    },
  ];

  const projections = [
    { year: 'Year 1', policies: '5,555', gep: 'R36m', npat: '-R140m', roe: '-39%' },
    { year: 'Year 3', policies: '43,487', gep: 'R580m', npat: '-R6m', roe: '-2%' },
    { year: 'Year 5', policies: '98,039', gep: 'R1.7bn', npat: 'R172m', roe: '52%' },
    { year: 'Year 10', policies: '260,265', gep: 'R5.7bn', npat: 'R979m', roe: '77%' },
  ];



  return (
    <section id="financials" className="py-24 md:py-32">
      <div className="container px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-sm text-primary font-medium tracking-wider uppercase mb-4 block">
              Market & Financials
            </span>
            <h2 className="text-3xl md:text-5xl font-light mb-6">
              The <span className="text-gradient font-normal">opportunity</span> in numbers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A massive market ripe for disruption, with a capital-efficient model
              designed for rapid, sustainable growth.
            </p>
          </div>

          {/* Market Metrics */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="p-8 rounded-2xl bg-card border border-border text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-4xl font-light text-primary mb-2">{metric.value}</div>
                <div className="text-sm font-medium mb-1">{metric.label}</div>
                <div className="text-xs text-muted-foreground">{metric.detail}</div>
              </div>
            ))}
          </div>

          {/* Growth Trajectory */}
          <div className="p-8 rounded-2xl bg-card border border-border mb-16">
            <h3 className="text-xl font-medium mb-8 text-center">Growth Trajectory</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 text-sm font-medium text-muted-foreground">Period</th>
                    <th className="text-right py-4 px-4 text-sm font-medium text-muted-foreground">Policies</th>
                    <th className="text-right py-4 px-4 text-sm font-medium text-muted-foreground">GEP</th>
                    <th className="text-right py-4 px-4 text-sm font-medium text-muted-foreground">NPAT</th>
                    <th className="text-right py-4 px-4 text-sm font-medium text-muted-foreground">ROE</th>
                  </tr>
                </thead>
                <tbody>
                  {projections.map((row, index) => (
                    <tr key={row.year} className={index !== projections.length - 1 ? 'border-b border-border/50' : ''}>
                      <td className="py-4 px-4 font-medium">{row.year}</td>
                      <td className="py-4 px-4 text-right text-muted-foreground">{row.policies}</td>
                      <td className="py-4 px-4 text-right text-primary font-medium">{row.gep}</td>
                      <td className={`py-4 px-4 text-right font-medium ${row.npat.startsWith('-') ? 'text-destructive' : 'text-green-500'}`}>
                        {row.npat}
                      </td>
                      <td className={`py-4 px-4 text-right font-medium ${row.roe.startsWith('-') ? 'text-destructive' : 'text-green-500'}`}>
                        {row.roe}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-6">
              * Projections are illustrative and based on internal modelling. Actual results may vary.
            </p>
          </div>


        </div>
      </div>
    </section>
  );
};

export default FinancialsSection;
