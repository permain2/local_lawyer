import BaseLayout from "@/components/layout/BaseLayout";
import Link from "next/link";
import Image from "next/image";

// Using the same sample data from the homepage for consistency with blog posts
const lawFirmData = {
  name: "Madison & Associates",
  address: "123 Legal Street, City, State 12345",
  phone: "(555) 123-4567",
  email: "info@madisonlaw.com",
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
    },
    {
      id: "4",
      title: "Navigating Divorce: A Step-by-Step Guide",
      excerpt: "Divorce can be emotionally and legally complex. This guide walks you through the process and explains important considerations to protect your interests.",
      content: "Full blog post content would go here...",
      slug: "navigating-divorce-guide",
      date: "2023-04-22",
      author: "Jennifer Madison",
      image: "/images/blog/divorce.jpg",
      categories: ["Family Law", "Divorce"]
    },
    {
      id: "5",
      title: "Recent Changes to Immigration Law: What Immigrants Need to Know",
      excerpt: "Immigration laws frequently change. Stay informed about recent updates that may affect your status, application process, or rights in the United States.",
      content: "Full blog post content would go here...",
      slug: "recent-immigration-law-changes",
      date: "2023-04-05",
      author: "Lisa Thompson",
      image: "/images/blog/immigration.jpg",
      categories: ["Immigration Law", "Legal Updates"]
    },
    {
      id: "6",
      title: "Business Contracts: Common Pitfalls to Avoid",
      excerpt: "Poorly drafted contracts can lead to disputes and legal issues. Learn about common contract pitfalls and how to protect your business interests.",
      content: "Full blog post content would go here...",
      slug: "business-contract-pitfalls",
      date: "2023-03-18",
      author: "David Rodriguez",
      image: "/images/blog/business-contracts.jpg",
      categories: ["Business Law", "Legal Tips"]
    }
  ],
  categories: [
    "Personal Injury",
    "Family Law",
    "Criminal Defense",
    "Estate Planning",
    "Business Law",
    "Immigration Law",
    "Legal Tips",
    "Legal Updates",
    "Divorce"
  ]
};

function formatDate(dateString: string) {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
}

export default function BlogPage() {
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
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Legal Blog</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Stay informed with insights and updates from our legal experts.
          </p>
        </div>
      </div>

      {/* Blog Content */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="space-y-12">
                {lawFirmData.blogPosts.map((post) => (
                  <article key={post.id} className="border-b border-gray-200 pb-12 last:border-0">
                    <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                      <div className="bg-gray-300 w-full h-full"></div>
                      {/* In real implementation, this would be an actual image */}
                      {/* <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      /> */}
                    </div>
                    <div className="mb-4">
                      {post.categories.map((category, index) => (
                        <Link 
                          key={index}
                          href={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                          className="bg-gray-100 text-primary text-sm px-3 py-1 rounded mr-2 hover:bg-gray-200 transition duration-200"
                        >
                          {category}
                        </Link>
                      ))}
                    </div>
                    <h2 className="text-2xl font-serif font-bold mb-3 text-primary">
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="hover:text-secondary transition duration-200"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    <div className="text-gray-500 mb-4 text-sm">
                      <span>By {post.author}</span>
                      <span className="mx-2">•</span>
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <p className="text-gray-700 mb-4">
                      {post.excerpt}
                    </p>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-secondary hover:text-secondary/80 font-medium inline-flex items-center transition duration-200"
                    >
                      Read More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Categories */}
              <div className="bg-gray-100 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-serif font-bold mb-4 text-primary">Categories</h3>
                <ul className="space-y-2">
                  {lawFirmData.categories.map((category, index) => (
                    <li key={index}>
                      <Link
                        href={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-gray-700 hover:text-secondary transition duration-200 flex items-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-2 text-secondary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                        {category}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Recent Posts */}
              <div className="bg-gray-100 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-serif font-bold mb-4 text-primary">Recent Posts</h3>
                <ul className="space-y-4">
                  {lawFirmData.blogPosts.slice(0, 3).map((post) => (
                    <li key={post.id} className="border-b border-gray-200 pb-4 last:border-0">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:text-secondary transition duration-200"
                      >
                        <h4 className="font-medium text-primary mb-1">{post.title}</h4>
                        <p className="text-sm text-gray-500">{formatDate(post.date)}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* CTA */}
              <div className="bg-primary p-6 rounded-lg text-white">
                <h3 className="text-xl font-serif font-bold mb-4">Need Legal Help?</h3>
                <p className="mb-6">Contact our team to schedule a consultation with an experienced attorney.</p>
                <Link
                  href="/contact"
                  className="bg-secondary hover:bg-secondary/90 text-white font-medium py-2 px-4 rounded inline-block transition duration-300 w-full text-center"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Subscribe Section */}
      <section className="bg-gray-100 py-16">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-4 text-primary">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-700 mb-8">
              Stay updated with the latest legal news, tips, and insights from our team of experts.
            </p>
            <form className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow px-4 py-3 rounded focus:outline-none focus:border-primary border border-gray-300"
                required
              />
              <button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded transition duration-300"
              >
                Subscribe
              </button>
            </form>
            <p className="text-gray-500 text-sm mt-4">
              We respect your privacy. You can unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
} 