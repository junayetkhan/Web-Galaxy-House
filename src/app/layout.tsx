"use client"; // ক্লায়েন্ট সাইড ফিচারের জন্য

import { usePathname } from "next/navigation";
import { Inter, Outfit, Caveat } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  // চেক করা: আমরা কি অ্যাডমিন/ড্যাশবোর্ড পেজে আছি?
  const isAdminPage = pathname.startsWith("/admin");

  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${caveat.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#05050f] text-white">
        
        {/* Navbar: অ্যাডমিন পেজ ছাড়া সব জায়গায় দেখাবে */}
        {!isAdminPage && (
          <header className="header">
            <div className="container nav-inner">
              <div className="logo-area">
                <Link href="/">
                  <img src="/logo.png" alt="Web Galaxy House Logo" className="logo-img" />
                </Link>
              </div>
              <ul className="nav-links">
                <li><Link href="/" className="hover:text-[#ff7a00] transition">Home</Link></li>
                <li><Link href="/about" className="hover:text-[#ff7a00] transition">About</Link></li>
                <li><Link href="/services" className="hover:text-[#ff7a00] transition">Services</Link></li>
                <li><Link href="/portfolio" className="hover:text-[#ff7a00] transition">Portfolio</Link></li>
                <li><Link href="/blog" className="hover:text-[#ff7a00] transition">Blog</Link></li>
                <li><Link href="/contact" className="hover:text-[#ff7a00] transition">Contact Us</Link></li>
              </ul>
              <Link href="/contact" className="btn btn-primary" style={{ padding: '14px 30px', fontSize: '1rem' }}>
                Get In Touch <span className="btn-icon-circle">➔</span>
              </Link>
            </div>
          </header>
        )}

        {/* Main Content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer: অ্যাডমিন পেজ ছাড়া সব জায়গায় দেখাবে */}
        {!isAdminPage && (
          <footer className="footer" id="contact">
            <div className="container">
              <div className="footer-main">
                <div className="footer-brand">
                  <img src="/logo.png" alt="Web Galaxy House Logo" style={{ height: '60px', marginBottom: '20px' }} />
                  <p>We help businesses scale revenue through high-impact web development, data-driven digital marketing, and custom software solutions.</p>
                  <div className="footer-socials">
                    <Link href="#">f</Link>
                    <Link href="#">in</Link>
                    <Link href="#">ig</Link>
                    <Link href="#">yt</Link>
                  </div>
                </div>
                
                <div className="footer-col">
                  <h4>Company</h4>
                  <ul>
                    <li><Link href="/about">About Us</Link></li>
                    <li><Link href="/services">Services</Link></li>
                    <li><Link href="/portfolio">Portfolio</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                  </ul>
                </div>
                
                <div className="footer-col">
                  <h4>Services</h4>
                  <ul>
                    <li><Link href="#">Web Development</Link></li>
                    <li><Link href="#">Mobile Apps</Link></li>
                    <li><Link href="#">UI/UX Design</Link></li>
                    <li><Link href="#">Digital Marketing</Link></li>
                  </ul>
                </div>
                
                <div className="footer-col">
                  <h4>Contact Info</h4>
                  <ul>
                    <li style={{ color: '#a1a1aa' }}>📍 Dhaka, Bangladesh</li>
                    <li style={{ color: '#a1a1aa' }}>📞 +880 123 456 7890</li>
                    <li style={{ color: '#a1a1aa' }}>✉️ info@webgalaxyhouse.com</li>
                  </ul>
                </div>
              </div>
              
              <div className="footer-bottom">
                <p>© 2025 Web Galaxy House. All rights reserved.</p>
                <p>Privacy Policy | Terms of Service</p>
              </div>
            </div>
          </footer>
        )}

      </body>
    </html>
  );
}