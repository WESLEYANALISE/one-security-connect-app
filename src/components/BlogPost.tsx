
import { Link } from 'react-router-dom';

interface BlogPostProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  imageSrc?: string;
  readTime?: string;
}

const BlogPost = ({ id, title, excerpt, date, imageSrc, readTime = '5 min' }: BlogPostProps) => {
  return (
    <div className="dark-card h-full flex flex-col">
      {imageSrc && (
        <div className="h-48 overflow-hidden mb-4 -mx-6 -mt-6">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      <div className="flex items-center gap-3 mb-2">
        <span className="text-one-gold text-sm">{date}</span>
        <span className="w-1 h-1 bg-one-gold rounded-full"></span>
        <span className="text-one-gray text-sm">{readTime} de leitura</span>
      </div>

      <h3 className="text-xl font-bold text-one-white mb-3">{title}</h3>

      <p className="text-one-gray mb-5">{excerpt}</p>

      <div className="mt-auto pt-4">
        <Link
          to={`/blog/${id}`}
          className="inline-flex items-center text-one-gold hover:text-one-white font-medium transition-colors"
        >
          Ler mais
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default BlogPost;
