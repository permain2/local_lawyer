"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

export default function Hero({
  title,
  subtitle,
  backgroundImage = "/images/hero-background.jpg", // Default image
  ctaText = "Contact Us",
  ctaLink = "/contact",
  secondaryCtaText,
  secondaryCtaLink,
}: HeroProps) {
  return (
    <div className="relative min-h-[600px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {backgroundImage ? (
          <Image
            src={backgroundImage}
            alt="Law firm background"
            fill
            priority
            className="object-cover brightness-50"
          />
        ) : (
          <div className="bg-primary opacity-90 absolute inset-0" />
        )}
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-20">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
              {subtitle}
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={ctaLink}
              className="bg-secondary hover:bg-secondary/90 text-white font-medium py-4 px-8 rounded inline-block text-center transition duration-300"
            >
              {ctaText}
            </Link>
            {secondaryCtaText && secondaryCtaLink && (
              <Link
                href={secondaryCtaLink}
                className="bg-transparent hover:bg-white/10 text-white border border-white font-medium py-4 px-8 rounded inline-block text-center transition duration-300"
              >
                {secondaryCtaText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 