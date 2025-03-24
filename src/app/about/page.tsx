import BaseLayout from "@/components/layout/BaseLayout";
import Image from "next/image";
import Link from "next/link";

// Using the same sample data from the homepage for consistency
const lawFirmData = {
  name: "Madison & Associates",
  address: "123 Legal Street, City, State 12345",
  phone: "(555) 123-4567",
  email: "info@madisonlaw.com",
  about: {
    headline: "We're dedicated to delivering justice and peace of mind.",
    mission: "Our mission is to provide exceptional legal representation with integrity and compassion.",
    vision: "Our vision is to be the most trusted law firm in our community, known for our commitment to our clients and the highest ethical standards.",
    values: [
      "Integrity in all our dealings",
      "Compassion for our clients",
      "Excellence in legal representation",
      "Commitment to justice",
      "Respect for all individuals"
    ],
    sections: [
      {
        title: "Our History",
        content: "Madison & Associates was founded in 2005 by Jennifer Madison with a vision to create a law firm that truly puts clients first. What began as a small practice has grown into a respected firm with a team of dedicated attorneys serving clients throughout the region. Throughout our growth, we've maintained our commitment to personal attention and exceptional service.",
        image: "/images/about/history.jpg"
      },
      {
        title: "Our Approach",
        content: "We believe in taking a personalized approach to each case. We understand that legal matters can be stressful, which is why we focus on clear communication and transparency throughout the process. Our attorneys work closely with clients to understand their goals and develop strategies tailored to their specific needs.",
        image: "/images/about/approach.jpg"
      },
      {
        title: "Community Involvement",
        content: "Madison & Associates is deeply committed to giving back to our community. Our attorneys and staff regularly volunteer with local organizations, provide pro bono legal services, and support community initiatives. We believe that our success comes with a responsibility to contribute to the well-being of the community we serve.",
        image: "/images/about/community.jpg"
      }
    ]
  }
};

export default function AboutPage() {
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
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">About Our Firm</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            {lawFirmData.about.headline}
          </p>
        </div>
      </div>

      {/* Mission, Vision, Values */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6 text-primary">Our Mission</h2>
              <p className="text-gray-700 mb-8 text-lg">
                {lawFirmData.about.mission}
              </p>
              
              <h2 className="text-3xl font-serif font-bold mb-6 text-primary">Our Vision</h2>
              <p className="text-gray-700 mb-8 text-lg">
                {lawFirmData.about.vision}
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-serif font-bold mb-6 text-primary">Our Values</h2>
              <ul className="space-y-4">
                {lawFirmData.about.values?.map((value, index) => (
                  <li key={index} className="flex items-start">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-6 w-6 text-secondary mr-2 mt-1 flex-shrink-0" 
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
                    <span className="text-gray-700">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      {lawFirmData.about.sections?.map((section, index) => (
        <section 
          key={index} 
          className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} section-padding`}
        >
          <div className="container-custom">
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}>
              <div className={index % 2 === 1 ? 'order-2 md:order-1' : ''}>
                <h2 className="text-3xl font-serif font-bold mb-6 text-primary">
                  {section.title}
                </h2>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  {section.content}
                </p>
              </div>
              <div className={`relative h-96 rounded-lg overflow-hidden shadow-xl ${
                index % 2 === 1 ? 'order-1 md:order-2' : ''
              }`}>
                <div className="bg-gray-300 w-full h-full"></div>
                {/* In real implementation, this would be an actual image */}
                {/* <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className="object-cover"
                /> */}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="bg-primary text-white section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Contact our team today to schedule a consultation and learn how we can help with your legal needs.
          </p>
          <Link
            href="/contact"
            className="bg-secondary hover:bg-secondary/90 text-white font-medium py-4 px-8 rounded inline-block transition duration-300"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </BaseLayout>
  );
} 