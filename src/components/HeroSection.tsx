
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative bg-one-black overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(#FFD700_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center mb-6 bg-one-dark-gray/50 rounded-full p-3">
            <ShieldCheck className="text-one-gold h-8 w-8" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-one-white">Protegendo o que</span>{' '}
            <span className="text-one-gold">importa para você</span>
          </h1>

          <p className="text-one-gray text-lg md:text-xl mb-10 leading-relaxed">
            Soluções completas em segurança eletrônica para sua casa ou empresa.
            Cameras, alarmes e controle de acesso com tecnologia de ponta.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quote" className="gold-button px-8 py-3 text-lg">
              Solicitar Orçamento
            </Link>
            <Link
              to="/services"
              className="bg-transparent border-2 border-one-gold text-one-gold font-semibold px-8 py-3 rounded-md hover:bg-one-gold/10 transition text-lg"
            >
              Conheça Nossos Serviços
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
