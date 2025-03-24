import Image from "next/image";

interface TestimonialCardProps {
  name: string;
  position?: string;
  content: string;
  image?: string;
  rating?: number;
}

export default function TestimonialCard({
  name,
  position,
  content,
  image,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg relative">
      {/* Quote Icon */}
      <div className="absolute top-6 right-6 text-primary/10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
        </svg>
      </div>

      {/* Content */}
      <div className="mb-8">
        <p className="text-gray-700 italic mb-4 relative z-10 leading-relaxed">
          {content}
        </p>
      </div>

      {/* Rating Stars */}
      {rating > 0 && (
        <div className="flex mb-4 text-secondary">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 ${i < rating ? "fill-current" : "stroke-current fill-none"}`}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={i < rating ? 0 : 2}
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
          ))}
        </div>
      )}

      {/* Author Info */}
      <div className="flex items-center">
        {image && (
          <div className="mr-4">
            <Image
              src={image}
              alt={name}
              width={48}
              height={48}
              className="rounded-full"
            />
          </div>
        )}
        <div>
          <h4 className="font-bold text-primary">{name}</h4>
          {position && <p className="text-gray-600 text-sm">{position}</p>}
        </div>
      </div>
    </div>
  );
} 