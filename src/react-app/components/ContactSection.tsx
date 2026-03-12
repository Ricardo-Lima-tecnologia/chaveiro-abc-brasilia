import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: 'Telefone',
    lines: ['(61) 98403-3553'],
  },
  {
    icon: Mail,
    title: 'E-mail',
    lines: ['chaveiroabc102@gmail.com'],
  },
  {
    icon: MapPin,
    title: 'Endereço',
    lines: [
      'Clsw 102 ao lado do bloco B no estacionamento ( Quiosque 01)',
    ],
  },
  {
    icon: Clock,
    title: 'Horário',
    lines: ['24 horas', 'Todos os dias'],
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Open WhatsApp
    window.open('https://wa.me/5561984033553', '_blank');
    
    setIsSubmitting(false);
    setSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', service: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contato" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Fale Conosco
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Entre em <span className="text-secondary">Contato</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Solicite um orçamento gratuito ou tire suas dúvidas. 
            Estamos prontos para atender você 24 horas por dia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Send className="w-5 h-5 text-secondary" />
              Solicite um Orçamento
            </h3>
            
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">Mensagem Enviada!</h4>
                <p className="text-muted-foreground">Você será redirecionado para o WhatsApp.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                      Nome *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      placeholder="(61) 99999-9999"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-1">
                    Serviço Desejado
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="Cópia de Chaves">Cópia de Chaves</option>
                    <option value="Abertura de Portas">Abertura de Portas</option>
                    <option value="Instalação de Fechaduras">Instalação de Fechaduras</option>
                    <option value="Chave Codificada">Chave Codificada</option>
                    <option value="Troca de Segredo">Troca de Segredo</option>
                    <option value="Ignição Automotiva">Ignição Automotiva</option>
                    <option value="Afiação">Afiação</option>
                    <option value="Relojoeiro">Relojoeiro</option>
                    <option value="Carimbos Personalizados">Carimbos Personalizados</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                    placeholder="Descreva o que você precisa..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-secondary-foreground/30 border-t-secondary-foreground rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <MessageCircle className="w-5 h-5" />
                      Enviar pelo WhatsApp
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-6">
            {/* Contact cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                        {info.lines.map((line, lineIndex) => (
                          <p key={lineIndex} className="text-sm text-muted-foreground">
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Map */}
            <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg">
              <div className="p-4 bg-primary/5 border-b border-border">
                <h4 className="font-semibold text-foreground flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-secondary" />
                  Nossa Localização
                </h4>
              </div>
              <div className="aspect-video">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.8987877766!2d-47.92368592394673!3d-15.80194288495791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3b3c8c8c8c8c%3A0x0!2sSQSW%20102%2C%20Bras%C3%ADlia%20-%20DF!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização chaveiroABCexpres"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
