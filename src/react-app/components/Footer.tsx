import { Key, Phone, Mail, MapPin, Clock, Facebook, Instagram, ChevronRight } from 'lucide-react';

const quickLinks = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Por que Nós', href: '#porque' },
  { label: 'Contato', href: '#contato' },
];

const services = [
  'Cópia de Chaves',
  'Abertura de Portas',
  'Fechaduras Digitais',
  'Chaves Codificadas',
  'Troca de Segredo',
  'Carimbos',
];

const paymentMethods = [
  { name: 'Pix', color: 'bg-teal-500' },
  { name: 'Visa', color: 'bg-blue-600' },
  { name: 'Master', color: 'bg-red-500' },
  { name: 'Elo', color: 'bg-yellow-500' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[hsl(215,80%,12%)] text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                <Key className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-lg">chaveiroABCexpres</h3>
                <span className="text-secondary text-sm font-medium">24 Horas</span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Há mais de 15 anos oferecendo soluções completas em chaveiro, 
              carimbos e relojoaria em Brasília. Atendimento 24 horas com 
              profissionais qualificados.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-secondary rounded-lg flex items-center justify-center transition-colors group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white/70 group-hover:text-secondary-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-secondary rounded-lg flex items-center justify-center transition-colors group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white/70 group-hover:text-secondary-foreground" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-5 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-secondary"></span>
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-secondary transition-colors flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-4 h-4 text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-5 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-secondary"></span>
              Serviços
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#servicos"
                    className="text-white/70 hover:text-secondary transition-colors flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-4 h-4 text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-5 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-secondary"></span>
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-4 h-4 text-secondary" />
                </div>
                <div className="text-sm">
                  <p className="text-white/90">(61) 98403-3553</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="w-4 h-4 text-secondary" />
                </div>
                <p className="text-white/70 text-sm">chaveiroabc102@gmail.com</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-secondary" />
                </div>
                <p className="text-white/70 text-sm">
                  Clsw 102 ao lado do bloco B no estacionamento ( Quiosque 01)
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 text-secondary" />
                </div>
                <div className="text-sm">
                  <p className="text-secondary font-semibold">24 Horas</p>
                  <p className="text-white/70">Todos os dias</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment methods */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <span className="text-white/50 text-sm">Formas de Pagamento:</span>
              <div className="flex gap-2">
                {paymentMethods.map((method) => (
                  <div
                    key={method.name}
                    className={`${method.color} px-3 py-1 rounded text-xs font-bold text-white`}
                  >
                    {method.name}
                  </div>
                ))}
                <div className="bg-green-600 px-3 py-1 rounded text-xs font-bold text-white">
                  Dinheiro
                </div>
              </div>
            </div>
            <a
              href="https://wa.me/5561984033553"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center gap-2"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[hsl(215,80%,8%)] py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-white/50">
            © {currentYear} chaveiroABCexpres - CNPJ: 64.020.079/0001-03. Todos os direitos reservados.
          </p>
          <p className="text-white/30">
            Desenvolvido por <a href="https://devricardolima.com/" target="_blank" rel="noopener noreferrer" className="text-amber-400 font-semibold hover:text-amber-300 transition-colors">RicardoDev</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
