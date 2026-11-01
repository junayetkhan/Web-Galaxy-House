import React from 'react';
import './about.css';
export default function About() {
  return (
    <>
      {/* About Hero */}
      <section className="about-hero">
        <div className="container hero-wrapper">
          <div className="hero-left">
            <div className="breadcrumbs">Home <span>›</span> About Us</div>
            <h1>About <span>Us</span></h1>
            <p className="hero-desc">We are a passionate team of digital experts, dedicated to helping businesses grow in the digital world.</p>
            <div className="hero-sub-desc">
              <div className="line"></div>
              <p>At Web Galaxy House, we combine creativity, technology and strategy to build digital solutions that make an impact.</p>
            </div>
          </div>
          <div className="hero-right hero-graphic">
            <div className="note">Turning<br />Ideas Into<br /><span>Digital Success</span></div>
            <img src="https://i.ibb.co/vz5R6sV/logo.png" alt="Graphic" />
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="story-section">
        <div className="container story-grid">
          <div className="story-content">
            <span className="section-tag" style={{ color: '#ff6b00' }}>OUR STORY</span>
            <h2>We're <span>Web Galaxy House</span></h2>
            <p>A creative digital agency focused on delivering real results for your business.</p>
            <p>Web Galaxy House was founded with a simple goal: to help businesses grow through innovative and result-driven digital solutions. We believe that every business has a unique story, and our job is to bring that story to life in the digital world.</p>
            <p>From stunning websites to powerful marketing strategies, we provide end-to-end digital services that not only look great but also drive real business growth.</p>
            <a href="#" className="btn btn-primary" style={{ marginTop: '15px' }}>Let's Work Together <span className="btn-icon-circle">➔</span></a>
          </div>
          <div className="story-image-wrapper">
            <div className="shape-orange"></div>
            <div className="shape-blue"></div>
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="Team Working" />
            <div className="trusted-badge">
              <div className="icon">👥</div>
              <div className="text">
                <strong>120+</strong>
                <span>Trusted by Happy Clients</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <div className="container features-grid">
          <div className="feature-card">
            <div className="feature-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg></div>
            <h3>Our Mission</h3>
            <p>To empower businesses with innovative digital solutions that create lasting value, drive growth and build a better future.</p>
            <div className="underline"></div>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></div>
            <h3>Our Vision</h3>
            <p>To be a leading digital agency recognized for creativity, innovation and exceptional client success.</p>
            <div className="underline"></div>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 3h12l4 6-10 12L2 9l4-6z"/></svg></div>
            <h3>Why Choose Us</h3>
            <ul className="choose-list">
              <li>Experienced & skilled team</li>
              <li>Client-focused approach</li>
              <li>Creative & innovative solutions</li>
              <li>24/7 support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="team-section">
        <div className="container team-grid">
          <div className="team-intro">
            <span className="section-tag" style={{ color: '#ff6b00' }}>OUR TEAM</span>
            <h2>Meet Our <span>Team</span></h2>
            <p>We have a diverse team of creative thinkers, tech experts and marketing strategists — all working together to bring your ideas to life.</p>
            <a href="#" className="btn btn-outline">View Our Team <span className="btn-icon-circle">➔</span></a>
          </div>
          <div className="team-cards-wrapper">
            <div className="team-card">
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80" alt="Rakib Hasan" />
              <h4>Rakib Hasan</h4>
              <span>CEO & Founder</span>
              <div className="social-icons"><a href="#">f</a><a href="#">in</a><a href="#">X</a><a href="#">ig</a></div>
            </div>
            <div className="team-card">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80" alt="Nusrat Jahan" />
              <h4>Nusrat Jahan</h4>
              <span>UI/UX Designer</span>
              <div className="social-icons"><a href="#">f</a><a href="#">in</a><a href="#">X</a><a href="#">ig</a></div>
            </div>
            <div className="team-card">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80" alt="Fahim Ahmed" />
              <h4>Fahim Ahmed</h4>
              <span>Frontend Developer</span>
              <div className="social-icons"><a href="#">f</a><a href="#">in</a><a href="#">X</a><a href="#">ig</a></div>
            </div>
            <div className="team-card">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80" alt="Tania Islam" />
              <h4>Tania Islam</h4>
              <span>Marketing Specialist</span>
              <div className="social-icons"><a href="#">f</a><a href="#">in</a><a href="#">X</a><a href="#">ig</a></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-bar">
            <div className="stats-title">Our Journey<br />in Numbers</div>
            <div className="stat-item">
              <div className="stat-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></div>
              <div className="stat-text"><strong>120+</strong><span>Happy Clients</span></div>
            </div>
            <div className="stat-item">
              <div className="stat-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 4c2-2 5-2 7-2 0 2 0 5-2 7l-6 6-5-5 6-6ZM8 10l-4 1-2 4 5-1M14 16l-1 4-4 2 1-5M7 17l-3 3M17 7h.01"/></svg></div>
              <div className="stat-text"><strong>250+</strong><span>Projects Completed</span></div>
            </div>
            <div className="stat-item">
              <div className="stat-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 3h8v5a4 4 0 0 1-8 0V3Zm0 2H4v2a4 4 0 0 0 4 4m8-6h4v2a4 4 0 0 1-4 4m-4 1v5m-4 0h8m-10 4h12"/></svg></div>
              <div className="stat-text"><strong>8+</strong><span>Years Experience</span></div>
            </div>
            <div className="stat-item">
              <div className="stat-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg></div>
              <div className="stat-text"><strong>25+</strong><span>Team Members</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-inner">
            <div className="cta-content">
              <span className="section-tag" style={{ color: '#ff6b00' }}>LET'S BUILD TOGETHER</span>
              <h2>Have a <span>Project</span> in Mind?</h2>
              <p>We're here to turn your ideas into powerful digital solutions.<br />Let's work together and create something amazing!</p>
            </div>
            <div className="cta-note">Your Success<br />Our Mission</div>
            <a href="#" className="btn btn-primary" style={{ padding: '16px 40px', fontSize: '1rem' }}>Get In Touch <span className="btn-icon-circle">➔</span></a>
          </div>
        </div>
      </section>
    </>
  );
}