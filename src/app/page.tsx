import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* HERO SECTION - DARK THEME (আগের মতোই) */}
      <section className="hero" id="home">
        <div className="hero-background">
          <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&q=80" alt="Hero Background" />
        </div>

        <div className="container hero-content">
          <div className="hero-copy">
            <span className="hero-badge">YOUR DIGITAL GROWTH PARTNER</span>
            <h1>Web Marketing,<br />Software Solutions &<br /><span className="gradient">Business Growth</span></h1>
            <p>We build modern websites, powerful software solutions and data-driven marketing strategies to help your business grow in the digital world.</p>
            
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">Get Started <span className="btn-icon-circle">➔</span></a>
              <a href="#about" className="btn btn-ghost" style={{ background: 'transparent', border: '1px solid #fff', color: '#fff' }}>
                Watch Video <span style={{ color: 'black', background: 'white', borderRadius: '50%', width: '26px', height: '26px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>▶</span>
              </a>
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
          
          <div className="ideas-note">Ideas<br />To Reality</div>
        </div>
      </section>

      {/* Services Section - WHITE THEME */}
      <section className="section services-section" id="services" style={{ background: '#fdfdfd', color: '#333' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Services</span>
            <h2 style={{ color: '#0b132b' }}>Everything You Need to Build, Grow and <span className="gradient-text">Succeed</span></h2>
            <p style={{ color: '#666' }}>We offer a complete range of digital services to help your business stand out, grow faster and achieve long-term success.</p>
          </div>
          <div className="services-grid">
            {[
              { title: "Web Development", desc: "Modern, fast and scalable web solutions tailored to your business needs.", icon: <path d="M8 5l-6 7 6 7M16 5l6 7-6 7M14 3l-4 18"/> },
              { title: "Mobile App Development", desc: "High performance mobile applications for iOS and Android platforms.", icon: <><rect x="6" y="2" width="12" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></> },
              { title: "UI/UX Design", desc: "Beautiful & intuitive user experiences that keep your customers engaged.", icon: <><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></> },
              { title: "Digital Marketing", desc: "Grow your brand online with data-driven marketing strategies.", icon: <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/> },
              { title: "Software Solutions", desc: "Custom software built to solve your unique business challenges.", icon: <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/> },
              { title: "Branding & Graphic Design", desc: "Build a strong brand identity that stands out in the market.", icon: <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/> },
            ].map((service, index) => (
              <div key={index} className="service-card" style={{ background: 'white', border: '1px solid #eaeaea' }}>
                <div className="service-icon-box" style={{ background: 'rgba(255, 107, 0, 0.1)', color: '#ff6b00' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">{service.icon}</svg>
                </div>
                <h3 style={{ color: '#0b132b' }}>{service.title}</h3>
                <p style={{ color: '#666' }}>{service.desc}</p>
                <a href="#contact" className="service-link" style={{ background: 'rgba(0,0,0,0.05)', color: '#0b132b' }}>➔</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - WHITE THEME */}
      <section className="section" id="about" style={{ background: '#ffffff' }}>
        <div className="container about-grid">
          <div className="about-img-box">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="Our Team" />
          </div>
          <div className="about-copy">
            <span className="section-tag">About Us</span>
            <h2 style={{ color: '#0b132b' }}>We're a Creative <span className="gradient-text">Digital Agency</span></h2>
            <p style={{ color: '#666' }}>Web Galaxy House is a team of passionate creators, strategists and developers. We turn ideas into powerful digital experiences that help brands grow and succeed.</p>
            
            <div className="about-points">
              <div className="about-point">
                <div className="point-icon" style={{ background: 'rgba(255, 107, 0, 0.1)', color: '#ff6b00' }}><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></div>
                <div>
                  <h4 style={{ color: '#0b132b' }}>Our Mission</h4>
                  <p style={{ color: '#666' }}>To empower businesses with innovative digital solutions that create lasting value and drive growth.</p>
                </div>
              </div>
              <div className="about-point">
                <div className="point-icon" style={{ background: 'rgba(255, 107, 0, 0.1)', color: '#ff6b00' }}><svg viewBox="0 0 24 24"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg></div>
                <div>
                  <h4 style={{ color: '#0b132b' }}>Our Vision</h4>
                  <p style={{ color: '#666' }}>To be a leading digital agency recognized for creativity, innovation and exceptional client success.</p>
                </div>
              </div>
            </div>
            
            <a href="#contact" className="btn btn-primary" style={{ background: '#ff6b00', color: 'white' }}>Learn More <span className="btn-icon-circle" style={{ color: '#ff6b00' }}>➔</span></a>
          </div>
        </div>
      </section>

      {/* Portfolio Section - WHITE THEME */}
      <section className="section portfolio-section" id="portfolio" style={{ background: '#f9f9fb', borderTop: '1px solid #eaeaea' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Portfolio</span>
            <h2 style={{ color: '#0b132b' }}>Selected <span className="gradient-text">Projects</span></h2>
            <p style={{ color: '#666' }}>Take a look at some of our latest work. We build digital products that make a real impact.</p>
          </div>
          
          <div className="portfolio-filters">
            <button className="filter-btn active" style={{ background: '#ff6b00', color: 'white', border: 'none' }}>All</button>
            <button className="filter-btn" style={{ border: '1px solid #ddd', color: '#666' }}>Website</button>
            <button className="filter-btn" style={{ border: '1px solid #ddd', color: '#666' }}>Mobile App</button>
            <button className="filter-btn" style={{ border: '1px solid #ddd', color: '#666' }}>Branding</button>
          </div>
          
          <div className="portfolio-grid">
            {[
              { img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80", title: "E-Commerce Website", cat: "Web Development" },
              { img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80", title: "Mobile Banking App", cat: "Mobile App Development" },
              { img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80", title: "Brand Identity Design", cat: "Branding" }
            ].map((project, index) => (
              <div key={index} className="port-card">
                <img src={project.img} alt={project.title} />
                <div className="port-overlay">
                  <div className="port-info"><h3 style={{ color: 'white' }}>{project.title}</h3><p style={{ color: '#ff6b00' }}>{project.cat}</p></div>
                  <div className="service-link" style={{ background: 'white', color: 'black' }}>➔</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - WHITE THEME */}
      <section className="section" id="process" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Process</span>
            <h2 style={{ color: '#0b132b' }}>Simple Steps, Big <span className="gradient-text">Results.</span></h2>
            <p style={{ color: '#666' }}>We follow a streamlined process to ensure your project is delivered on time and exceeds expectations.</p>
          </div>
          
          <div className="process-grid">
            {[
              { num: "01", title: "Discover", desc: "Understand your goals and requirements." },
              { num: "02", title: "Plan", desc: "Create strategy and project roadmap." },
              { num: "03", title: "Design & Develop", desc: "Bring your ideas to life." },
              { num: "04", title: "Launch & Support", desc: "We're here even after launch." }
            ].map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-num" style={{ background: '#f9f9fb', border: '2px solid rgba(255,107,0,0.3)', color: '#ff6b00', boxShadow: 'none' }}>{step.num}</div>
                <h4 style={{ color: '#0b132b' }}>{step.title}</h4>
                <p style={{ color: '#666' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - WHITE THEME */}
      <section className="section testimonials-section" style={{ background: '#f9f9fb', borderTop: '1px solid #eaeaea' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">What Clients Say</span>
            <h2 style={{ color: '#0b132b' }}>Trusted by <span className="gradient-text">Amazing Clients</span></h2>
            <p style={{ color: '#666' }}>Don't just take our word for it. Here's what our clients have to say about working with us.</p>
          </div>
          
          <div className="testi-grid">
            {[
              { name: "Sarah Ahmed", role: "CEO, Trendy Store", img: "https://i.pravatar.cc/100?img=1", text: "Web Galaxy House delivered an amazing website for our business. Their team is professional, creative and always supportive." },
              { name: "Irfan Hasan", role: "Founder, TechHive", img: "https://i.pravatar.cc/100?img=11", text: "They helped us grow our online presence with smart marketing strategies. We've seen a huge increase in traffic and sales." },
              { name: "Nusrat Jahan", role: "Marketing Manager, BrightLife", img: "https://i.pravatar.cc/100?img=5", text: "Excellent communication and outstanding work. Highly recommend the team for any digital project." }
            ].map((client, index) => (
              <div key={index} className="testi-card" style={{ background: 'white', border: '1px solid #eaeaea' }}>
                <div className="stars">★★★★★</div>
                <p style={{ color: '#666' }}>"{client.text}"</p>
                <div className="testi-user">
                  <img src={client.img} alt={client.name} />
                  <div><h4 style={{ color: '#0b132b' }}>{client.name}</h4><span style={{ color: '#888' }}>{client.role}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Home Page Bottom CTA */}
      <section style={{ background: '#ffffff', padding: '60px 24px 100px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ background: '#fff4ec', border: '1px solid #ffe4d1', borderRadius: '30px', padding: '60px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', color: '#0b132b', marginBottom: '16px', fontWeight: 'bold' }}>Ready to Start Your Next Project?</h2>
            <p style={{ color: '#666', marginBottom: '30px', fontSize: '1.1rem' }}>Let's talk about your ideas and turn them into reality.</p>
            <Link href="mailto:info@webgalaxyhouse.com" style={{ display: 'inline-flex', padding: '16px 36px', borderRadius: '50px', background: 'linear-gradient(110deg, #ff7a00, #ea4c00)', color: 'white', fontWeight: 'bold', textDecoration: 'none', alignItems: 'center', gap: '10px' }}>
              Get In Touch 
              <span style={{ width: '26px', height: '26px', borderRadius: '50%', background: 'white', color: '#ff7a00', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>➔</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}