
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-one-dark-gray pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full border-2 border-one-gold flex items-center justify-center">
                <Shield className="h-6 w-6 text-one-gold" />
              </div>
              <div>
                <h2 className="text-xl font-bold">
                  <span className="text-white">ONE</span>{' '}
                  <span className="text-one-gold">SECURITY</span>
                </h2>
                <p className="text-xs text-one-gray -mt-1">SEGURANÇA ELETRÔNICA</p>
              </div>
            </div>
            <p className="text-one-gray mb-4">
              Soluções completas em segurança eletrônica para sua casa ou empresa.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-one-gold" />
                <span className="text-one-white">(11) 93772-6474</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-one-gold" />
                <span className="text-one-white">contato@onesecurity.com.br</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-one-gold" />
                <span className="text-one-white">São Paulo, SP</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-one-white font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link to="/" className="text-one-gray hover:text-one-gold transition">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-one-gray hover:text-one-gold transition">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-one-gray hover:text-one-gold transition">
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-one-gray hover:text-one-gold transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/quote" className="text-one-gray hover:text-one-gold transition">
                  Orçamento
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-one-gray hover:text-one-gold transition">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-one-white font-bold text-lg mb-4">Nossos Serviços</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link to="/services#cftv" className="text-one-gray hover:text-one-gold transition">
                  Sistema de CFTV
                </Link>
              </li>
              <li>
                <Link to="/services#alarm" className="text-one-gray hover:text-one-gold transition">
                  Sistema de Alarme
                </Link>
              </li>
              <li>
                <Link to="/services#access" className="text-one-gray hover:text-one-gold transition">
                  Controle de Acesso
                </Link>
              </li>
            </ul>

            <div className="mt-8">
              <Link to="/quote" className="gold-button w-full text-center block">
                Solicitar Orçamento
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-one-gray text-sm">
            © {new Date().getFullYear()} One Security. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
