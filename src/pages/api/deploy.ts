import type { NextApiRequest, NextApiResponse } from 'next';

// The Vercel token provided
const VERCEL_API_TOKEN = "7IyHUQtrAPbjtCdE1FfIyYjf";
const VERCEL_API_URL = "https://api.vercel.com/v13/deployments";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { firmName, content } = req.body;

    if (!firmName) {
      return res.status(400).json({ error: 'Firm name is required' });
    }

    // Generate a unique project name based on the firm name
    const projectName = `lawfirm-${firmName
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "")
      .substring(0, 16)}`;

    // The HTML content for the law firm website
    const htmlContent = content || generateDefaultHtml(firmName);

    // Prepare the files for deployment
    const files = [
      {
        file: "index.html",
        data: htmlContent
      },
      {
        file: "styles.css",
        data: generateDefaultCss()
      }
    ];

    // Make the API call to Vercel
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
        }
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Vercel API error:", data);
      return res.status(500).json({ error: data.error || 'Deployment failed' });
    }

    // Return the deployment URL
    return res.status(200).json({ 
      success: true, 
      url: data.url || `https://${projectName}.vercel.app`,
      name: projectName
    });
  } catch (error) {
    console.error('Deployment error:', error);
    return res.status(500).json({ error: 'Failed to deploy website' });
  }
}

// Generate default HTML for a law firm website
function generateDefaultHtml(firmName: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${firmName} | Law Firm</title>
  <link rel="stylesheet" href="styles.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Merriweather:wght@400;700;900&display=swap">
</head>
<body>
  <header>
    <div class="container">
      <h1 class="logo">${firmName}</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#practice-areas">Practice Areas</a></li>
          <li><a href="#contact" class="cta-button">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <section class="hero" id="home">
    <div class="container">
      <h2>Expert Legal Representation</h2>
      <p>We're dedicated to fighting for your rights and delivering the results you deserve.</p>
      <a href="#contact" class="button">Free Consultation</a>
    </div>
  </section>

  <section class="about" id="about">
    <div class="container">
      <h2>About Our Firm</h2>
      <p>At ${firmName}, we provide exceptional legal representation with integrity and compassion. Our team of experienced attorneys is dedicated to helping clients navigate complex legal matters.</p>
    </div>
  </section>

  <section class="practice-areas" id="practice-areas">
    <div class="container">
      <h2>Practice Areas</h2>
      <div class="areas-grid">
        <div class="area-card">
          <h3>Personal Injury</h3>
          <p>We help clients recover compensation for injuries caused by the negligence of others.</p>
        </div>
        <div class="area-card">
          <h3>Family Law</h3>
          <p>Our family law practice covers divorce, child custody, support, adoption, and all matters related to family relationships.</p>
        </div>
        <div class="area-card">
          <h3>Criminal Defense</h3>
          <p>We provide vigorous defense for those accused of crimes, protecting their rights and working for the best possible outcome.</p>
        </div>
        <div class="area-card">
          <h3>Estate Planning</h3>
          <p>Our estate planning services help clients prepare for the future, including wills, trusts, and power of attorney arrangements.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="contact" id="contact">
    <div class="container">
      <h2>Contact Us</h2>
      <p>Get in touch with our team to schedule a consultation or learn more about our services.</p>
      <form>
        <div class="form-group">
          <input type="text" placeholder="Your Name" required>
        </div>
        <div class="form-group">
          <input type="email" placeholder="Your Email" required>
        </div>
        <div class="form-group">
          <textarea placeholder="Your Message" required></textarea>
        </div>
        <button type="submit" class="button">Send Message</button>
      </form>
    </div>
  </section>

  <footer>
    <div class="container">
      <p>&copy; ${new Date().getFullYear()} ${firmName}. All rights reserved.</p>
    </div>
  </footer>
</body>
</html>`;
}

// Generate default CSS for the law firm website
function generateDefaultCss(): string {
  return `/* Base Styles */
:root {
  --primary: #1A365D;
  --secondary: #B58B2B;
  --light: #F7FAFC;
  --dark: #2D3748;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  color: var(--dark);
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

section {
  padding: 80px 0;
}

/* Header */
header {
  background-color: var(--primary);
  color: white;
  padding: 20px 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
}

header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  color: white;
}

nav ul {
  display: flex;
  list-style: none;
}

nav ul li {
  margin-left: 20px;
}

nav ul li a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

nav ul li a:hover {
  color: var(--secondary);
}

.cta-button {
  background-color: var(--secondary);
  padding: 8px 16px;
  border-radius: 4px;
}

.cta-button:hover {
  background-color: #a47a25;
}

/* Hero Section */
.hero {
  background-color: var(--primary);
  color: white;
  padding: 160px 0 80px;
  text-align: center;
}

.hero h2 {
  font-size: 2.5rem;
  color: white;
  margin-bottom: 20px;
}

.hero p {
  font-size: 1.25rem;
  margin-bottom: 30px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.button {
  display: inline-block;
  background-color: var(--secondary);
  color: white;
  padding: 12px 24px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.3s;
}

.button:hover {
  background-color: #a47a25;
}

/* About Section */
.about {
  background-color: white;
}

.about h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  text-align: center;
}

.about p {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

/* Practice Areas */
.practice-areas {
  background-color: var(--light);
}

.practice-areas h2 {
  font-size: 2rem;
  margin-bottom: 40px;
  text-align: center;
}

.areas-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.area-card {
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.area-card h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: var(--primary);
}

/* Contact Section */
.contact {
  background-color: white;
  text-align: center;
}

.contact h2 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.contact p {
  margin-bottom: 40px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

form {
  max-width: 600px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 20px;
}

input, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: inherit;
}

textarea {
  height: 150px;
  resize: vertical;
}

button[type="submit"] {
  border: none;
  cursor: pointer;
}

/* Footer */
footer {
  background-color: var(--primary);
  color: white;
  padding: 30px 0;
  text-align: center;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  nav ul {
    display: none;
  }
  
  .hero h2 {
    font-size: 2rem;
  }
  
  section {
    padding: 60px 0;
  }
}`;
} 