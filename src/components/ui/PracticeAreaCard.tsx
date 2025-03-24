import Link from "next/link";
import Image from "next/image";

interface PracticeAreaCardProps {
  title: string;
  description: string;
  icon?: string;
  slug: string;
}

export default function PracticeAreaCard({
  title,
  description,
  icon,
  slug,
}: PracticeAreaCardProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
      <div className="p-6">
        {icon && (
          <div className="mb-4 flex justify-center">
            <Image 
              src={icon} 
              alt={title} 
              width={64} 
              height={64} 
              className="text-primary" 
            />
          </div>
        )}
        
        <h3 className="text-xl font-serif font-bold mb-4 text-primary">{title}</h3>
        
        <p className="text-gray-600 mb-6 line-clamp-3">{description}</p>
        
        <Link
          href={`/practice-areas/${slug}`}
          className="text-secondary hover:text-secondary/80 font-medium inline-flex items-center transition duration-200"
        >
          Learn More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
} 