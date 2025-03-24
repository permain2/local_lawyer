import BaseLayout from "@/components/layout/BaseLayout";
import AttorneyCard from "@/components/ui/AttorneyCard";
import Link from "next/link";
import Image from "next/image";

// Using the same sample data from the homepage for consistency with expanded attorney info
const lawFirmData = {
  name: "Madison & Associates",
  address: "123 Legal Street, City, State 12345",
  phone: "(555) 123-4567",
  email: "info@madisonlaw.com",
  attorneys: [
    {
      id: "1",
      name: "Jennifer Madison",
      title: "Founding Partner",
      image: "/images/attorneys/attorney1.jpg",
      bio: "Jennifer has over 20 years of experience in personal injury and family law, with a proven track record of successful outcomes.",
      slug: "jennifer-madison",
      fullBio: "Jennifer Madison founded Madison & Associates in 2005 after spending 15 years at one of the region's most prestigious law firms. With over two decades of legal experience, she has established herself as a leading attorney in personal injury and family law. Jennifer has secured millions of dollars in settlements for her clients and has been recognized by numerous legal organizations for her exceptional advocacy and dedication to her clients.",
      education: [
        "J.D., Harvard Law School, cum laude",
        "B.A. in Political Science, Yale University, magna cum laude"
      ],
      barAdmissions: [
        "State Bar of California",
        "U.S. District Court, Northern District of California",
        "U.S. Court of Appeals, Ninth Circuit"
      ],
      awards: [
        "Super Lawyers, 2015-2023",
        "Top 100 Trial Lawyers, National Trial Lawyers Association",
        "AV Preeminent Rating, Martindale-Hubbell"
      ],
      practiceAreas: [
        "Personal Injury",
        "Family Law"
      ],
      socialLinks: [
        { platform: "linkedin", url: "https://linkedin.com" },
        { platform: "twitter", url: "https://twitter.com" }
      ]
    },
    {
      id: "2",
      name: "Michael Chen",
      title: "Senior Partner",
      image: "/images/attorneys/attorney2.jpg",
      bio: "Michael specializes in criminal defense and has successfully defended clients in over 100 jury trials.",
      slug: "michael-chen",
      fullBio: "Michael Chen joined Madison & Associates in 2008 and became a Senior Partner in 2015. With a background as a former prosecutor, Michael brings invaluable insight to his criminal defense practice. He has successfully defended clients in over 100 jury trials, ranging from misdemeanors to serious felonies. Michael is known for his thorough case preparation, strategic negotiation skills, and powerful courtroom presence.",
      education: [
        "J.D., Stanford Law School",
        "B.S. in Criminal Justice, University of California, Berkeley"
      ],
      barAdmissions: [
        "State Bar of California",
        "U.S. District Court, Central District of California"
      ],
      awards: [
        "Top 10 Criminal Defense Attorneys, American Jurist Institute",
        "Rising Stars, Super Lawyers, 2010-2015",
        "Distinguished Service Award, Criminal Defense Bar Association"
      ],
      practiceAreas: [
        "Criminal Defense",
        "DUI Defense",
        "White Collar Crime"
      ],
      socialLinks: [
        { platform: "linkedin", url: "https://linkedin.com" }
      ]
    },
    {
      id: "3",
      name: "Sarah Johnson",
      title: "Associate Attorney",
      image: "/images/attorneys/attorney3.jpg",
      bio: "Sarah focuses on estate planning and elder law, helping clients secure their assets and plan for the future.",
      slug: "sarah-johnson",
      fullBio: "Sarah Johnson joined Madison & Associates in 2018 after working at a boutique estate planning firm. She specializes in helping individuals and families plan for the future through comprehensive estate planning strategies. Sarah is particularly passionate about elder law and has developed expertise in addressing the unique legal needs of seniors and their families. Her compassionate approach and attention to detail have earned her the trust and appreciation of her clients.",
      education: [
        "J.D., University of California, Los Angeles",
        "B.A. in Economics, University of Washington"
      ],
      barAdmissions: [
        "State Bar of California"
      ],
      awards: [
        "Rising Stars, Super Lawyers, 2020-2023",
        "Next Generation Lawyer, Legal 500"
      ],
      practiceAreas: [
        "Estate Planning",
        "Elder Law",
        "Probate",
        "Trust Administration"
      ],
      socialLinks: [
        { platform: "linkedin", url: "https://linkedin.com" },
        { platform: "facebook", url: "https://facebook.com" }
      ]
    },
    {
      id: "4",
      name: "David Rodriguez",
      title: "Partner",
      image: "/images/attorneys/attorney4.jpg",
      bio: "David specializes in business law and corporate litigation, representing businesses from startups to established corporations.",
      slug: "david-rodriguez",
      fullBio: "David Rodriguez joined Madison & Associates in 2010 and was named Partner in 2016. He specializes in business law and corporate litigation, bringing extensive experience in resolving complex business disputes and advising companies on legal matters. Before joining the firm, David worked as in-house counsel for a Fortune 500 company, giving him valuable insight into the practical business implications of legal decisions. His strategic approach has helped numerous businesses navigate challenging legal issues successfully.",
      education: [
        "J.D., Columbia Law School",
        "M.B.A., Columbia Business School",
        "B.S. in Business Administration, University of Southern California"
      ],
      barAdmissions: [
        "State Bar of California",
        "State Bar of New York",
        "U.S. District Court, Southern District of New York"
      ],
      awards: [
        "Best Lawyers in America, Business Litigation, 2018-2023",
        "Client Service Excellence Award, American Institute of Legal Counsel"
      ],
      practiceAreas: [
        "Business Law",
        "Corporate Litigation",
        "Mergers & Acquisitions",
        "Intellectual Property"
      ],
      socialLinks: [
        { platform: "linkedin", url: "https://linkedin.com" },
        { platform: "twitter", url: "https://twitter.com" }
      ]
    },
    {
      id: "5",
      name: "Lisa Thompson",
      title: "Associate Attorney",
      image: "/images/attorneys/attorney5.jpg",
      bio: "Lisa specializes in immigration law, helping individuals and families navigate the complex immigration system.",
      slug: "lisa-thompson",
      fullBio: "Lisa Thompson joined Madison & Associates in 2019 with a focus on immigration law. She is passionate about helping individuals and families navigate the complex U.S. immigration system. Lisa has successfully represented clients in a wide range of immigration matters, including family-based petitions, employment visas, asylum applications, and removal defense. She is fluent in Spanish and volunteers regularly with community organizations providing pro bono immigration services.",
      education: [
        "J.D., Georgetown University Law Center",
        "B.A. in International Relations, Boston University"
      ],
      barAdmissions: [
        "State Bar of California",
        "Executive Office for Immigration Review"
      ],
      awards: [
        "Pro Bono Award, Immigrant Legal Resource Center",
        "Rising Stars, Super Lawyers, 2022-2023"
      ],
      practiceAreas: [
        "Immigration Law",
        "Asylum and Refugee Law",
        "Naturalization and Citizenship"
      ],
      socialLinks: [
        { platform: "linkedin", url: "https://linkedin.com" },
        { platform: "twitter", url: "https://twitter.com" }
      ]
    },
    {
      id: "6",
      name: "Robert Williams",
      title: "Of Counsel",
      image: "/images/attorneys/attorney6.jpg",
      bio: "Robert has 30 years of experience in real estate law and provides strategic counsel on complex property transactions and disputes.",
      slug: "robert-williams",
      fullBio: "Robert Williams serves as Of Counsel at Madison & Associates, bringing 30 years of experience in real estate law. He provides strategic counsel on complex property transactions, development projects, and real estate litigation. Robert has represented clients in transactions valued at over $500 million throughout his career and has handled landmark cases that have shaped real estate law in the region. His deep knowledge and practical approach make him an invaluable resource for clients with sophisticated real estate needs.",
      education: [
        "J.D., University of Chicago Law School",
        "B.A. in Urban Planning, Northwestern University"
      ],
      barAdmissions: [
        "State Bar of California",
        "State Bar of Arizona",
        "U.S. District Court, District of Arizona"
      ],
      awards: [
        "Real Estate Lawyer of the Year, Best Lawyers, 2015",
        "Leading Real Estate Practitioner, Chambers USA",
        "Distinguished Service Award, State Bar Real Estate Section"
      ],
      practiceAreas: [
        "Real Estate Law",
        "Commercial Leasing",
        "Land Use and Zoning",
        "Real Estate Litigation"
      ],
      socialLinks: [
        { platform: "linkedin", url: "https://linkedin.com" }
      ]
    }
  ]
};

export default function AttorneysPage() {
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
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Attorneys</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Meet our team of experienced attorneys dedicated to providing exceptional legal representation.
          </p>
        </div>
      </div>

      {/* Attorneys Overview */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-primary">
              Legal Professionals Committed to Your Success
            </h2>
            <div className="h-1 w-20 bg-secondary mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our attorneys bring decades of combined experience across a wide range of practice areas.
              Each member of our team is committed to providing personalized attention and exceptional
              representation to every client.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lawFirmData.attorneys.map((attorney) => (
              <AttorneyCard
                key={attorney.id}
                name={attorney.name}
                title={attorney.title}
                image={attorney.image}
                bio={attorney.bio}
                slug={attorney.slug}
                socialLinks={attorney.socialLinks}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Firm Values */}
      <section className="bg-gray-100 section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-primary">
              Our Approach
            </h2>
            <div className="h-1 w-20 bg-secondary mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-primary mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-16 w-16 mx-auto" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" 
                  />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold mb-4 text-primary">
                Client-Centered Approach
              </h3>
              <p className="text-gray-700">
                We put our clients first, taking the time to understand your unique situation and goals.
                Our attorneys provide personalized attention and responsive communication throughout your case.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-primary mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-16 w-16 mx-auto" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" 
                  />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold mb-4 text-primary">
                Strategic Problem Solving
              </h3>
              <p className="text-gray-700">
                Our attorneys approach each case strategically, analyzing all aspects of your legal issue to
                develop effective solutions. We focus on both immediate needs and long-term implications.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-primary mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-16 w-16 mx-auto" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" 
                  />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold mb-4 text-primary">
                Extensive Experience
              </h3>
              <p className="text-gray-700">
                With decades of combined experience, our attorneys have the knowledge and skill to handle
                even the most complex legal matters. We stay current on legal developments to provide cutting-edge representation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Work With Our Team?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Contact us today to schedule a consultation with one of our experienced attorneys.
          </p>
          <Link
            href="/contact"
            className="bg-secondary hover:bg-secondary/90 text-white font-medium py-4 px-8 rounded inline-block transition duration-300"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </BaseLayout>
  );
} 