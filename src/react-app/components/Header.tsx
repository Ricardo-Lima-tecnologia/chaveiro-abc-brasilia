import { useState } from 'react';
import { Phone, Menu, X, Key } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const phoneNumber = '5561984033553';
  const formattedPhone = '(61) 98403-3553';

  const navLinks = [
    { href: '#servicos', label: 'Serviços' },
    { href: '#vantagens', label: 'Por que Nós' },
    { href: '#pagamento', label: 'Formas de Pagamento' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[hsl(215,80%,20%)] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-500 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-amber-400/30 transition-shadow">
              <Key className="w-6 h-6 text-[hsl(215,80%,20%)]" />
            </div>
            <div className="hidden sm:block">
              <span className="text-white font-bold text-lg leading-tight block">Chaveiro ABC</span>
              <span className="text-amber-400 text-xs font-medium">24 Horas</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/90 hover:text-amber-400 font-medium text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Phone CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-[hsl(215,80%,20%)] px-4 py-2.5 rounded-lg font-semibold text-sm transition-all hover:shadow-lg hover:shadow-amber-400/20"
            >
              <Phone className="w-4 h-4" />
              <span>{formattedPhone}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-amber-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[hsl(215,80%,15%)] border-t border-white/10">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-white/90 hover:text-amber-400 font-medium py-2 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-[hsl(215,80%,20%)] px-4 py-3 rounded-lg font-semibold mt-2 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>{formattedPhone}</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
