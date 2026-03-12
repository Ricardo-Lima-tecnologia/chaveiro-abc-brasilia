import { Clock, Shield, Zap, BadgeCheck, Users, Wrench } from 'lucide-react';

const reasons = [
  {
    icon: Clock,
    title: 'Atendimento 24 Horas',
    description: 'Disponíveis a qualquer hora do dia ou da noite, inclusive feriados.',
  },
  {
    icon: Shield,
    title: '+15 Anos de Experiência',
    description: 'Tradição e confiança construídas ao longo de mais de uma década.',
  },
  {
    icon: Zap,
    title: 'Atendimento Rápido',
    description: 'Chegamos rapidamente ao local para resolver seu problema.',
  },
  {
    icon: BadgeCheck,
    title: 'Qualidade Garantida',
    description: 'Serviços com garantia e materiais de primeira linha.',
  },
  {
    icon: Users,
    title: 'Equipe Profissional',
    description: 'Técnicos treinados e qualificados para qualquer situação.',
  },
  {
    icon: Wrench,
    title: 'Equipamentos Modernos',
    description: 'Tecnologia de ponta para serviços precisos e eficientes.',
  },
];

export default function WhyChooseUsSection() {
  return (
    <section id="vantagens" className="py-20 px-4 bg-[hsl(215,80%,20%)] relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-semibold mb-4">
            Nossos Diferenciais
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Por que Escolher a <span className="text-secondary">chaveiroABCexpres</span>?
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Há mais de 15 anos oferecendo soluções completas em chaveiro e carimbos 
            para Brasília e região com qualidade e confiança.
          </p>
        </div>
        
        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-secondary/30 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-secondary/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-secondary/30 transition-colors">
                  <Icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{reason.title}</h3>
                <p className="text-white/60 leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
