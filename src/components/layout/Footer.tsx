import Link from "next/link";

interface FooterProps {
  firmName: string;
  address?: string;
  phone?: string;
  email?: string;
  copyright?: string;
}

export default function Footer({ 
  firmName, 
  address, 
  phone, 
  email,
  copyright = `© ${new Date().getFullYear()} ${firmName}. All rights reserved.`
}: FooterProps) {
  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Firm Info */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">{firmName}</h3>
            {address && (
              <p className="mb-2">
                <span className="font-medium">Address:</span><br />
                {address}
              </p>
            )}
            {phone && (
              <p className="mb-2">
                <span className="font-medium">Phone:</span><br />
                {phone}
              </p>
            )}
            {email && (
              <p className="mb-2">
                <span className="font-medium">Email:</span><br />
                <a href={`mailto:${email}`} className="hover:text-secondary transition duration-200">
                  {email}
                </a>
              </p>
            )}
          </div>
          
          {/* Practice Areas */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Practice Areas</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/practice-areas/personal-injury" className="hover:text-secondary transition duration-200">
                  Personal Injury
                </Link>
              </li>
              <li>
                <Link href="/practice-areas/family-law" className="hover:text-secondary transition duration-200">
                  Family Law
                </Link>
              </li>
              <li>
                <Link href="/practice-areas/criminal-defense" className="hover:text-secondary transition duration-200">
                  Criminal Defense
                </Link>
              </li>
              <li>
                <Link href="/practice-areas/estate-planning" className="hover:text-secondary transition duration-200">
                  Estate Planning
                </Link>
              </li>
              <li>
                <Link href="/practice-areas" className="hover:text-secondary transition duration-200">
                  View All Practice Areas
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-secondary transition duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-secondary transition duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/attorneys" className="hover:text-secondary transition duration-200">
                  Our Attorneys
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-secondary transition duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-secondary transition duration-200">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Business Hours */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Business Hours</h3>
            <ul className="space-y-2">
              <li>
                <span className="font-medium">Monday - Friday:</span><br />
                9:00 AM - 5:00 PM
              </li>
              <li>
                <span className="font-medium">Saturday:</span><br />
                By Appointment
              </li>
              <li>
                <span className="font-medium">Sunday:</span><br />
                Closed
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p>{copyright}</p>
          <div className="mt-4 flex justify-center space-x-4">
            <Link href="/privacy-policy" className="hover:text-secondary transition duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-secondary transition duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 