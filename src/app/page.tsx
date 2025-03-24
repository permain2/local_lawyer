import MainGenerator from "@/components/MainGenerator";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-primary text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-center">
            Law Firm Website Generator
          </h1>
          <p className="text-center mt-4 max-w-2xl mx-auto opacity-90">
            Create a professional law firm website in minutes by filling out the form below.
            We'll generate a complete website based on your input.
          </p>
        </div>
      </header>
      
      <main className="py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <MainGenerator />
        </div>
      </main>
      
      <footer className="bg-gray-100 py-8 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Law Firm Website Generator. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
