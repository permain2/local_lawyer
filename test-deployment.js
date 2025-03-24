const fetch = require('node-fetch');

// The Vercel API token
const VERCEL_API_TOKEN = "7IyHUQtrAPbjtCdE1FfIyYjf";
const VERCEL_API_URL = "https://api.vercel.com/v13/deployments";

// Sample law firm name - change this to test different names
const firmName = "Johnson Legal Group";

// Generate a unique project name based on the firm name
const projectName = `lawfirm-${firmName
  .toLowerCase()
  .replace(/[^a-z0-9]/g, "")
  .substring(0, 16)}`;

// Generate HTML content for the law firm website
const htmlContent = `<!DOCTYPE html>
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
      <h1>${firmName}</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
  
  <section id="home" class="hero">
    <div class="container">
      <h2>Expert Legal Representation</h2>
      <p>We're dedicated to fighting for your rights.</p>
      <a href="#contact" class="button">Free Consultation</a>
    </div>
  </section>
  
  <section id="about" class="about">
    <div class="container">
      <h2>About Us</h2>
      <p>Founded with a commitment to excellence, ${firmName} provides exceptional legal services with integrity and dedication.</p>
    </div>
  </section>
  
  <footer>
    <div class="container">
      <p>&copy; ${new Date().getFullYear()} ${firmName}. All rights reserved.</p>
    </div>
  </footer>
</body>
</html>`;

// CSS styles for the website
const cssContent = `
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: 'Inter', sans-serif; line-height: 1.6; color: #333; }
  h1, h2, h3 { font-family: 'Merriweather', serif; color: #1A365D; }
  .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
  
  header { background: #1A365D; color: white; padding: 20px 0; }
  header .container { display: flex; justify-content: space-between; align-items: center; }
  nav ul { display: flex; list-style: none; }
  nav ul li { margin-left: 20px; }
  nav ul li a { color: white; text-decoration: none; }
  
  .hero { background: #1A365D; color: white; padding: 100px 0; text-align: center; }
  .hero h2 { font-size: 2.5rem; margin-bottom: 20px; }
  .hero p { font-size: 1.25rem; margin-bottom: 30px; }
  
  .about { padding: 80px 0; }
  .about h2 { margin-bottom: 20px; text-align: center; }
  .about p { text-align: center; max-width: 800px; margin: 0 auto; }
  
  .button { display: inline-block; background: #B58B2B; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; }
  
  footer { background: #1A365D; color: white; padding: 30px 0; text-align: center; }
`;

// Deploy the website
async function deployWebsite() {
  console.log(`Deploying website for '${firmName}'...`);
  
  try {
    const response = await fetch(VERCEL_API_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${VERCEL_API_TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: projectName,
        files: [
          { file: "index.html", data: htmlContent },
          { file: "styles.css", data: cssContent }
        ],
        projectSettings: {
          framework: null
        }
      })
    });
    
    const data = await response.json();
    
    if (response.ok) {
      console.log("Deployment successful!");
      console.log(`Website URL: ${data.url || `https://${projectName}.vercel.app`}`);
    } else {
      console.error("Deployment failed:", data.error || data);
    }
  } catch (error) {
    console.error("Error deploying website:", error);
  }
}

// Run the deployment
deployWebsite(); 