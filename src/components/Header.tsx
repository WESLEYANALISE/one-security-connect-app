
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Shield } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-one-black sticky top-0 z-50 border-b border-one-dark-gray">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full border-2 border-one-gold flex items-center justify-center">
            <Shield className="h-6 w-6 text-one-gold" />
          </div>
          <div>
            <h1 className="text-xl font-bold">
              <span className="text-white">ONE</span>{' '}
              <span className="text-one-gold">SECURITY</span>
            </h1>
            <p className="text-xs text-one-gray -mt-1">SEGURANÇA ELETRÔNICA</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link to="/" className="text-one-white hover:text-one-gold transition">
            Início
          </Link>
          <Link to="/services" className="text-one-white hover:text-one-gold transition">
            Serviços
          </Link>
          <Link to="/about" className="text-one-white hover:text-one-gold transition">
            Sobre
          </Link>
          <Link to="/blog" className="text-one-white hover:text-one-gold transition">
            Blog
          </Link>
          <Link to="/quote" className="text-one-white hover:text-one-gold transition">
            Orçamento
          </Link>
          <Link to="/contact" className="text-one-white hover:text-one-gold transition">
            Contato
          </Link>
        </nav>

        <div className="hidden md:block">
          <Link to="/client-area" className="gold-button">
            Área do Cliente
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-one-black border-t border-one-dark-gray">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link to="/" className="text-one-white hover:text-one-gold transition py-2" onClick={toggleMenu}>
              Início
            </Link>
            <Link to="/services" className="text-one-white hover:text-one-gold transition py-2" onClick={toggleMenu}>
              Serviços
            </Link>
            <Link to="/about" className="text-one-white hover:text-one-gold transition py-2" onClick={toggleMenu}>
              Sobre
            </Link>
            <Link to="/blog" className="text-one-white hover:text-one-gold transition py-2" onClick={toggleMenu}>
              Blog
            </Link>
            <Link to="/quote" className="text-one-white hover:text-one-gold transition py-2" onClick={toggleMenu}>
              Orçamento
            </Link>
            <Link to="/contact" className="text-one-white hover:text-one-gold transition py-2" onClick={toggleMenu}>
              Contato
            </Link>
            <Link to="/client-area" className="gold-button w-full text-center" onClick={toggleMenu}>
              Área do Cliente
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
