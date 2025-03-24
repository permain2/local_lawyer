"use client";

import { useState } from "react";
import GeneratorForm from "./forms/GeneratorForm";
import { GeneratorInput } from "@/lib/utils/generator";
import Link from "next/link";
import Image from "next/image";

export default function MainGenerator() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{
    deploymentUrl: string;
    data: any;
  } | null>(null);

  const handleSubmit = async (data: GeneratorInput) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to generate website");
      }
      
      const result = await response.json();
      setResult(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {result ? (
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center bg-green-100 text-green-800 rounded-full p-4 mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-serif font-bold mb-4 text-primary">
              Website Generated Successfully!
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Your law firm website has been generated and deployed.
            </p>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-serif font-bold mb-4 text-primary">
              Your Website URL
            </h3>
            <div className="flex items-center justify-center bg-gray-100 p-4 rounded-lg break-all">
              <Link
                href={result.deploymentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                {result.deploymentUrl}
              </Link>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <button
              onClick={() => setResult(null)}
              className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded transition duration-300"
            >
              Generate Another Website
            </button>
          </div>
        </div>
      ) : (
        <>
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
              {error}
            </div>
          )}
          
          <GeneratorForm onSubmit={handleSubmit} isLoading={isLoading} />
        </>
      )}
    </div>
  );
} 