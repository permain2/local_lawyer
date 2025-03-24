"use client";

import { useState, FormEvent } from "react";
import { GeneratorInput } from "@/lib/utils/generator";

interface GeneratorFormProps {
  onSubmit: (data: GeneratorInput) => Promise<void>;
  isLoading: boolean;
}

export default function GeneratorForm({ onSubmit, isLoading }: GeneratorFormProps) {
  const [formData, setFormData] = useState<GeneratorInput>({
    firmName: "",
    address: "",
    phone: "",
    email: "",
    attorneys: [
      {
        name: "",
        title: "",
        bio: ""
      }
    ],
    practiceAreas: [
      {
        title: "",
        description: ""
      }
    ],
    testimonials: [
      {
        name: "",
        position: "",
        content: ""
      }
    ],
    heroTitle: "",
    heroSubtitle: ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    section?: string,
    index?: number,
    field?: string
  ) => {
    const { name, value } = e.target;

    if (section && typeof index === "number" && field) {
      // Update nested array fields (attorneys, practice areas, testimonials)
      setFormData((prev) => {
        const newData = { ...prev };
        (newData[section as keyof GeneratorInput] as any)[index][field] = value;
        return newData;
      });
    } else {
      // Update top-level fields
      setFormData((prev) => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const addItem = (section: "attorneys" | "practiceAreas" | "testimonials") => {
    setFormData((prev) => {
      const newData = { ...prev };
      
      if (section === "attorneys") {
        newData.attorneys = [
          ...(prev.attorneys || []),
          { name: "", title: "", bio: "" }
        ];
      } else if (section === "practiceAreas") {
        newData.practiceAreas = [
          ...(prev.practiceAreas || []),
          { title: "", description: "" }
        ];
      } else if (section === "testimonials") {
        newData.testimonials = [
          ...(prev.testimonials || []),
          { name: "", position: "", content: "" }
        ];
      }
      
      return newData;
    });
  };

  const removeItem = (section: "attorneys" | "practiceAreas" | "testimonials", index: number) => {
    setFormData((prev) => {
      const newData = { ...prev };
      
      if (section === "attorneys" && prev.attorneys && prev.attorneys.length > 1) {
        newData.attorneys = prev.attorneys.filter((_, i) => i !== index);
      } else if (section === "practiceAreas" && prev.practiceAreas && prev.practiceAreas.length > 1) {
        newData.practiceAreas = prev.practiceAreas.filter((_, i) => i !== index);
      } else if (section === "testimonials" && prev.testimonials && prev.testimonials.length > 1) {
        newData.testimonials = prev.testimonials.filter((_, i) => i !== index);
      }
      
      return newData;
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Basic Information */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-serif font-bold mb-4 text-primary">Basic Information</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firmName" className="block text-gray-700 font-medium mb-2">
              Firm Name *
            </label>
            <input
              type="text"
              id="firmName"
              name="firmName"
              value={formData.firmName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
              placeholder="e.g., Smith & Associates"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
              placeholder="e.g., info@smithlaw.com"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
              placeholder="e.g., (555) 123-4567"
            />
          </div>
          
          <div>
            <label htmlFor="address" className="block text-gray-700 font-medium mb-2">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
              placeholder="e.g., 123 Legal Street, City, State 12345"
            />
          </div>
        </div>
      </div>
      
      {/* Hero Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-serif font-bold mb-4 text-primary">Hero Section</h2>
        
        <div className="space-y-6">
          <div>
            <label htmlFor="heroTitle" className="block text-gray-700 font-medium mb-2">
              Hero Title
            </label>
            <input
              type="text"
              id="heroTitle"
              name="heroTitle"
              value={formData.heroTitle}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
              placeholder="e.g., Experienced Legal Representation When You Need It Most"
            />
          </div>
          
          <div>
            <label htmlFor="heroSubtitle" className="block text-gray-700 font-medium mb-2">
              Hero Subtitle
            </label>
            <input
              type="text"
              id="heroSubtitle"
              name="heroSubtitle"
              value={formData.heroSubtitle}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
              placeholder="e.g., Our attorneys are dedicated to fighting for your rights"
            />
          </div>
        </div>
      </div>
      
      {/* Attorneys */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-serif font-bold text-primary">Attorneys</h2>
          <button
            type="button"
            onClick={() => addItem("attorneys")}
            className="bg-secondary hover:bg-secondary/90 text-white font-medium py-2 px-4 rounded text-sm"
          >
            Add Attorney
          </button>
        </div>
        
        {formData.attorneys?.map((attorney, index) => (
          <div key={index} className="p-4 border border-gray-200 rounded-lg mb-4">
            <div className="flex justify-between mb-2">
              <h3 className="font-medium">Attorney {index + 1}</h3>
              {formData.attorneys && formData.attorneys.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeItem("attorneys", index)}
                  className="text-red-500 hover:text-red-700 text-sm"
                >
                  Remove
                </button>
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={attorney.name}
                  onChange={(e) => handleChange(e, "attorneys", index, "name")}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
                  placeholder="e.g., John Smith"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Title
                </label>
                <input
                  type="text"
                  value={attorney.title}
                  onChange={(e) => handleChange(e, "attorneys", index, "title")}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
                  placeholder="e.g., Partner"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Bio
              </label>
              <textarea
                value={attorney.bio}
                onChange={(e) => handleChange(e, "attorneys", index, "bio")}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
                rows={3}
                placeholder="e.g., John has over 15 years of experience in personal injury law..."
              />
            </div>
          </div>
        ))}
      </div>
      
      {/* Practice Areas */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-serif font-bold text-primary">Practice Areas</h2>
          <button
            type="button"
            onClick={() => addItem("practiceAreas")}
            className="bg-secondary hover:bg-secondary/90 text-white font-medium py-2 px-4 rounded text-sm"
          >
            Add Practice Area
          </button>
        </div>
        
        {formData.practiceAreas?.map((area, index) => (
          <div key={index} className="p-4 border border-gray-200 rounded-lg mb-4">
            <div className="flex justify-between mb-2">
              <h3 className="font-medium">Practice Area {index + 1}</h3>
              {formData.practiceAreas && formData.practiceAreas.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeItem("practiceAreas", index)}
                  className="text-red-500 hover:text-red-700 text-sm"
                >
                  Remove
                </button>
              )}
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Title
                </label>
                <input
                  type="text"
                  value={area.title}
                  onChange={(e) => handleChange(e, "practiceAreas", index, "title")}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
                  placeholder="e.g., Personal Injury"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Description
                </label>
                <textarea
                  value={area.description}
                  onChange={(e) => handleChange(e, "practiceAreas", index, "description")}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
                  rows={3}
                  placeholder="e.g., We help clients recover compensation for injuries caused by the negligence of others..."
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Testimonials */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-serif font-bold text-primary">Testimonials</h2>
          <button
            type="button"
            onClick={() => addItem("testimonials")}
            className="bg-secondary hover:bg-secondary/90 text-white font-medium py-2 px-4 rounded text-sm"
          >
            Add Testimonial
          </button>
        </div>
        
        {formData.testimonials?.map((testimonial, index) => (
          <div key={index} className="p-4 border border-gray-200 rounded-lg mb-4">
            <div className="flex justify-between mb-2">
              <h3 className="font-medium">Testimonial {index + 1}</h3>
              {formData.testimonials && formData.testimonials.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeItem("testimonials", index)}
                  className="text-red-500 hover:text-red-700 text-sm"
                >
                  Remove
                </button>
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={testimonial.name}
                  onChange={(e) => handleChange(e, "testimonials", index, "name")}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
                  placeholder="e.g., Jane Doe"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Position
                </label>
                <input
                  type="text"
                  value={testimonial.position}
                  onChange={(e) => handleChange(e, "testimonials", index, "position")}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
                  placeholder="e.g., Personal Injury Client"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Content
              </label>
              <textarea
                value={testimonial.content}
                onChange={(e) => handleChange(e, "testimonials", index, "content")}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
                rows={3}
                placeholder="e.g., The team at Smith & Associates provided exceptional service during my case..."
              />
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center">
        <button
          type="submit"
          disabled={isLoading}
          className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded transition duration-300 min-w-[200px] flex items-center justify-center"
        >
          {isLoading ? (
            <>
              <svg 
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24"
              >
                <circle 
                  className="opacity-25" 
                  cx="12" 
                  cy="12" 
                  r="10" 
                  stroke="currentColor" 
                  strokeWidth="4"
                />
                <path 
                  className="opacity-75" 
                  fill="currentColor" 
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Generating...
            </>
          ) : (
            "Generate Website"
          )}
        </button>
      </div>
    </form>
  );
} 