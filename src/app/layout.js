import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

export const metadata = {
  title: 'ALFA Global Ltd | Diversified Holding & Investment Company',
  description: 'ALFA Global Ltd is a diversified holding and investment company focused on technology, real estate, infrastructure, and strategic commercial ventures across Africa.',
  keywords: ['ALFA Global', 'technology', 'Africa', 'real estate', 'infrastructure', 'HandyLink', 'investment', 'Liberia'],
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: 'ALFA Global Ltd',
    description: 'Driving innovation, infrastructure growth, and long-term economic value.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
