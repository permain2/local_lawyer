"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface HeaderProps {
  firmName: string;
  logo?: string;
}

export default function Header({ firmName, logo }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-primary text-white">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {logo ? (
              <Image 
                src={logo} 
                alt={`${firmName} logo`} 
                width={180} 
                height={60} 
                className="mr-4"
              />
            ) : (
              <h1 className="text-xl md:text-2xl font-serif font-bold">{firmName}</h1>
            )}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-secondary transition duration-200">
              Home
            </Link>
            <Link href="/about" className="hover:text-secondary transition duration-200">
              About
            </Link>
            <Link href="/practice-areas" className="hover:text-secondary transition duration-200">
              Practice Areas
            </Link>
            <Link href="/attorneys" className="hover:text-secondary transition duration-200">
              Attorneys
            </Link>
            <Link href="/blog" className="hover:text-secondary transition duration-200">
              Blog
            </Link>
            <Link href="/contact" className="hover:text-secondary transition duration-200">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              className="w-6 h-6"
            >
              {isMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden flex flex-col space-y-4 py-4">
            <Link 
              href="/" 
              className="hover:text-secondary transition duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="hover:text-secondary transition duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/practice-areas" 
              className="hover:text-secondary transition duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Practice Areas
            </Link>
            <Link 
              href="/attorneys" 
              className="hover:text-secondary transition duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Attorneys
            </Link>
            <Link 
              href="/blog" 
              className="hover:text-secondary transition duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              href="/contact" 
              className="hover:text-secondary transition duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
} 