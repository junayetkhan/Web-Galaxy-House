import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="header">
      <div className="container nav-inner">
        <div className="logo-area">
          <Link href="/">
            <img src="/logo.png" alt="Web Galaxy House Logo" className="logo-img" />
          </Link>
        </div>
        <ul className="nav-links">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/portfolio">Portfolio</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/contact">Contact Us</Link></li>
        </ul>
        <Link href="/contact" className="btn btn-primary" style={{ padding: '14px 30px', fontSize: '1rem' }}>
          Get In Touch <span className="btn-icon-circle">➔</span>
        </Link>
      </div>
    </header>
  );
}