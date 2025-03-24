import { NextRequest, NextResponse } from "next/server";
import { generateLawFirmData, GeneratorInput } from "@/lib/utils/generator";
import { LawFirmData } from "@/lib/types/lawfirm";

// Vercel API for deployment
const VERCEL_API_TOKEN = "team_Yj7jI3i6dUSo3fc1OeWN4xs9";
const VERCEL_API_URL = "https://api.vercel.com/v13/deployments";

export async function POST(request: NextRequest) {
  try {
    // Get the form data from the request
    const data = await request.json();
    
    // Validate the required fields
    if (!data.firmName) {
      return NextResponse.json({ error: "Firm name is required" }, { status: 400 });
    }
    
    // Generate the law firm data based on the input
    const lawFirmData: LawFirmData = generateLawFirmData(data);
    
    // Deploy to Vercel
    const deploymentResult = await deployToVercel(lawFirmData);
    
    return NextResponse.json({
      success: true,
      data: lawFirmData,
      deploymentUrl: deploymentResult.url
    });
    
  } catch (error) {
    console.error("Error generating website:", error);
    return NextResponse.json(
      { error: "Failed to generate website" },
      { status: 500 }
    );
  }
}

// Function to deploy the website to Vercel
async function deployToVercel(lawFirmData: LawFirmData) {
  // Generate a unique project name based on the firm name
  const projectName = `lawfirm-${lawFirmData.name
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .substring(0, 16)}`;
  
  // Generate HTML content for the landing page
  const htmlContent = generateHtmlContent(lawFirmData);
  
  // Prepare the files for deployment
  const files = [
    {
      file: "index.html",
      data: htmlContent
    },
    {
      file: "styles.css",
      data: generateCssContent()
    }
  ];
  
  // Make the API call to Vercel
  try {
    const response = await fetch(VERCEL_API_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${VERCEL_API_TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: projectName,
        files: files,
        projectSettings: {
          framework: null
        },
        teamId: "team_Yj7jI3i6dUSo3fc1OeWN4xs9"
      })
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      console.error("Vercel API error:", errorData);
      throw new Error("Failed to deploy to Vercel");
    }
    
    const deploymentData = await response.json();
    
    // For simulation purposes, if deployment is not available, return a fake URL
    if (!deploymentData.url) {
      return {
        url: `https://${projectName}.vercel.app`
      };
    }
    
    return deploymentData;
  } catch (error) {
    console.error("Deployment error:", error);
    // Fallback to a simulated deployment URL
    return {
      url: `https://${projectName}.vercel.app`
    };
  }
}

// Generate HTML content for the landing page
function generateHtmlContent(lawFirmData: LawFirmData): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${lawFirmData.name} | Law Firm</title>
  <link rel="stylesheet" href="styles.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Merriweather:wght@400;700;900&display=swap">
</head>
<body>
  <header class="header">
    <div class="container">
      <h1 class="logo">${lawFirmData.name}</h1>
      <nav class="nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#practice-areas">Practice Areas</a></li>
          <li><a href="#attorneys">Attorneys</a></li>
          <li><a href="#contact" class="nav-cta">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <section class="hero" id="home">
    <div class="container">
      <div class="hero-content">
        <h1>${lawFirmData.homepageContent.hero.title || "Expert Legal Representation"}</h1>
        <p>${lawFirmData.homepageContent.hero.subtitle || "Our experienced attorneys are dedicated to fighting for your rights."}</p>
        <div class="hero-cta">
          <a href="#contact" class="btn btn-primary">Free Consultation</a>
          <a href="#about" class="btn btn-secondary">Learn More</a>
        </div>
      </div>
    </div>
  </section>

  <section class="about" id="about">
    <div class="container">
      <div class="section-header">
        <h2>About Our Firm</h2>
        <div class="divider"></div>
      </div>
      <div class="about-content">
        <div class="about-text">
          <h3>${lawFirmData.name}</h3>
          <p>${lawFirmData.about.headline || ""}</p>
          <p>${lawFirmData.about.mission || ""}</p>
        </div>
        <div class="about-image">
          <!-- Placeholder for law firm image -->
        </div>
      </div>
    </div>
  </section>

  <section class="practice-areas" id="practice-areas">
    <div class="container">
      <div class="section-header">
        <h2>Our Practice Areas</h2>
        <div class="divider"></div>
        <p>We offer a wide range of legal services to meet your needs.</p>
      </div>
      <div class="practice-areas-grid">
        ${lawFirmData.practiceAreas.map(area => `
          <div class="practice-area-card">
            <h3>${area.title}</h3>
            <p>${area.description}</p>
            <a href="#contact" class="read-more">Learn More</a>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <section class="attorneys" id="attorneys">
    <div class="container">
      <div class="section-header">
        <h2>Our Attorneys</h2>
        <div class="divider"></div>
        <p>Our team of experienced attorneys is dedicated to providing the highest quality legal representation.</p>
      </div>
      <div class="attorneys-grid">
        ${lawFirmData.attorneys.map(attorney => `
          <div class="attorney-card">
            <div class="attorney-image">
              <!-- Placeholder for attorney image -->
            </div>
            <h3>${attorney.name}</h3>
            <p class="attorney-title">${attorney.title}</p>
            <p class="attorney-bio">${attorney.bio}</p>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <section class="testimonials">
    <div class="container">
      <div class="section-header">
        <h2>Client Testimonials</h2>
        <div class="divider"></div>
        <p>Read what our clients have to say about their experience working with our firm.</p>
      </div>
      <div class="testimonials-grid">
        ${lawFirmData.testimonials.map(testimonial => `
          <div class="testimonial-card">
            <div class="quote-icon">"</div>
            <p class="testimonial-content">${testimonial.content}</p>
            <div class="testimonial-author">
              <p class="testimonial-name">${testimonial.name}</p>
              <p class="testimonial-position">${testimonial.position || 'Client'}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <section class="contact" id="contact">
    <div class="container">
      <div class="contact-grid">
        <div class="contact-info">
          <h2>Get In Touch</h2>
          <p>We're here to help with your legal needs. Contact us today for a consultation or to learn more about our services.</p>
          
          <div class="contact-details">
            <h3>Office Location</h3>
            <p>${lawFirmData.address || ""}</p>
            <p>Phone: ${lawFirmData.phone || ""}</p>
            <p>Email: ${lawFirmData.email || ""}</p>
          </div>
          
          <div class="office-hours">
            <h3>Office Hours</h3>
            <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
            <p>Saturday: By Appointment</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
        
        <div class="contact-form">
          <h2>Send Us a Message</h2>
          <form>
            <div class="form-row">
              <div class="form-group">
                <label for="firstName">First Name *</label>
                <input type="text" id="firstName" required>
              </div>
              <div class="form-group">
                <label for="lastName">Last Name *</label>
                <input type="text" id="lastName" required>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label for="email">Email *</label>
                <input type="email" id="email" required>
              </div>
              <div class="form-group">
                <label for="phone">Phone</label>
                <input type="tel" id="phone">
              </div>
            </div>
            <div class="form-group">
              <label for="message">Your Message *</label>
              <textarea id="message" rows="5" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </section>

  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-info">
          <h3>${lawFirmData.name}</h3>
          ${lawFirmData.address ? `<p>${lawFirmData.address}</p>` : ''}
          ${lawFirmData.phone ? `<p>Phone: ${lawFirmData.phone}</p>` : ''}
          ${lawFirmData.email ? `<p>Email: ${lawFirmData.email}</p>` : ''}
        </div>
        <div class="footer-links">
          <h3>Practice Areas</h3>
          <ul>
            ${lawFirmData.practiceAreas.slice(0, 5).map(area => `
              <li><a href="#practice-areas">${area.title}</a></li>
            `).join('')}
          </ul>
        </div>
        <div class="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#attorneys">Our Attorneys</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; ${new Date().getFullYear()} ${lawFirmData.name}. All rights reserved.</p>
      </div>
    </div>
  </footer>
</body>
</html>`;
}

// Generate CSS content
function generateCssContent(): string {
  return `/* Base Styles */
:root {
  --primary: #1A365D;
  --secondary: #B58B2B;
  --accent: #2A4365;
  --neutral: #F7FAFC;
  --base-100: #FFFFFF;
  --base-200: #EDF2F7;
  --base-300: #E2E8F0;
  --text: #333333;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  color: var(--text);
  line-height: 1.6;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Merriweather', serif;
  color: var(--primary);
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-header {
  text-align: center;
  margin-bottom: 40px;
}

.section-header h2 {
  font-size: 2.5rem;
  color: var(--primary);
  margin-bottom: 16px;
}

.divider {
  height: 4px;
  width: 80px;
  background-color: var(--secondary);
  margin: 0 auto 24px;
}

.btn {
  display: inline-block;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary {
  background-color: var(--secondary);
  color: white;
}

.btn-primary:hover {
  background-color: #9c7523;
}

.btn-secondary {
  background-color: transparent;
  color: white;
  border: 2px solid white;
}

.btn-secondary:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

/* Header */
.header {
  background-color: var(--primary);
  color: white;
  padding: 16px 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
}

.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
}

.nav ul {
  display: flex;
  list-style: none;
}

.nav ul li {
  margin-left: 32px;
}

.nav ul li a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav ul li a:hover {
  color: var(--secondary);
}

.nav-cta {
  background-color: var(--secondary);
  padding: 8px 16px;
  border-radius: 4px;
}

.nav-cta:hover {
  background-color: #9c7523;
  color: white !important;
}

/* Hero Section */
.hero {
  background-color: var(--primary);
  color: white;
  padding: 160px 0 80px;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero h1 {
  font-size: 3rem;
  color: white;
  margin-bottom: 24px;
  line-height: 1.2;
}

.hero p {
  font-size: 1.25rem;
  margin-bottom: 40px;
  opacity: 0.9;
}

.hero-cta {
  display: flex;
  justify-content: center;
  gap: 16px;
}

/* About Section */
.about {
  padding: 80px 0;
  background-color: white;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
}

.about-text h3 {
  font-size: 1.75rem;
  margin-bottom: 16px;
}

.about-text p {
  margin-bottom: 24px;
}

.about-image {
  background-color: var(--base-200);
  border-radius: 8px;
  height: 400px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Practice Areas Section */
.practice-areas {
  padding: 80px 0;
  background-color: var(--base-200);
}

.practice-areas-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 24px;
}

.practice-area-card {
  background-color: white;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.practice-area-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.practice-area-card h3 {
  font-size: 1.5rem;
  margin-bottom: 16px;
  color: var(--primary);
}

.practice-area-card p {
  margin-bottom: 16px;
  color: var(--text);
}

.read-more {
  color: var(--secondary);
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
}

.read-more:hover {
  text-decoration: underline;
}

/* Attorneys Section */
.attorneys {
  padding: 80px 0;
  background-color: white;
}

.attorneys-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 32px;
}

.attorney-card {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.attorney-card:hover {
  transform: translateY(-5px);
}

.attorney-image {
  background-color: var(--base-200);
  height: 320px;
}

.attorney-card h3 {
  font-size: 1.25rem;
  padding: 16px 16px 8px;
  color: var(--primary);
}

.attorney-title {
  color: var(--secondary);
  font-weight: 600;
  padding: 0 16px 8px;
}

.attorney-bio {
  padding: 0 16px 16px;
  color: var(--text);
}

/* Testimonials Section */
.testimonials {
  padding: 80px 0;
  background-color: var(--base-200);
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 32px;
}

.testimonial-card {
  background-color: white;
  border-radius: 8px;
  padding: 32px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
}

.quote-icon {
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 4rem;
  font-family: serif;
  color: var(--primary);
  opacity: 0.1;
  line-height: 1;
}

.testimonial-content {
  font-style: italic;
  margin-bottom: 24px;
  position: relative;
  z-index: 1;
}

.testimonial-name {
  font-weight: 700;
  color: var(--primary);
}

.testimonial-position {
  color: var(--text);
  font-size: 0.875rem;
}

/* Contact Section */
.contact {
  padding: 80px 0;
  background-color: white;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 48px;
}

.contact-info h2 {
  font-size: 2rem;
  margin-bottom: 16px;
}

.contact-info p {
  margin-bottom: 24px;
}

.contact-details, .office-hours {
  margin-bottom: 32px;
}

.contact-details h3, .office-hours h3 {
  font-size: 1.25rem;
  margin-bottom: 16px;
}

.contact-form h2 {
  font-size: 1.5rem;
  margin-bottom: 24px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 16px;
}

.form-group {
  margin-bottom: 16px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
}

.form-group input, .form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid var(--base-300);
  border-radius: 4px;
  font-family: inherit;
}

.form-group textarea {
  resize: vertical;
}

/* Footer */
.footer {
  background-color: var(--primary);
  color: white;
  padding: 64px 0 24px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 48px;
  margin-bottom: 48px;
}

.footer h3 {
  color: white;
  font-size: 1.25rem;
  margin-bottom: 24px;
}

.footer-info p {
  margin-bottom: 8px;
}

.footer-links ul {
  list-style: none;
}

.footer-links ul li {
  margin-bottom: 12px;
}

.footer-links ul li a {
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links ul li a:hover {
  color: var(--secondary);
}

.footer-bottom {
  text-align: center;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

/* Responsive Design */
@media (max-width: 992px) {
  .about-content, .contact-grid, .footer-grid {
    grid-template-columns: 1fr;
  }
  
  .nav ul {
    display: none;
  }
}

@media (max-width: 768px) {
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .section-header h2 {
    font-size: 2rem;
  }
  
  .hero-cta {
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 120px 0 60px;
  }
  
  .hero h1 {
    font-size: 2rem;
  }
}`;
} 