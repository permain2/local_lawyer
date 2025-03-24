import BaseLayout from "@/components/layout/BaseLayout";
import ContactForm from "@/components/forms/ContactForm";
import Image from "next/image";

// Using the same sample data from the homepage for consistency
const lawFirmData = {
  name: "Madison & Associates",
  address: "123 Legal Street, City, State 12345",
  phone: "(555) 123-4567",
  email: "info@madisonlaw.com",
  practiceAreas: [
    {
      id: "1",
      title: "Personal Injury",
      description: "We help clients recover compensation for injuries caused by the negligence of others.",
      slug: "personal-injury"
    },
    {
      id: "2",
      title: "Family Law",
      description: "Our family law practice covers divorce, child custody, and adoption.",
      slug: "family-law"
    },
    {
      id: "3",
      title: "Criminal Defense",
      description: "We provide vigorous defense for those accused of crimes.",
      slug: "criminal-defense"
    },
    {
      id: "4",
      title: "Estate Planning",
      description: "Our estate planning services help clients prepare for the future.",
      slug: "estate-planning"
    }
  ]
};

export default function ContactPage() {
  return (
    <BaseLayout
      firmName={lawFirmData.name}
      address={lawFirmData.address}
      phone={lawFirmData.phone}
      email={lawFirmData.email}
    >
      {/* Page Title */}
      <div className="bg-primary text-white py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Contact Us</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            We're here to help with your legal needs. Get in touch with our team today.
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-gray-100 p-8 rounded-lg shadow-lg h-full">
                <h2 className="text-2xl font-serif font-bold mb-6 text-primary">Contact Information</h2>
                
                <div className="mb-8">
                  <h3 className="text-lg font-serif font-bold mb-4 text-primary">Office Address</h3>
                  <p className="flex items-start mb-2">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-6 w-6 text-secondary mr-3 mt-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                      />
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                      />
                    </svg>
                    <span className="text-gray-700">{lawFirmData.address}</span>
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-lg font-serif font-bold mb-4 text-primary">Contact Details</h3>
                  <p className="flex items-start mb-4">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-6 w-6 text-secondary mr-3 mt-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                      />
                    </svg>
                    <span className="text-gray-700">{lawFirmData.phone}</span>
                  </p>
                  <p className="flex items-start">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-6 w-6 text-secondary mr-3 mt-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                      />
                    </svg>
                    <span className="text-gray-700">{lawFirmData.email}</span>
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-serif font-bold mb-4 text-primary">Office Hours</h3>
                  <p className="flex items-start mb-2">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-6 w-6 text-secondary mr-3 mt-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
                      />
                    </svg>
                    <span className="text-gray-700">
                      <strong>Monday - Friday:</strong> 9:00 AM - 5:00 PM<br />
                      <strong>Saturday:</strong> By Appointment<br />
                      <strong>Sunday:</strong> Closed
                    </span>
                  </p>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-serif font-bold mb-6 text-primary">Send Us a Message</h2>
              <p className="text-gray-700 mb-8">
                Fill out the form below to get in touch with our team. We'll get back to you as soon as possible.
              </p>
              
              <ContactForm 
                practiceAreas={lawFirmData.practiceAreas.map((area) => area.title)}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="bg-gray-100 py-12">
        <div className="container-custom">
          <h2 className="text-2xl font-serif font-bold mb-8 text-primary text-center">Our Location</h2>
          <div className="h-96 bg-gray-300 rounded-lg shadow-lg overflow-hidden">
            {/* In a real implementation, this would be a Google Map */}
            {/* <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d-123.4567!3d12.3456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDE1JzQ0LjEiTiAxMjPCsDI3JzI0LjEiVw!5e0!3m2!1sen!2sus!4v1234567890!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            /> */}
          </div>
        </div>
      </section>
    </BaseLayout>
  );
} 