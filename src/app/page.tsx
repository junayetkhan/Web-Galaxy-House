import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="header" id="header">
        <div className="container nav-inner">
          <div className="logo-area">
            {/* লোগো ইমেজের লিংক এখানে বসান */}
            <img src="/logo.png" alt="Web Galaxy House Logo" className="logo-img" />
          </div>
          <ul className="nav-links">
            <li><Link href="#home" className="active">Home</Link></li>
            <li><Link href="#about">About</Link></li>
            <li><Link href="#services">Services</Link></li>
            <li><Link href="#portfolio">Portfolio</Link></li>
            <li><Link href="#contact">Contact Us</Link></li>
          </ul>
          <Link href="#contact" className="btn btn-primary" style={{ padding: '12px 28px', fontSize: '0.9rem' }}>
            Get In Touch <span className="btn-icon-circle">➔</span>
          </Link>
          <button className="menu-toggle">☰</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-glow-left"></div>
        <div className="hero-glow-right"></div>
        
        <div className="container hero-inner">
          <div className="hero-content">
            <span className="hero-badge">Your Digital Growth Partner</span>
            <h1>Web Marketing,<br />Software Solutions &<br /><span className="gradient">Business Growth</span></h1>
            <p>We build modern websites, powerful software solutions and data-driven marketing strategies to help your business grow in the digital world.</p>
            
            <div className="hero-actions">
              <Link href="#contact" className="btn btn-primary">Get Started <span className="btn-icon-circle">➔</span></Link>
              <Link href="#about" className="btn btn-ghost">Watch Video <span className="btn-icon-circle" style={{ color: 'black' }}>▶</span></Link>
            </div>
            
            <div className="hero-features">
              <div className="hero-feature">
                <div className="feature-icon"><svg viewBox="0 0 24 24"><path d="M8 5l-6 7 6 7M16 5l6 7-6 7M14 3l-4 18"/></svg></div>
                <span>Modern<br />Web Development</span>
              </div>
              <div className="feature-divider"></div>
              <div className="hero-feature">
                <div className="feature-icon"><svg viewBox="0 0 24 24"><rect x="6" y="2" width="12" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg></div>
                <span>Mobile App<br />Development</span>
              </div>
              <div className="feature-divider"></div>
              <div className="hero-feature">
                <div className="feature-icon"><svg viewBox="0 0 24 24"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg></div>
                <span>Digital<br />Marketing</span>
              </div>
              <div className="feature-divider"></div>
              <div className="hero-feature">
                <div className="feature-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg></div>
                <span>Software<br />Solutions</span>
              </div>
            </div>
          </div>
          
          <div className="hero-image-wrapper">
            <div className="ideas-note">Ideas<br />To Reality
              <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80" alt="Laptop and Phone Mockup" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services-section" id="services">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Services</span>
            <h2>Everything You Need to Build, Grow and <span style={{ background: 'var(--gradient-text)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Succeed</span></h2>
            <p>We offer a complete range of digital services to help your business stand out, grow faster and achieve long-term success.</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon-box"><svg viewBox="0 0 24 24"><path d="M8 5l-6 7 6 7M16 5l6 7-6 7M14 3l-4 18"/></svg></div>
              <h3>Web Development</h3>
              <p>Modern, fast and scalable web solutions tailored to your business needs.</p>
              <Link href="#contact" className="service-link">➔</Link>
            </div>
            <div className="service-card">
              <div className="service-icon-box"><svg viewBox="0 0 24 24"><rect x="6" y="2" width="12" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg></div>
              <h3>Mobile App Development</h3>
              <p>High performance mobile applications for iOS and Android platforms.</p>
              <Link href="#contact" className="service-link">➔</Link>
            </div>
            <div className="service-card">
              <div className="service-icon-box"><svg viewBox="0 0 24 24"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg></div>
              <h3>UI/UX Design</h3>
              <p>Beautiful & intuitive user experiences that keep your customers engaged.</p>
              <Link href="#contact" className="service-link">➔</Link>
            </div>
            <div className="service-card">
              <div className="service-icon-box"><svg viewBox="0 0 24 24"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg></div>
              <h3>Digital Marketing</h3>
              <p>Grow your brand online with data-driven marketing strategies.</p>
              <Link href="#contact" className="service-link">➔</Link>
            </div>
            <div className="service-card">
              <div className="service-icon-box"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg></div>
              <h3>Software Solutions</h3>
              <p>Custom software built to solve your unique business challenges.</p>
              <Link href="#contact" className="service-link">➔</Link>
            </div>
            <div className="service-card">
              <div className="service-icon-box"><svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg></div>
              <h3>Branding & Graphic Design</h3>
              <p>Build a strong brand identity that stands out in the market.</p>
              <Link href="#contact" className="service-link">➔</Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section" id="about">
        <div className="container about-grid">
          <div className="about-img-box">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="Our Team" />
          </div>
          <div className="about-copy">
            <span className="section-tag">About Us</span>
            <h2>We're a Creative <span>Digital Agency</span></h2>
            <p>Web Galaxy House is a team of passionate creators, strategists and developers. We turn ideas into powerful digital experiences that help brands grow and succeed.</p>
            
            <div className="about-points">
              <div className="about-point">
                <div className="point-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></div>
                <div>
                  <h4>Our Mission</h4>
                  <p>To empower businesses with innovative digital solutions that create lasting value and drive growth.</p>
                </div>
              </div>
              <div className="about-point">
                <div className="point-icon"><svg viewBox="0 0 24 24"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg></div>
                <div>
                  <h4>Our Vision</h4>
                  <p>To be a leading digital agency recognized for creativity, innovation and exceptional client success.</p>
                </div>
              </div>
            </div>
            
            <Link href="#contact" className="btn btn-primary">Learn More <span className="btn-icon-circle">➔</span></Link>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section portfolio-section" id="portfolio">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Portfolio</span>
            <h2>Selected <span style={{ background: 'var(--gradient-text)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Projects</span></h2>
            <p>Take a look at some of our latest work. We build digital products that make a real impact.</p>
          </div>
          
          <div className="portfolio-filters">
            <button className="filter-btn active">All</button>
            <button className="filter-btn">Website</button>
            <button className="filter-btn">Mobile App</button>
            <button className="filter-btn">Branding</button>
          </div>
          
          <div className="portfolio-grid">
            <div className="port-card">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" alt="E-Commerce" />
              <div className="port-overlay">
                <div className="port-info"><h3>E-Commerce Website</h3><p>Web Development</p></div>
                <div className="service-link" style={{ background: 'white', color: 'black' }}>➔</div>
              </div>
            </div>
            <div className="port-card">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" alt="Mobile App" />
              <div className="port-overlay">
                <div className="port-info"><h3>Mobile Banking App</h3><p>Mobile App Development</p></div>
                <div className="service-link" style={{ background: 'white', color: 'black' }}>➔</div>
              </div>
            </div>
            <div className="port-card">
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80" alt="Branding" />
              <div className="port-overlay">
                <div className="port-info"><h3>Brand Identity Design</h3><p>Branding</p></div>
                <div className="service-link" style={{ background: 'white', color: 'black' }}>➔</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section" id="process">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Process</span>
            <h2>Simple Steps, Big <span style={{ background: 'var(--gradient-text)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Results.</span></h2>
            <p>We follow a streamlined process to ensure your project is delivered on time and exceeds expectations.</p>
          </div>
          
          <div className="process-grid">
            <div className="process-step">
              <div className="step-num">01</div>
              <h4>Discover</h4>
              <p>Understand your goals and requirements.</p>
            </div>
            <div className="process-step">
              <div className="step-num">02</div>
              <h4>Plan</h4>
              <p>Create strategy and project roadmap.</p>
            </div>
            <div className="process-step">
              <div className="step-num">03</div>
              <h4>Design & Develop</h4>
              <p>Bring your ideas to life.</p>
            </div>
            <div className="process-step">
              <div className="step-num">04</div>
              <h4>Launch & Support</h4>
              <p>We're here even after launch.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">What Clients Say</span>
            <h2>Trusted by <span style={{ background: 'var(--gradient-text)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Amazing Clients</span></h2>
            <p>Don't just take our word for it. Here's what our clients have to say about working with us.</p>
          </div>
          
          <div className="testi-grid">
            <div className="testi-card">
              <div className="stars">★★★★★</div>
              <p>"Web Galaxy House delivered an amazing website for our business. Their team is professional, creative and always supportive."</p>
              <div className="testi-user">
                <img src="https://i.pravatar.cc/100?img=1" alt="Client" />
                <div><h4>Sarah Ahmed</h4><span>CEO, Trendy Store</span></div>
              </div>
            </div>
            <div className="testi-card">
              <div className="stars">★★★★★</div>
              <p>"They helped us grow our online presence with smart marketing strategies. We've seen a huge increase in traffic and sales."</p>
              <div className="testi-user">
                <img src="https://i.pravatar.cc/100?img=11" alt="Client" />
                <div><h4>Irfan Hasan</h4><span>Founder, TechHive</span></div>
              </div>
            </div>
            <div className="testi-card">
              <div className="stars">★★★★★</div>
              <p>"Excellent communication and outstanding work. Highly recommend the team for any digital project."</p>
              <div className="testi-user">
                <img src="https://i.pravatar.cc/100?img=5" alt="Client" />
                <div><h4>Nusrat Jahan</h4><span>Marketing Manager, BrightLife</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" id="contact">
        <div className="container">
          <div className="footer-cta">
            <h2>Ready to Start Your Next Project?</h2>
            <p>Let's talk about your ideas and turn them into reality.</p>
            <Link href="mailto:info@webgalaxyhouse.com" className="btn btn-primary">Get In Touch <span className="btn-icon-circle">➔</span></Link>
          </div>
          
          <div className="footer-main">
            <div className="footer-brand">
              <img src="/logo.png" alt="Web Galaxy House Logo" />
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
                <li><Link href="#about">About Us</Link></li>
                <li><Link href="#services">Services</Link></li>
                <li><Link href="#portfolio">Portfolio</Link></li>
                <li><Link href="#contact">Contact</Link></li>
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
                <li style={{ color: 'var(--text-muted)' }}>📍 Dhaka, Bangladesh</li>
                <li style={{ color: 'var(--text-muted)' }}>📞 +880 123 456 7890</li>
                <li style={{ color: 'var(--text-muted)' }}>✉️ info@webgalaxyhouse.com</li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© 2025 Web Galaxy House. All rights reserved.</p>
            <p>Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </>
  );
}