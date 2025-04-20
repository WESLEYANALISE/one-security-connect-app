
import { Link } from "react-router-dom";

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  imageSrc?: string;
}

const ServiceCard = ({ id, title, description, icon, imageSrc }: ServiceCardProps) => {
  return (
    <div id={id} className="dark-card overflow-hidden group animate-fade-in">
      <div className="flex flex-col h-full">
        {imageSrc && (
          <div className="h-48 overflow-hidden mb-5 -mx-6 -mt-6">
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
            />
          </div>
        )}

        <div className="flex items-center mb-3">
          <div className="bg-one-gold p-2 rounded-md mr-3 text-one-black">{icon}</div>
          <h3 className="text-xl font-bold text-one-white">{title}</h3>
        </div>

        <p className="text-one-gray mb-5">{description}</p>

        <div className="mt-auto pt-4">
          <Link 
            to="/quote"
            className="inline-flex items-center text-one-gold hover:text-one-white font-medium transition-colors"
          >
            Solicitar orçamento
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
    </div>
  );
};

export default ServiceCard;
