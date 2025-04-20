
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação simples
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Erro no formulário",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    // Aqui seria a integração com backend
    console.log('Form data submitted:', formData);
    
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="min-h-screen bg-one-black">
      {/* Hero */}
      <section className="py-16 bg-one-dark-gray relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(#FFD700_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-one-white mb-6">
              Entre em <span className="text-one-gold">Contato</span>
            </h1>
            <p className="text-one-gray text-lg mb-4">
              Estamos prontos para atender a todas as suas necessidades em segurança eletrônica.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-one-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="dark-card text-center">
              <div className="bg-one-gold p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-one-black" />
              </div>
              <h3 className="text-xl font-bold text-one-white mb-3">Telefone</h3>
              <a href="tel:+5511937726474" className="text-one-gray hover:text-one-gold transition">
                (11) 93772-6474
              </a>
            </div>
            
            <div className="dark-card text-center">
              <div className="bg-one-gold p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-one-black" />
              </div>
              <h3 className="text-xl font-bold text-one-white mb-3">E-mail</h3>
              <a href="mailto:contato@onesecurity.com.br" className="text-one-gray hover:text-one-gold transition">
                contato@onesecurity.com.br
              </a>
            </div>
            
            <div className="dark-card text-center">
              <div className="bg-one-gold p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-one-black" />
              </div>
              <h3 className="text-xl font-bold text-one-white mb-3">Endereço</h3>
              <p className="text-one-gray">
                Av. Paulista, 1000, Bela Vista<br />
                São Paulo - SP, 01310-100
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-one-white mb-6">Envie sua mensagem</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-one-white mb-2">
                      Nome completo*
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-one-dark-gray border border-gray-800 rounded-md p-3 text-white"
                      placeholder="Seu nome"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-one-white mb-2">
                      E-mail*
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-one-dark-gray border border-gray-800 rounded-md p-3 text-white"
                      placeholder="seu-email@exemplo.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-one-white mb-2">
                      Telefone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-one-dark-gray border border-gray-800 rounded-md p-3 text-white"
                      placeholder="(00) 00000-0000"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-one-white mb-2">
                      Assunto
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-one-dark-gray border border-gray-800 rounded-md p-3 text-white"
                      placeholder="Assunto da mensagem"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-one-white mb-2">
                    Mensagem*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-one-dark-gray border border-gray-800 rounded-md p-3 text-white h-32"
                    placeholder="Digite sua mensagem aqui..."
                    required
                  />
                </div>

                <button type="submit" className="gold-button w-full py-3">
                  Enviar Mensagem
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-one-white mb-6">Horário de Atendimento</h2>
              <div className="dark-card mb-8">
                <h3 className="text-xl font-bold text-one-white mb-4">Escritório</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex justify-between">
                    <span className="text-one-gray">Segunda - Sexta:</span>
                    <span className="text-one-white">08:00 - 18:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-one-gray">Sábado:</span>
                    <span className="text-one-white">09:00 - 13:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-one-gray">Domingo:</span>
                    <span className="text-one-white">Fechado</span>
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-one-white mb-4">Suporte Técnico</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-one-gray">Segunda - Sexta:</span>
                    <span className="text-one-white">08:00 - 20:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-one-gray">Sábado:</span>
                    <span className="text-one-white">09:00 - 17:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-one-gray">Emergências:</span>
                    <span className="text-one-white">24/7</span>
                  </li>
                </ul>
              </div>

              <div className="dark-card">
                <h3 className="text-xl font-bold text-one-white mb-4">Contato Rápido</h3>
                
                <div className="space-y-4">
                  <a 
                    href="https://wa.me/5511937726474?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20One%20Security."
                    className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-medium rounded-md py-3 px-4 hover:bg-[#128C7E] transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 448 512"
                      className="w-5 h-5"
                      fill="currentColor"
                    >
                      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                    </svg>
                    Chamar no WhatsApp
                  </a>
                  
                  <a 
                    href="tel:+5511937726474"
                    className="flex items-center justify-center gap-2 bg-one-dark-gray text-white font-medium rounded-md border border-one-gold py-3 px-4 hover:bg-one-gold/10 transition"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="w-5 h-5 text-one-gold"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    Ligar agora
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Would use Google Maps API in production */}
      <section className="h-[400px] bg-one-dark-gray relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-one-white text-lg">Mapa com localização da empresa seria exibido aqui.</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
