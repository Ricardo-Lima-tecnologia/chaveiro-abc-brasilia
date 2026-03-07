import { ShieldCheck, MessageCircle } from 'lucide-react';

const services = [
  {
    title: 'Cópias de Chaves',
    description: 'Duplicação rápida e precisa de chaves residenciais, comerciais e automotivas.',
    image: '/images/Cópias de Chaves.PNG',
  },
  {
    title: 'Aberturas',
    description: 'Abertura profissional de portas e fechaduras sem danificar. Atendimento 24h.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
  },
  {
    title: 'Instalação de Fechaduras',
    description: 'Instalação profissional de fechaduras convencionais e digitais de alta segurança.',
    image: '/images/Instalacao_fechadura.jpeg',
  },
  {
    title: 'Chave Codificada',
    description: 'Programação e cópia de chaves codificadas automotivas para todas as marcas.',
    image: 'https://images.unsplash.com/photo-1621993202323-f438eec934ff?w=400&h=300&fit=crop',
  },
  {
    title: 'Troca de Segredo',
    description: 'Alteração do segredo de fechaduras para maior segurança do seu imóvel.',
    image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?w=400&h=300&fit=crop',
  },
  {
    title: 'Ignição',
    description: 'Reparo e substituição de cilindros de ignição automotiva.',
    image: '/images/chave_ignicao_4.webp',
  },
  {
    title: 'Afiação',
    description: 'Afiação profissional de facas, tesouras, ferramentas e lâminas em geral.',
    image: 'https://images.unsplash.com/photo-1593618998160-e34014e67546?w=400&h=300&fit=crop',
  },
  {
    title: 'Relojoeiro',
    description: 'Conserto de relógios, troca de pilhas e pulseiras. Serviço especializado.',
    image: 'https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=400&h=300&fit=crop',
  },
  {
    title: 'Carimbos Personalizados',
    description: 'Confecção de carimbos personalizados para empresas e profissionais.',
    image: '/images/carimbo.PNG',
  },
];

const whatsappLink = "https://api.whatsapp.com/message/TQB6CVIY6GBZE1?autoload=1&app_absent=0";

export default function ServicesSection() {
  return (
    <section id="servicos" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-400/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[hsl(215,80%,25%)]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/20 rounded-full px-4 py-2 mb-4">
            <ShieldCheck className="w-4 h-4 text-amber-500" />
            <span className="text-amber-600 font-semibold text-sm">Serviços Profissionais</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Nossos <span className="text-[hsl(215,80%,25%)]">Serviços</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma ampla gama de serviços para atender todas as suas necessidades de chaveiro e muito mais.
          </p>
        </div>

        {/* Featured Image */}
        <div className="mb-12 md:mb-16 flex justify-center">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-amber-400/30 max-w-sm md:max-w-md">
            <img 
              src="https://019cc484-baa1-7ca8-ae0a-891631bf6d27.mochausercontent.com/WhatsApp-Image-2026-03-06-at-16.57.35.jpeg" 
              alt="Chaveiro ABC - Pronto para melhor atender a domicílio"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Services Grid - 2 columns mobile, 3 columns desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-gray-100 hover:border-amber-400/50 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Content */}
              <div className="p-3 sm:p-4 lg:p-5 flex flex-col flex-grow">
                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-foreground mb-1 sm:mb-2 group-hover:text-[hsl(215,80%,25%)] transition-colors line-clamp-2">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3 sm:mb-4 flex-grow line-clamp-3">
                  {service.description}
                </p>
                
                {/* CTA Button */}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-gradient-to-r from-[hsl(215,80%,25%)] to-[hsl(215,80%,30%)] hover:from-amber-500 hover:to-amber-400 text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl transition-all duration-300 shadow-md hover:shadow-lg w-full"
                >
                  <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span className="hidden xs:inline">Solicitar</span>
                  <span className="xs:hidden">WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 md:mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-[hsl(215,80%,20%)] to-[hsl(215,80%,28%)] rounded-2xl p-5 sm:p-8 shadow-xl">
            <div className="text-center sm:text-left">
              <p className="text-white font-bold text-base sm:text-lg mb-1">Precisa de algum serviço?</p>
              <p className="text-white/70 text-sm">Entre em contato agora mesmo!</p>
            </div>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-[hsl(215,80%,15%)] px-5 sm:px-6 py-3 rounded-xl font-bold transition-all hover:shadow-lg hover:shadow-amber-400/30 text-sm sm:text-base"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
