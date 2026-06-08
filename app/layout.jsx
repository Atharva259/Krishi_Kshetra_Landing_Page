import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Krishi Kshetra | Agricultural Robotics & Smart Irrigation',
  description: 'Venture-backed AgriTech startup revolutionizing sustainable farming through IoT automation and AI-driven agricultural robotics.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased selection:bg-brand-emerald/30">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
