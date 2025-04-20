import { Link } from 'react-router-dom';
import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import ClientReview from '@/components/ClientReview';
import BlogPost from '@/components/BlogPost';
import { Shield, Bell } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <section className="py-16 bg-one-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-one-white mb-3">
              Nossos <span className="text-one-gold">Serviços</span>
            </h2>
            <p className="text-one-gray max-w-2xl mx-auto">
              Oferecemos soluções completas em segurança eletrônica para atender
              às necessidades específicas de sua residência ou empresa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard
              id="cftv"
              title="Sistema de CFTV"
              description="Câmeras de alta resolução para monitoramento em tempo real e gravação contínua. Acesso remoto via aplicativo."
              icon={<Shield size={24} />}
              imageSrc="https://images.unsplash.com/photo-1542008447-5d1d24414f7c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
            
            <ServiceCard
              id="alarm"
              title="Sistema de Alarme"
              description="Sensores de movimento, abertura e presença com notificações em tempo real. Monitoramento 24h para sua tranquilidade."
              icon={<Bell size={24} />}
              imageSrc="https://images.unsplash.com/photo-1589935447067-5531094415d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
            
            <ServiceCard
              id="access"
              title="Controle de Acesso"
              description="Controle quem entra e sai com sistemas por biometria, cartão, senha ou reconhecimento facial."
              icon={<Shield size={24} />}
              imageSrc="https://images.unsplash.com/photo-1560264641-1b5171c5b8f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
          </div>

          <div className="flex justify-center mt-10">
            <Link to="/services" className="gold-button">
              Ver todos os serviços
            </Link>
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
              Proteja o que importa <span className="text-one-gold">hoje mesmo</span>
            </h2>
            <p className="text-one-gray text-lg mb-8">
              Entre em contato agora para obter uma avaliação gratuita das necessidades de segurança do seu espaço.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="https://wa.me/5511937726474?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20One%20Security."
                className="gold-button flex items-center justify-center gap-2"
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
                Falar via WhatsApp
              </a>
              <a 
                href="tel:+5511937726474"
                className="bg-transparent border-2 border-one-gold text-one-gold font-semibold px-6 py-2.5 rounded-md hover:bg-one-gold/10 transition flex items-center justify-center gap-2"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="w-5 h-5"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                Ligar agora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-one-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-one-white mb-3">
              O que nossos <span className="text-one-gold">clientes</span> dizem
            </h2>
            <p className="text-one-gray max-w-2xl mx-auto">
              A satisfação dos nossos clientes é a nossa maior recompensa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ClientReview
              name="Rodrigo Silva"
              rating={5}
              review="Excelente serviço! Instalaram as câmeras em menos de um dia e o aplicativo é muito fácil de usar. Recomendo a todos."
              date="15/03/2025"
            />
            <ClientReview
              name="Ana Pereira"
              rating={5}
              review="Fantástico atendimento desde o orçamento até a instalação. Equipe muito profissional e sistema de alarme funcionando perfeitamente."
              date="22/02/2025"
            />
            <ClientReview
              name="Carlos Mendes"
              rating={4}
              review="Empresa séria e comprometida. Tive um pequeno problema com uma câmera, mas vieram no mesmo dia para resolver. Recomendo!"
              date="10/01/2025"
            />
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-one-dark-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-one-white mb-3">
              Blog de <span className="text-one-gold">Segurança</span>
            </h2>
            <p className="text-one-gray max-w-2xl mx-auto">
              Dicas, novidades e informações para manter você e seu patrimônio sempre seguros.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <BlogPost
              id="cameras-monitoramento"
              title="Como escolher as melhores câmeras para monitoramento"
              excerpt="Guia completo sobre os diferentes tipos de câmeras e qual a melhor opção para cada ambiente."
              date="28/03/2025"
              readTime="7 min"
              imageSrc="https://images.unsplash.com/photo-1551704174-de8c6a2494b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
            <BlogPost
              id="seguranca-residencial"
              title="5 dicas para aumentar a segurança residencial"
              excerpt="Medidas simples e eficientes para proteger sua casa e sua família contra invasões."
              date="15/03/2025"
              readTime="5 min"
              imageSrc="https://images.unsplash.com/photo-1558402979-bb3edd7e4e1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
            <BlogPost
              id="tecnologias-controle-acesso"
              title="Tecnologias de controle de acesso para empresas"
              excerpt="Conheça as tecnologias mais recentes para controlar o acesso em ambientes corporativos."
              date="02/03/2025"
              readTime="6 min"
              imageSrc="https://images.unsplash.com/photo-1610056494052-6a4f5fb780b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
          </div>

          <div className="flex justify-center mt-10">
            <Link to="/blog" className="gold-button">
              Ver todos os artigos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
