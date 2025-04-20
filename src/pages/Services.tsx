
import { useState } from 'react';
import { Shield, Bell, Key } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const [activeTab, setActiveTab] = useState<string>('cftv');
  
  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    
    const element = document.getElementById(tabId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
              Nossos <span className="text-one-gold">Serviços</span>
            </h1>
            <p className="text-one-gray text-lg mb-8">
              Explore nossas soluções de segurança eletrônica para proteção residencial e empresarial.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-one-black sticky top-[72px] z-30 border-b border-one-dark-gray">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto py-4 scrollbar-none">
            <button
              onClick={() => handleTabClick('cftv')}
              className={`px-4 py-2 mx-2 whitespace-nowrap transition-colors ${
                activeTab === 'cftv' 
                  ? 'text-one-gold border-b-2 border-one-gold font-medium' 
                  : 'text-one-gray hover:text-one-white'
              }`}
            >
              Sistema de CFTV
            </button>
            <button
              onClick={() => handleTabClick('alarme')}
              className={`px-4 py-2 mx-2 whitespace-nowrap transition-colors ${
                activeTab === 'alarme' 
                  ? 'text-one-gold border-b-2 border-one-gold font-medium' 
                  : 'text-one-gray hover:text-one-white'
              }`}
            >
              Sistema de Alarme
            </button>
            <button
              onClick={() => handleTabClick('acesso')}
              className={`px-4 py-2 mx-2 whitespace-nowrap transition-colors ${
                activeTab === 'acesso' 
                  ? 'text-one-gold border-b-2 border-one-gold font-medium' 
                  : 'text-one-gray hover:text-one-white'
              }`}
            >
              Controle de Acesso
            </button>
          </div>
        </div>
      </section>

      {/* CFTV Section */}
      <section id="cftv" className="py-16 bg-one-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-one-gold p-2.5 rounded-full mr-4">
                  <Shield className="h-6 w-6 text-one-black" />
                </div>
                <h2 className="text-3xl font-bold text-one-white">Sistema de CFTV</h2>
              </div>
              
              <p className="text-one-gray mb-6">
                Nosso sistema de CFTV (Circuito Fechado de Televisão) oferece monitoramento em tempo real e gravação 
                contínua de alta qualidade, permitindo que você acompanhe o que acontece em sua propriedade de 
                qualquer lugar através do nosso aplicativo móvel.
              </p>

              <div className="mb-6">
                <h3 className="text-one-gold font-semibold mb-2">Benefícios:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-one-gold mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-one-white">Câmeras em alta definição (HD, Full HD, 4K)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-one-gold mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-one-white">Acesso remoto via aplicativo mobile ou desktop</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-one-gold mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-one-white">Gravação contínua com armazenamento local ou em nuvem</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-one-gold mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-one-white">Detecção de movimento com alertas em tempo real</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-one-gold mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-one-white">Visão noturna infravermelha</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <Link to="/quote" className="gold-button">
                  Solicitar Orçamento
                </Link>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1610487372388-e8800b4e730a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Sistema de CFTV" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <p className="text-white text-lg font-medium">Monitoramento 24h</p>
                  <p className="text-one-gray">Proteção contínua para sua tranquilidade</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alarm System Section */}
      <section id="alarme" className="py-16 bg-one-dark-gray">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative rounded-lg overflow-hidden h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1589935447067-5531094415d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Sistema de Alarme" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <p className="text-white text-lg font-medium">Alertas instantâneos</p>
                  <p className="text-one-gray">Seja notificado imediatamente sobre qualquer incidente</p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-4">
                <div className="bg-one-gold p-2.5 rounded-full mr-4">
                  <Bell className="h-6 w-6 text-one-black" />
                </div>
                <h2 className="text-3xl font-bold text-one-white">Sistema de Alarme</h2>
              </div>
              
              <p className="text-one-gray mb-6">
                Nosso sistema de alarme inteligente oferece proteção abrangente contra invasões, 
                incêndios e outros riscos, com monitoramento 24 horas e notificações em tempo real 
                para garantir sua segurança.
              </p>

              <div className="mb-6">
                <h3 className="text-one-gold font-semibold mb-2">Recursos:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-one-gold mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-one-white">Sensores de movimento avançados</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-one-gold mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-one-white">Sensores para portas e janelas</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-one-gold mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-one-white">Detectores de fumaça e temperatura</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-one-gold mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-one-white">Notificações via aplicativo</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-one-gold mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-one-white">Controle remoto via smartphone</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-one-gold mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-one-white">Backup de energia para funcionamento contínuo</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <Link to="/quote" className="gold-button">
                  Solicitar Orçamento
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Access Control Section */}
      <section id="acesso" className="py-16 bg-one-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-one-gold p-2.5 rounded-full mr-4">
                  <Key className="h-6 w-6 text-one-black" />
                </div>
                <h2 className="text-3xl font-bold text-one-white">Controle de Acesso</h2>
              </div>
              
              <p className="text-one-gray mb-6">
                Nossos sistemas de controle de acesso permitem gerenciar com precisão quem pode entrar em 
                diferentes áreas do seu estabelecimento, oferecendo segurança e praticidade com tecnologias 
                avançadas de identificação.
              </p>

              <div className="mb-6">
                <h3 className="text-one-gold font-semibold mb-2">Tecnologias disponíveis:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-one-gold mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-one-white">Biometria (impressão digital, reconhecimento facial)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-one-gold mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-one-white">Cartões de proximidade RFID e NFC</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-one-gold mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-one-white">Teclados com senha</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-one-gold mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-one-white">Controle via aplicativo móvel</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-one-gold mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-one-white">Integração com sistemas de CFTV e alarmes</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <Link to="/quote" className="gold-button">
                  Solicitar Orçamento
                </Link>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1560264641-1b5171c5b8f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Controle de Acesso" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <p className="text-white text-lg font-medium">Acesso inteligente</p>
                  <p className="text-one-gray">Tecnologia avançada para controle preciso</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-one-dark-gray relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(#FFD700_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-one-white mb-6">
              Pronto para aumentar sua <span className="text-one-gold">segurança</span>?
            </h2>
            <p className="text-one-gray text-lg mb-8">
              Entre em contato para uma avaliação personalizada das suas necessidades de segurança.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/quote" className="gold-button">
                Solicitar Orçamento
              </Link>
              <a 
                href="https://wa.me/5511937726474?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20One%20Security."
                className="bg-transparent border-2 border-one-gold text-one-gold font-semibold px-6 py-2.5 rounded-md hover:bg-one-gold/10 transition flex items-center justify-center gap-2"
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
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
