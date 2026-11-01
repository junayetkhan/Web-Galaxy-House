import React from 'react';
import Link from 'next/link';

export default function Services() {
  return (
    <div style={{ background: '#fdfdfd', color: '#333', minHeight: '100vh' }}>
      
      {/* Hero Section - Dark Theme */}
      <section style={{ position: 'relative', background: '#090a15', padding: '160px 0 100px', color: 'white', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(0, 102, 255, 0.15) 0%, transparent 60%)', filter: 'blur(80px)', zIndex: 1 }}></div>
        <div style={{ position: 'absolute', bottom: '-20%', left: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(255, 107, 0, 0.15) 0%, transparent 60%)', filter: 'blur(60px)', zIndex: 1 }}></div>

        <div style={{ position: 'relative', zIndex: 10, maxWidth: '1280px', margin: '0 auto', padding: '0 24px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '40px' }}>
          <div style={{ flex: '1 1 500px', minWidth: '300px' }}>
            <span style={{ color: '#ff6b00', fontWeight: '700', fontSize: '0.85rem', letterSpacing: '1.5px' }}>OUR SERVICES</span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', color: 'white', margin: '20px 0', lineHeight: '1.1' }}>
              Digital Solutions That <span style={{ color: '#ff6b00' }}>Move Your Business Forward</span>
            </h1>
            <p style={{ fontSize: '1.05rem', color: '#d4d4d8', marginBottom: '35px', maxWidth: '480px' }}>
              We provide tailored web, software and marketing solutions to help your business grow, reach more customers and stay ahead in the digital world.
            </p>
            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              <Link href="#" style={{ padding: '14px 30px', borderRadius: '50px', background: '#ff6b00', color: 'white', fontWeight: 'bold', textDecoration: 'none' }}>
                Discuss Your Project
              </Link>
              <Link href="#" style={{ padding: '14px 30px', borderRadius: '50px', border: '1px solid white', color: 'white', fontWeight: 'bold', textDecoration: 'none' }}>
                Explore Services
              </Link>
            </div>
          </div>
          <div style={{ flex: '1 1 500px', minWidth: '300px', position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'absolute', top: '5%', left: '0%', background: 'white', padding: '10px 18px', borderRadius: '10px', boxShadow: '0 10px 30px rgba(0,0,0,0.2)', fontSize: '0.8rem', fontWeight: '600', color: '#333', zIndex: 2 }}>
              📈 More Traffic<br />More Customers
            </div>
            <div style={{ position: 'absolute', top: '15%', right: '0%', background: 'white', padding: '10px 18px', borderRadius: '10px', boxShadow: '0 10px 30px rgba(0,0,0,0.2)', fontSize: '0.8rem', fontWeight: '600', color: '#333', zIndex: 2 }}>
              🚀 Smart Solutions<br />Real Growth
            </div>
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" alt="Digital Solutions" style={{ width: '100%', maxWidth: '600px', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }} />
          </div>
        </div>
      </section>

      {/* Services Grid Section - Light Theme */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '60px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
          {[
            { title: "Web Development", desc: "Modern, responsive and high-performance websites tailored to your business goals.", icon: <path d="M8 5l-6 7 6 7M16 5l6 7-6 7M14 3l-4 18"/> },
            { title: "Software Solutions", desc: "Custom software and scalable solutions to streamline your operations.", icon: <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/> },
            { title: "Digital Marketing", desc: "Data-driven strategies to increase your visibility and reach the right audience.", icon: <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/> },
            { title: "UI/UX Design", desc: "User-focused designs that create better experiences and higher engagement.", icon: <><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></> },
            { title: "Branding & Graphic Design", desc: "Unique visual identities that make your brand stand out.", icon: <><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></> },
            { title: "SEO & Content", desc: "Improve your search rankings and build long-term organic growth.", icon: <><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></> },
          ].map((service, index) => (
            <div key={index} style={{ background: 'white', border: '1px solid #eaeaea', borderRadius: '12px', padding: '30px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                <div style={{ width: '45px', height: '45px', borderRadius: '8px', border: '1px solid rgba(255,107,0,0.3)', color: '#ff6b00', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '24px', height: '24px' }}>{service.icon}</svg>
                </div>
                <h3 style={{ fontSize: '1.15rem', color: '#0b132b', fontWeight: '700', margin: 0 }}>{service.title}</h3>
              </div>
              <p style={{ color: '#666', fontSize: '0.9rem', margin: 0 }}>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section - Dark Bar */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px 60px' }}>
        <div style={{ background: '#0b132b', borderRadius: '16px', padding: '40px 50px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', color: 'white', alignItems: 'center' }}>
          <div>
            <h3 style={{ fontSize: '1.6rem', color: 'white', marginBottom: '10px' }}>Built Around Your Business Goals</h3>
            <p style={{ color: '#a1a1aa', fontSize: '0.95rem' }}>We don't just build websites — we build digital solutions that help your business grow, compete and succeed.</p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 150px' }}>
              <h4 style={{ fontSize: '1rem', color: 'white', marginBottom: '5px' }}>Strategy First</h4>
              <p style={{ color: '#a1a1aa', fontSize: '0.85rem' }}>We understand your goals and create the right plan.</p>
            </div>
            <div style={{ flex: '1 1 150px' }}>
              <h4 style={{ fontSize: '1rem', color: 'white', marginBottom: '5px' }}>Tailored Development</h4>
              <p style={{ color: '#a1a1aa', fontSize: '0.85rem' }}>Solutions designed for your unique needs.</p>
            </div>
            <div style={{ flex: '1 1 150px' }}>
              <h4 style={{ fontSize: '1rem', color: 'white', marginBottom: '5px' }}>Growth-Focused Results</h4>
              <p style={{ color: '#a1a1aa', fontSize: '0.85rem' }}>Better performance, more opportunities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section style={{ background: '#fdfdfd', padding: '40px 0 80px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ marginBottom: '40px' }}>
            <span style={{ color: '#ff6b00', fontWeight: '700', fontSize: '0.85rem', letterSpacing: '1.5px' }}>OUR PROCESS</span>
            <h2 style={{ fontSize: '2rem', color: '#0b132b', margin: '10px 0' }}>How We Work</h2>
            <p style={{ color: '#666', maxWidth: '400px', fontSize: '0.95rem' }}>A simple and transparent process to turn your idea into a successful digital product.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', position: 'relative' }}>
            {[
              { num: '01', icon: '💬', title: 'Discover', desc: 'We learn about your business, goals and requirements.' },
              { num: '02', icon: '✏️', title: 'Plan & Design', desc: 'We create a clear strategy and design the best solution.' },
              { num: '03', icon: '⚙️', title: 'Build & Test', desc: 'We develop, test and ensure quality and performance.' },
              { num: '04', icon: '🚀', title: 'Launch & Grow', desc: 'We deploy and provide ongoing support for your success.' }
            ].map((step, index) => (
              <div key={index} style={{ background: 'white', borderRadius: '12px', padding: '25px', border: '1px solid #eaeaea' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
                  <span style={{ background: '#fff0e6', color: '#ff6b00', fontSize: '0.8rem', fontWeight: '700', padding: '4px 12px', borderRadius: '20px' }}>{step.num}</span>
                  <div style={{ fontSize: '1.5rem' }}>{step.icon}</div>
                </div>
                <h4 style={{ fontSize: '1rem', color: '#0b132b', marginBottom: '8px' }}>{step.title}</h4>
                <p style={{ color: '#666', fontSize: '0.85rem' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ background: '#fdfdfd', padding: '0 0 60px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ background: '#fff4ec', borderRadius: '16px', padding: '40px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '20px', border: '1px solid #ffe4d1' }}>
            <div style={{ flex: '1 1 400px' }}>
              <span style={{ color: '#ff6b00', fontWeight: '700', fontSize: '0.85rem', letterSpacing: '1.5px' }}>LET'S WORK TOGETHER</span>
              <h2 style={{ fontSize: '1.8rem', color: '#0b132b', margin: '10px 0' }}>Have a <span style={{ color: '#ff6b00' }}>Project</span> in Mind?</h2>
              <p style={{ color: '#666', fontSize: '0.95rem', marginBottom: '25px' }}>Let's turn your idea into a practical digital solution.</p>
              <Link href="#" style={{ padding: '14px 30px', borderRadius: '50px', background: '#ff6b00', color: 'white', fontWeight: 'bold', textDecoration: 'none', display: 'inline-block' }}>
                Get a Free Consultation
              </Link>
            </div>
            <div style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'flex-end' }}>
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=500&q=80" alt="Project" style={{ width: '100%', maxWidth: '350px', borderRadius: '8px' }} />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}