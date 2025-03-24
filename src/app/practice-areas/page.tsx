import BaseLayout from "@/components/layout/BaseLayout";
import PracticeAreaCard from "@/components/ui/PracticeAreaCard";
import Link from "next/link";
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
      description: "We help clients recover compensation for injuries caused by the negligence of others, including car accidents, slip and falls, and medical malpractice.",
      slug: "personal-injury",
      icon: "/images/icons/personal-injury.png",
      content: "Our personal injury attorneys have decades of combined experience helping victims of accidents receive the compensation they deserve. We handle all types of injury cases, including car accidents, truck accidents, motorcycle accidents, slip and falls, workplace injuries, medical malpractice, and wrongful death claims. We work on a contingency fee basis, which means you don't pay unless we win your case."
    },
    {
      id: "2",
      title: "Family Law",
      description: "Our family law practice covers divorce, child custody, support, adoption, and all matters related to family relationships.",
      slug: "family-law",
      icon: "/images/icons/family-law.png",
      content: "Family legal matters can be emotionally challenging and complex. Our compassionate family law attorneys provide guidance and representation for divorce proceedings, child custody and support negotiations, alimony claims, adoption processes, and domestic violence protection. We focus on achieving solutions that protect your interests and the well-being of your family."
    },
    {
      id: "3",
      title: "Criminal Defense",
      description: "We provide vigorous defense for those accused of crimes, protecting their rights and working for the best possible outcome.",
      slug: "criminal-defense",
      icon: "/images/icons/criminal-defense.png",
      content: "If you're facing criminal charges, having an experienced defense attorney is crucial. Our criminal defense team handles cases ranging from misdemeanors to serious felonies, including DUI/DWI, drug offenses, theft, assault, white-collar crimes, and federal charges. We'll investigate your case thoroughly, protect your constitutional rights, and build a strong defense strategy."
    },
    {
      id: "4",
      title: "Estate Planning",
      description: "Our estate planning services help clients prepare for the future, including wills, trusts, and power of attorney arrangements.",
      slug: "estate-planning",
      icon: "/images/icons/estate-planning.png",
      content: "Proper estate planning ensures your wishes are carried out and your loved ones are protected. Our estate planning attorneys assist with creating comprehensive wills, establishing various types of trusts, designating powers of attorney, preparing advance healthcare directives, minimizing estate taxes, and guiding families through probate proceedings when necessary."
    },
    {
      id: "5",
      title: "Real Estate Law",
      description: "We handle real estate transactions, disputes, landlord-tenant issues, and property development matters.",
      slug: "real-estate-law",
      icon: "/images/icons/real-estate-law.png",
      content: "Our real estate attorneys represent buyers, sellers, developers, landlords, and tenants in all aspects of real estate law. We assist with property transactions, lease agreements, zoning issues, boundary disputes, construction contracts, title examinations, foreclosures, and real estate litigation. Our goal is to protect your property interests and ensure smooth real estate dealings."
    },
    {
      id: "6",
      title: "Business Law",
      description: "Our business law services include formation, contracts, employment issues, and litigation for businesses of all sizes.",
      slug: "business-law",
      icon: "/images/icons/business-law.png",
      content: "From startups to established corporations, our business attorneys provide comprehensive legal services to help your company thrive. We advise on business formation and structure, draft and review contracts, handle employment matters, assist with mergers and acquisitions, protect intellectual property, ensure regulatory compliance, and represent businesses in litigation when disputes arise."
    },
    {
      id: "7",
      title: "Immigration Law",
      description: "We guide individuals and families through the complex immigration system, helping them achieve their goals in the United States.",
      slug: "immigration-law",
      icon: "/images/icons/immigration-law.png",
      content: "Navigating the U.S. immigration system can be overwhelming. Our immigration attorneys assist with family-based petitions, employment visas, green card applications, naturalization processes, asylum claims, deportation defense, and DACA renewals. We stay current on changing immigration policies to provide you with accurate, up-to-date advice and representation."
    },
    {
      id: "8",
      title: "Bankruptcy Law",
      description: "Our bankruptcy attorneys help individuals and businesses find debt relief solutions and fresh financial starts.",
      slug: "bankruptcy-law",
      icon: "/images/icons/bankruptcy-law.png",
      content: "Financial difficulties can happen to anyone. Our bankruptcy lawyers provide compassionate, judgment-free assistance to clients seeking debt relief. We help determine if Chapter 7, Chapter 11, or Chapter 13 bankruptcy is right for your situation, guide you through the filing process, represent you at creditor meetings, and work to protect your assets while giving you a path to financial recovery."
    }
  ]
};

export default function PracticeAreasPage() {
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
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Practice Areas</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Our team of experienced attorneys offers comprehensive legal services across a wide range of practice areas.
          </p>
        </div>
      </div>

      {/* Practice Areas Overview */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-primary">
              Legal Expertise You Can Trust
            </h2>
            <div className="h-1 w-20 bg-secondary mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              At {lawFirmData.name}, we offer expert legal representation across multiple practice areas. 
              Our attorneys bring deep knowledge and experience to every case, ensuring you receive the
              highest quality legal services tailored to your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {lawFirmData.practiceAreas.map((area) => (
              <PracticeAreaCard
                key={area.id}
                title={area.title}
                description={area.description}
                slug={area.slug}
                icon={area.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Practice Areas */}
      {lawFirmData.practiceAreas.map((area, index) => (
        <section 
          key={area.id} 
          id={area.slug}
          className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} py-16`}
        >
          <div className="container-custom">
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}>
              <div className={index % 2 === 1 ? 'order-2 md:order-1' : ''}>
                <h2 className="text-3xl font-serif font-bold mb-6 text-primary">
                  {area.title}
                </h2>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  {area.content}
                </p>
                <Link
                  href={`/contact?area=${area.slug}`}
                  className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded transition duration-300"
                >
                  Discuss Your Case
                </Link>
              </div>
              <div className={`relative h-64 rounded-lg overflow-hidden shadow-xl ${
                index % 2 === 1 ? 'order-1 md:order-2' : ''
              }`}>
                <div className="bg-gray-300 w-full h-full"></div>
                {/* In real implementation, this would be an actual image */}
                {/* <Image
                  src={`/images/practice-areas/${area.slug}.jpg`}
                  alt={area.title}
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
            Need Legal Assistance?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Contact our team today to schedule a consultation with an attorney specialized in your area of need.
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