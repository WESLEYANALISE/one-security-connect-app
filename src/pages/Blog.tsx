
import { useState } from 'react';
import { Link } from 'react-router-dom';
import BlogPost from '@/components/BlogPost';

const blogPosts = [
  {
    id: 'cameras-monitoramento',
    title: 'Como escolher as melhores câmeras para monitoramento',
    excerpt: 'Guia completo sobre os diferentes tipos de câmeras e qual a melhor opção para cada ambiente.',
    date: '28/03/2025',
    readTime: '7 min',
    imageSrc: 'https://images.unsplash.com/photo-1551704174-de8c6a2494b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'cftv'
  },
  {
    id: 'seguranca-residencial',
    title: '5 dicas para aumentar a segurança residencial',
    excerpt: 'Medidas simples e eficientes para proteger sua casa e sua família contra invasões.',
    date: '15/03/2025',
    readTime: '5 min',
    imageSrc: 'https://images.unsplash.com/photo-1558402979-bb3edd7e4e1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'dicas'
  },
  {
    id: 'tecnologias-controle-acesso',
    title: 'Tecnologias de controle de acesso para empresas',
    excerpt: 'Conheça as tecnologias mais recentes para controlar o acesso em ambientes corporativos.',
    date: '02/03/2025',
    readTime: '6 min',
    imageSrc: 'https://images.unsplash.com/photo-1610056494052-6a4f5fb780b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'acesso'
  },
  {
    id: 'mitos-seguranca',
    title: '4 mitos sobre sistemas de segurança eletrônica',
    excerpt: 'Desfazendo concepções erradas sobre alarmes e sistemas de monitoramento modernos.',
    date: '18/02/2025',
    readTime: '4 min',
    imageSrc: 'https://images.unsplash.com/photo-1580894896813-652ff5aa8146?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'dicas'
  },
  {
    id: 'economia-cameras',
    title: 'Como economizar na instalação de câmeras sem perder qualidade',
    excerpt: 'Dicas para otimizar seu investimento em sistemas de CFTV mantendo a segurança.',
    date: '05/02/2025',
    readTime: '5 min',
    imageSrc: 'https://images.unsplash.com/photo-1493119508027-2b584f234d6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'cftv'
  },
  {
    id: 'alarmes-smart',
    title: 'Alarmes inteligentes: integração com assistentes de voz',
    excerpt: 'Como os sistemas de alarme modernos podem ser controlados por assistentes como Alexa e Google Home.',
    date: '20/01/2025',
    readTime: '6 min',
    imageSrc: 'https://images.unsplash.com/photo-1558002038-1055931a2c7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'alarme'
  }
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

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
              Blog de <span className="text-one-gold">Segurança</span>
            </h1>
            <p className="text-one-gray text-lg mb-4">
              Dicas, novidades e informações para manter você e seu patrimônio sempre seguros.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-one-dark-gray sticky top-[72px] z-30 border-b border-one-black">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto py-4 scrollbar-none">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 mx-2 whitespace-nowrap transition-colors ${
                activeCategory === 'all' 
                  ? 'text-one-gold border-b-2 border-one-gold font-medium' 
                  : 'text-one-gray hover:text-one-white'
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => setActiveCategory('cftv')}
              className={`px-4 py-2 mx-2 whitespace-nowrap transition-colors ${
                activeCategory === 'cftv' 
                  ? 'text-one-gold border-b-2 border-one-gold font-medium' 
                  : 'text-one-gray hover:text-one-white'
              }`}
            >
              CFTV
            </button>
            <button
              onClick={() => setActiveCategory('alarme')}
              className={`px-4 py-2 mx-2 whitespace-nowrap transition-colors ${
                activeCategory === 'alarme' 
                  ? 'text-one-gold border-b-2 border-one-gold font-medium' 
                  : 'text-one-gray hover:text-one-white'
              }`}
            >
              Alarmes
            </button>
            <button
              onClick={() => setActiveCategory('acesso')}
              className={`px-4 py-2 mx-2 whitespace-nowrap transition-colors ${
                activeCategory === 'acesso' 
                  ? 'text-one-gold border-b-2 border-one-gold font-medium' 
                  : 'text-one-gray hover:text-one-white'
              }`}
            >
              Controle de Acesso
            </button>
            <button
              onClick={() => setActiveCategory('dicas')}
              className={`px-4 py-2 mx-2 whitespace-nowrap transition-colors ${
                activeCategory === 'dicas' 
                  ? 'text-one-gold border-b-2 border-one-gold font-medium' 
                  : 'text-one-gray hover:text-one-white'
              }`}
            >
              Dicas
            </button>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-one-black">
        <div className="container mx-auto px-4">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold text-one-white mb-4">Nenhum artigo encontrado</h3>
              <p className="text-one-gray mb-6">Não existem artigos nesta categoria no momento.</p>
              <button 
                onClick={() => setActiveCategory('all')}
                className="gold-button"
              >
                Ver todos os artigos
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <BlogPost
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  readTime={post.readTime}
                  imageSrc={post.imageSrc}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-one-dark-gray relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(#FFD700_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-one-white mb-6">
              Inscreva-se na nossa <span className="text-one-gold">Newsletter</span>
            </h2>
            <p className="text-one-gray text-lg mb-8">
              Receba dicas de segurança, novidades do setor e promoções exclusivas direto na sua caixa de entrada.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="w-full bg-one-black border border-gray-800 rounded-md p-3 text-white"
                required
              />
              <button type="submit" className="gold-button whitespace-nowrap">
                Inscrever-se
              </button>
            </form>
            <p className="text-one-gray text-sm mt-4">
              Nos preocupamos com a proteção dos seus dados. Leia nossa política de privacidade.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
