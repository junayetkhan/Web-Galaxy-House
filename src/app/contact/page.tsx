import React from 'react';
import Link from 'next/link';
import './contact.css';

export default function Contact() {
  return (
    <div style={{ background: '#f8f9fc', minHeight: '100vh' }}>
      
      {/* Hero Section - DARK THEME */}
      <section style={{ position: 'relative', background: '#090a15', padding: '160px 0 100px', color: 'white', overflow: 'hidden' }}>
        {/* Glow Effects */}
        <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(255,107,0,0.15) 0%, transparent 60%)', filter: 'blur(100px)', zIndex: 1 }}></div>
        <div style={{ position: 'absolute', bottom: '-20%', left: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(0,102,255,0.1) 0%, transparent 60%)', filter: 'blur(80px)', zIndex: 1 }}></div>

        {/* Hero Grid - Flex Layout */}
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '1280px', margin: '0 auto', padding: '0 24px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '40px' }}>
          
          {/* Left Content */}
          <div style={{ flex: '1 1 500px', minWidth: '300px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', color: '#ff6b00', fontWeight: '800', fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px' }}>
              Get In Touch 
              <span style={{ width: '50px', height: '3px', background: '#ff6b00', borderRadius: '2px' }}></span>
            </div>
            <h1 style={{ fontSize: 'clamp(2.8rem, 4.5vw, 4rem)', color: 'white', lineHeight: '1.1', marginBottom: '25px', letterSpacing: '-1.5px' }}>
              Let's Talk About<br /><span style={{ color: '#ff6b00' }}>Your Project</span>
            </h1>
            <p style={{ fontSize: '1.1rem', color: '#d4d4d8', maxWidth: '480px', lineHeight: '1.7' }}>
              Have a project in mind? We'd love to hear from you. Get in touch and let's create something amazing together.
            </p>
          </div>

          {/* Right Image */}
          <div style={{ flex: '1 1 500px', minWidth: '300px', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ position: 'absolute', top: '0', right: '15%', fontFamily: "'Caveat', cursive", fontSize: '2.5rem', color: 'white', transform: 'rotate(-8deg)', lineHeight: '1', textAlign: 'right', zIndex: 2 }}>
              We're Here<br />to Help!
            </div>
            <img src="https://cdn-icons-png.flaticon.com/512/3023/3023240.png" alt="Paper Plane" style={{ width: '100%', maxWidth: '450px', objectFit: 'contain', animation: 'float 6s ease-in-out infinite' }} />
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container contact-layout">
          
          {/* Left Side: Contact Info */}
          <div className="contact-card contact-info-card">
            <h2>Contact Information</h2>
            <p>Feel free to reach out to us through any of the below channels. We're always ready to help!</p>
            
            <div className="info-list">
              <div className="info-item">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div className="info-text">
                  <h4>Our Location</h4>
                  <p>Dhaka, Bangladesh</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div className="info-text">
                  <h4>Phone</h4>
                  <p>+880 1234 567890</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div className="info-text">
                  <h4>Email</h4>
                  <p>info@webgalaxyhouse.com</p>
                </div>
              </div>
            </div>

            <div className="social-links-wrapper">
              <h4>Follow Us</h4>
              <div className="social-icons">
                <Link href="#" aria-label="Facebook"><svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></Link>
                <Link href="#" aria-label="Instagram"><svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></Link>
                <Link href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></Link>
                <Link href="#" aria-label="YouTube"><svg viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg></Link>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="contact-card contact-form-card">
            <h2>Send Us a Message</h2>
            <p>Fill out the form below and we'll get back to you as soon as possible.</p>
            
            <form action="#">
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name <span>*</span></label>
                  <input type="text" placeholder="Your full name" required />
                </div>
                <div className="form-group">
                  <label>Email Address <span>*</span></label>
                  <input type="email" placeholder="your@email.com" required />
                </div>
              </div>
              
              <div className="form-group">
                <label>Subject <span>*</span></label>
                <select required defaultValue="">
                  <option value="" disabled>Select a subject</option>
                  <option value="web">Web Development</option>
                  <option value="app">Mobile App Development</option>
                  <option value="design">UI/UX Design</option>
                  <option value="marketing">Digital Marketing</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <label>Message <span>*</span></label>
                <textarea placeholder="Type your message here..." required></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary">Send Message <span>➔</span></button>
            </form>
          </div>

        </div>
      </section>

    </div>
  );
}