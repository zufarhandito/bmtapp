import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Footer, Navbar } from './components/Layouts';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BMT Amanah Galur',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <section id="kontak">
          <Footer />
        </section>
      </body>
    </html>
  );
}
