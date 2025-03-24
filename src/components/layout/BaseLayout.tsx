import Header from "./Header";
import Footer from "./Footer";

interface BaseLayoutProps {
  children: React.ReactNode;
  firmName: string;
  logo?: string;
  address?: string;
  phone?: string;
  email?: string;
  copyright?: string;
}

export default function BaseLayout({
  children,
  firmName,
  logo,
  address,
  phone,
  email,
  copyright,
}: BaseLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header firmName={firmName} logo={logo} />
      <main className="flex-grow">{children}</main>
      <Footer
        firmName={firmName}
        address={address}
        phone={phone}
        email={email}
        copyright={copyright}
      />
    </div>
  );
} 