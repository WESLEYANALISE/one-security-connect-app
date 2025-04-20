
import { Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
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
              Sobre a <span className="text-one-gold">One Security</span>
            </h1>
            <p className="text-one-gray text-lg mb-4">
              Conheça nossa história e nossos valores
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-one-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-one-white mb-6">Nossa História</h2>
              <p className="text-one-gray mb-6">
                Fundada em 2015, a One Security surgiu da visão de seus fundadores em oferecer
                soluções de segurança eletrônica de alta qualidade com atendimento personalizado
                e preços acessíveis para todos os tipos de clientes, sejam residenciais ou empresariais.
              </p>
              <p className="text-one-gray mb-6">
                Com mais de 500 clientes atendidos e uma equipe altamente qualificada, nos tornamos
                referência em segurança eletrônica na região de São Paulo, sempre acompanhando as 
                últimas tendências e tecnologias do mercado.
              </p>
              <p className="text-one-gray">
                Nossa missão é proporcionar tranquilidade e proteção através de soluções de segurança
                eletrônica eficientes e personalizadas, com excelência no atendimento e compromisso
                com a satisfação do cliente.
              </p>
            </div>

            <div className="relative rounded-lg overflow-hidden h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="One Security Office" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <p className="text-white text-lg font-medium">Sede da One Security</p>
                  <p className="text-one-gray">São Paulo - SP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-one-dark-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-one-white text-center mb-12">
            Nossos <span className="text-one-gold">Valores</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="dark-card text-center">
              <div className="bg-one-gold p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-one-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-one-white mb-3">Confiança</h3>
              <p className="text-one-gray">
                Construímos relacionamentos baseados na transparência e confiabilidade.
              </p>
            </div>

            <div className="dark-card text-center">
              <div className="bg-one-gold p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-one-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-one-white mb-3">Inovação</h3>
              <p className="text-one-gray">
                Buscamos constantemente as melhores e mais modernas soluções em segurança.
              </p>
            </div>

            <div className="dark-card text-center">
              <div className="bg-one-gold p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-one-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-one-white mb-3">Comprometimento</h3>
              <p className="text-one-gray">
                Estamos comprometidos com a segurança e satisfação de nossos clientes.
              </p>
            </div>

            <div className="dark-card text-center">
              <div className="bg-one-gold p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-one-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-one-white mb-3">Excelência</h3>
              <p className="text-one-gray">
                Buscamos a perfeição em cada projeto e instalação que realizamos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-one-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-one-white text-center mb-12">
            Nossa <span className="text-one-gold">Equipe</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team members would go here - For now using placeholders */}
            <div className="dark-card text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
                  alt="CEO" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-one-white mb-1">Ricardo Almeida</h3>
              <p className="text-one-gold font-medium mb-3">CEO & Fundador</p>
              <p className="text-one-gray">
                Com mais de 15 anos de experiência em segurança eletrônica e gestão empresarial.
              </p>
            </div>
            
            <div className="dark-card text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
                  alt="Technical Director" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-one-white mb-1">Fernanda Santos</h3>
              <p className="text-one-gold font-medium mb-3">Diretora Técnica</p>
              <p className="text-one-gray">
                Especialista em sistemas integrados de segurança e novas tecnologias.
              </p>
            </div>
            
            <div className="dark-card text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
                  alt="Customer Relations" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-one-white mb-1">Pedro Costa</h3>
              <p className="text-one-gold font-medium mb-3">Atendimento ao Cliente</p>
              <p className="text-one-gray">
                Dedicado a garantir a melhor experiência e satisfação dos nossos clientes.
              </p>
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
              Comece a proteger seu <span className="text-one-gold">espaço hoje</span>
            </h2>
            <p className="text-one-gray text-lg mb-8">
              Entre em contato para uma avaliação personalizada das suas necessidades de segurança.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/quote" className="gold-button">
                Solicitar Orçamento
              </Link>
              <a 
                href="https://wa.me/5511937726474?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20One%20Security."
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

export default About;
