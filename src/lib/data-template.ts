import { LawFirmData } from './types/lawfirm';

export const lawFirmTemplate: LawFirmData = {
  name: "Madison & Associates",
  logo: "/images/logo.png",
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
  },
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
    }
  ],
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
    }
  ],
  testimonials: [
    {
      id: "1",
      name: "Robert Williams",
      position: "Personal Injury Client",
      content: "Jennifer and her team went above and beyond to help me after my accident. They were compassionate, professional, and got me the compensation I deserved.",
      rating: 5
    },
    {
      id: "2",
      name: "Maria Garcia",
      position: "Family Law Client",
      content: "Going through a divorce was incredibly difficult, but Madison & Associates made the legal process as smooth as possible. I'm grateful for their guidance.",
      rating: 5
    },
    {
      id: "3",
      name: "David Thompson",
      position: "Criminal Defense Client",
      content: "Michael's expertise and dedication to my case resulted in a favorable outcome that I didn't think was possible. I highly recommend this firm.",
      rating: 5
    }
  ],
  blogPosts: [
    {
      id: "1",
      title: "Understanding Personal Injury Claims: What You Need to Know",
      excerpt: "If you've been injured due to someone else's negligence, you may be entitled to compensation. Learn about the personal injury claim process and what to expect.",
      content: "Full blog post content would go here...",
      slug: "understanding-personal-injury-claims",
      date: "2023-06-15",
      author: "Jennifer Madison",
      image: "/images/blog/personal-injury.jpg",
      categories: ["Personal Injury", "Legal Tips"]
    },
    {
      id: "2",
      title: "5 Essential Estate Planning Documents Everyone Should Have",
      excerpt: "Proper estate planning is crucial for protecting your assets and ensuring your wishes are carried out. Learn about the five essential documents you should include in your estate plan.",
      content: "Full blog post content would go here...",
      slug: "essential-estate-planning-documents",
      date: "2023-05-28",
      author: "Sarah Johnson",
      image: "/images/blog/estate-planning.jpg",
      categories: ["Estate Planning", "Legal Tips"]
    },
    {
      id: "3",
      title: "What to Do If You're Facing Criminal Charges",
      excerpt: "Being charged with a crime can be overwhelming. Learn about important steps to take immediately after being charged and how a criminal defense attorney can help.",
      content: "Full blog post content would go here...",
      slug: "facing-criminal-charges",
      date: "2023-05-10",
      author: "Michael Chen",
      image: "/images/blog/criminal-defense.jpg",
      categories: ["Criminal Defense", "Legal Tips"]
    }
  ],
  homepageContent: {
    hero: {
      title: "Strong Legal Representation When You Need It Most",
      subtitle: "Our experienced attorneys are committed to fighting for your rights and delivering the justice you deserve.",
      backgroundImage: "/images/hero-background.jpg",
      ctaText: "Free Consultation",
      ctaLink: "/contact",
      secondaryCtaText: "Learn More",
      secondaryCtaLink: "/about"
    },
    aboutSection: {
      title: "About Our Firm",
      content: "Madison & Associates was founded with a commitment to providing exceptional legal representation with integrity and compassion. Our team of experienced attorneys is dedicated to fighting for your rights and helping you navigate complex legal matters.",
      image: "/images/about/firm.jpg"
    },
    featuredPracticeAreas: ["1", "2", "3", "4"],
    featuredAttorneys: ["1", "2", "3"],
    featuredTestimonials: ["1", "2", "3"]
  },
  seo: {
    title: "Madison & Associates | Experienced Law Firm",
    description: "Madison & Associates is a trusted law firm providing expert legal representation in personal injury, family law, criminal defense, and estate planning.",
    keywords: ["law firm", "attorney", "personal injury", "family law", "criminal defense", "estate planning"]
  }
}; 