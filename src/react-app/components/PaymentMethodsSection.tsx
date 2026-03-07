import { CreditCard, Banknote, QrCode, CheckCircle2 } from 'lucide-react';

const paymentMethods = [
  {
    icon: QrCode,
    title: 'Pix',
    description: 'Pagamento instantâneo e sem taxas',
    highlight: true,
  },
  {
    icon: CreditCard,
    title: 'Cartões',
    description: 'Débito e crédito em até 12x',
    cards: ['Visa', 'Mastercard', 'Elo', 'Hiper', 'Hypercard'],
  },
  {
    icon: Banknote,
    title: 'Dinheiro',
    description: 'Pagamento à vista com desconto',
  },
];

export default function PaymentMethodsSection() {
  return (
    <section id="pagamento" className="py-16 px-4 bg-gradient-to-b from-[hsl(215,80%,20%)] to-[hsl(215,80%,15%)]">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Formas de <span className="text-secondary">Pagamento</span>
          </h2>
          <p className="text-white/60">
            Facilidade na hora de pagar. Escolha a melhor opção para você.
          </p>
        </div>
        
        {/* Payment methods cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {paymentMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <div
                key={index}
                className={`relative rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105 ${
                  method.highlight 
                    ? 'bg-gradient-to-br from-secondary/20 to-secondary/5 border-2 border-secondary/40' 
                    : 'bg-white/5 border border-white/10'
                }`}
              >
                {method.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-[hsl(215,80%,15%)] text-xs font-bold px-3 py-1 rounded-full">
                    RECOMENDADO
                  </span>
                )}
                
                <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 ${
                  method.highlight ? 'bg-secondary/30' : 'bg-white/10'
                }`}>
                  <Icon className={`w-8 h-8 ${method.highlight ? 'text-secondary' : 'text-white/80'}`} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                <p className="text-white/60 text-sm mb-4">{method.description}</p>
                
                {method.cards && (
                  <div className="flex flex-wrap justify-center gap-2">
                    {method.cards.map((card, cardIndex) => (
                      <span 
                        key={cardIndex}
                        className="text-xs bg-white/10 text-white/80 px-2 py-1 rounded"
                      >
                        {card}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-white/50 text-sm">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-400" />
            <span>Pagamento seguro</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-400" />
            <span>Orçamento sem compromisso</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-400" />
            <span>Nota fiscal</span>
          </div>
        </div>
      </div>
    </section>
  );
}
