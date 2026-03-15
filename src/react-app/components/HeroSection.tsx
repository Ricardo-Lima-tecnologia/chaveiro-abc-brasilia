import { MessageCircle, FileText, Clock, Shield, Zap, Phone } from 'lucide-react';

export default function HeroSection() {
  const whatsappLink = 'https://wa.me/5561984033553';
  
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(215,80%,15%)] via-[hsl(215,80%,20%)] to-[hsl(215,70%,25%)]" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-amber-400/5 to-transparent rounded-full" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-amber-400/20 border border-amber-400/30 rounded-full px-4 py-2 mb-6">
              <Clock className="w-4 h-4 text-amber-400" />
              <span className="text-amber-400 font-semibold text-sm">Atendimento 24 Horas</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Chaveiro Profissional em{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-300">
                Brasília
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl mx-auto lg:mx-0">
              Soluções rápidas e seguras para todas as suas necessidades. 
              Abertura de portas, cópia de chaves, fechaduras digitais e muito mais.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
              <div className="flex items-center gap-2 text-white/70">
                <Zap className="w-5 h-5 text-amber-400" />
                <span className="text-sm font-medium">Atendimento Rápido</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Shield className="w-5 h-5 text-amber-400" />
                <span className="text-sm font-medium">Profissionais Qualificados</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 transition-all hover:-translate-y-0.5"
              >
                <MessageCircle className="w-6 h-6" />
                <span>Chamar no WhatsApp</span>
              </a>
            </div>

            {/* Secondary CTA */}
            <a
              href="#contato"
              className="inline-flex items-center gap-2 text-white/80 hover:text-amber-400 mt-6 font-medium transition-colors"
            >
              <FileText className="w-5 h-5" />
              <span>Solicitar Orçamento Grátis</span>
            </a>
          </div>

          {/* Visual Element */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Decorative Circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-transparent rounded-full animate-pulse" />
              <div className="absolute inset-4 bg-gradient-to-br from-amber-400/10 to-transparent rounded-full" />
              
              {/* Key Image Placeholder with Icon */}
              <div className="absolute inset-8 bg-gradient-to-br from-[hsl(215,80%,25%)] to-[hsl(215,80%,18%)] rounded-full flex items-center justify-center border border-amber-400/20 shadow-2xl">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-amber-400/30">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-[hsl(215,80%,15%)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                    </svg>
                  </div>
                  <p className="text-white font-bold text-xl">chaveiroABCexpres</p>
                  <p className="text-amber-400 font-medium">Confiança & Segurança</p>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 right-0 bg-gradient-to-br from-red-600 to-red-700 backdrop-blur-md rounded-xl p-3 border-2 border-red-400 shadow-xl shadow-red-500/40 animate-bounce-slow">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center animate-pulse">
                    <Clock className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <p className="text-white font-extrabold text-base">24 HORAS</p>
                    <p className="text-white/90 text-xs font-semibold">Todos os Dias</p>
                  </div>
                </div>
              </div>

              {/* Call Box */}
              <div className="absolute top-20 right-0 bg-gradient-to-br from-green-600 to-green-700 backdrop-blur-md rounded-xl p-3 border-2 border-green-400 shadow-xl shadow-green-500/40">
                <a href="tel:5561984033553" className="flex items-center gap-2 group">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-white/80 text-xs font-medium">Ligue Agora</p>
                    <p className="text-white font-bold text-base">(61) 98403-3553</p>
                  </div>
                </a>
              </div>

              <div className="absolute bottom-10 -left-4 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center">
                    <Shield className="w-5 h-5 text-[hsl(215,80%,15%)]" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">+15 Anos</p>
                    <p className="text-white/60 text-xs">de Experiência</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path fill="hsl(210, 40%, 98%)" fillOpacity="1" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
