import React from 'react';
import Link from 'next/link';
import './portfolio.css'; 

export default function Portfolio() {
  return (
    <div style={{ background: '#ffffff', color: '#333', minHeight: '100vh' }}>
      
      {/* Hero Section - DARK THEME */}
      <section style={{ position: 'relative', background: '#090a15', padding: '160px 0 100px', color: 'white', overflow: 'hidden' }}>
        {/* Glow Effects */}
        <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(0, 102, 255, 0.15) 0%, transparent 60%)', filter: 'blur(80px)', zIndex: 1 }}></div>
        <div style={{ position: 'absolute', bottom: '-20%', left: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(255, 107, 0, 0.15) 0%, transparent 60%)', filter: 'blur(60px)', zIndex: 1 }}></div>

        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '40px', position: 'relative', zIndex: 10 }}>
          <div style={{ flex: '1 1 500px', minWidth: '300px' }}>
            <span style={{ color: '#ff6b00', fontWeight: '800', fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase' }}>Our Portfolio</span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.8rem)', color: 'white', margin: '20px 0', lineHeight: '1.1', letterSpacing: '-1px' }}>
              Real Projects.<br /><span style={{ color: '#ff6b00' }}>Real Results.</span>
            </h1>
            <p style={{ fontSize: '1.05rem', color: '#d4d4d8', marginBottom: '35px', maxWidth: '480px' }}>
              We've helped businesses across different industries build powerful digital solutions. Explore our latest work and see how we turn ideas into impactful products.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 20px', borderRadius: '50px', background: 'rgba(255,107,0,0.1)', border: '1px solid rgba(255,107,0,0.3)', fontSize: '0.85rem', fontWeight: '600', color: '#ff6b00' }}>💻 Web Development</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 20px', borderRadius: '50px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', fontSize: '0.85rem', fontWeight: '600', color: '#d4d4d8' }}>📱 Mobile App</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 20px', borderRadius: '50px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', fontSize: '0.85rem', fontWeight: '600', color: '#d4d4d8' }}>🎨 UI/UX Design</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 20px', borderRadius: '50px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', fontSize: '0.85rem', fontWeight: '600', color: '#d4d4d8' }}>📈 Digital Marketing</div>
            </div>
          </div>
          <div style={{ flex: '1 1 500px', minWidth: '300px', position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" alt="Portfolio Devices" style={{ width: '100%', maxWidth: '650px', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }} />
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section style={{ padding: '40px 0', background: '#ffffff', position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button style={{ padding: '10px 24px', borderRadius: '50px', border: '1px solid #ff6b00', background: '#ff6b00', color: 'white', fontWeight: '600', fontSize: '0.9rem', cursor: 'pointer', boxShadow: '0 5px 15px rgba(255,107,0,0.3)' }}>All Projects</button>
          <button style={{ padding: '10px 24px', borderRadius: '50px', border: '1px solid #eef0f4', background: 'white', color: '#555', fontWeight: '600', fontSize: '0.9rem', cursor: 'pointer', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>Web Development</button>
          <button style={{ padding: '10px 24px', borderRadius: '50px', border: '1px solid #eef0f4', background: 'white', color: '#555', fontWeight: '600', fontSize: '0.9rem', cursor: 'pointer', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>Mobile App</button>
          <button style={{ padding: '10px 24px', borderRadius: '50px', border: '1px solid #eef0f4', background: 'white', color: '#555', fontWeight: '600', fontSize: '0.9rem', cursor: 'pointer', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>UI/UX Design</button>
          <button style={{ padding: '10px 24px', borderRadius: '50px', border: '1px solid #eef0f4', background: 'white', color: '#555', fontWeight: '600', fontSize: '0.9rem', cursor: 'pointer', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>Digital Marketing</button>
          <button style={{ padding: '10px 24px', borderRadius: '50px', border: '1px solid #eef0f4', background: 'white', color: '#555', fontWeight: '600', fontSize: '0.9rem', cursor: 'pointer', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>Branding</button>
          <button style={{ padding: '10px 24px', borderRadius: '50px', border: '1px solid #eef0f4', background: 'white', color: '#555', fontWeight: '600', fontSize: '0.9rem', cursor: 'pointer', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>SEO & Content</button>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section style={{ padding: '0 0 80px', background: '#ffffff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          
          {[
            { title: "ABL Travels", category: "Travel & Tour Agency", desc: "A dynamic website with booking, tour management and inquiry system for ABL Travels.", tech: ["React", "Node.js", "MongoDB"], badge: "💻 Website", badgeColor: "#0066ff", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" },
            { title: "McDonie", category: "Fashion E-commerce", desc: "A modern e-commerce platform with product catalog, cart and secure checkout.", tech: ["React", "Node.js", "MongoDB"], badge: "💻 Website", badgeColor: "#9b3fe8", img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=600&q=80" },
            { title: "LifeCare Health", category: "Healthcare Management", desc: "A complete web application for patient management, appointments and medical records.", tech: ["React", "Node.js", "MongoDB"], badge: "📱 Web App", badgeColor: "#00b87c", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" },
            { title: "Green University", category: "Educational Institute", desc: "A clean and responsive website with admission information and academic details.", tech: ["React", "Tailwind CSS", "Next.js"], badge: "💻 Website", badgeColor: "#0066ff", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80" },
            { title: "Business CRM", category: "CRM & Project Management", desc: "A custom CRM system to manage clients, projects and team collaboration.", tech: ["React", "Node.js", "MongoDB"], badge: "📱 Web App", badgeColor: "#00b87c", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" },
            { title: "Nexo Cloud BD", category: "SEO & Digital Marketing", desc: "Rank improvement and organic traffic growth through strategic SEO & content marketing.", tech: ["SEO", "Content Writing", "Analytics"], badge: "📈 Digital Marketing", badgeColor: "#0066ff", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" },
            { title: "Holiday Planner App", category: "Travel Mobile App", desc: "A user-friendly mobile application for travel booking, tour planning and real-time updates.", tech: ["Flutter", "Firebase", "UI/UX"], badge: "🎨 UI/UX Design", badgeColor: "#e83f9b", img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80" },
            { title: "Baby Safer Hub", category: "Brand Identity", desc: "Complete brand identity design including logo, color palette and social media assets.", tech: ["Logo Design", "Brand Guide", "Social Media"], badge: "🎨 Branding", badgeColor: "#9b3fe8", img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80" },
            { title: "Web Galaxy House Blog", category: "Content Marketing", desc: "SEO-optimized blog with valuable tech and business insights to grow audience and brand authority.", tech: ["SEO", "Content Writing", "Blogging"], badge: "📈 SEO & Content", badgeColor: "#00b87c", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80" }
          ].map((project, index) => (
            <div key={index} style={{ background: 'white', border: '1px solid #eef0f4', borderRadius: '20px', overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', transition: '0.3s' }}>
              
              <div style={{ position: 'relative', height: '240px', background: '#f4f5f7', padding: '20px 20px 0' }}>
                <div style={{ position: 'absolute', top: '20px', left: '20px', background: project.badgeColor, color: 'white', padding: '6px 14px', borderRadius: '30px', fontSize: '0.75rem', fontWeight: '600', zIndex: 2 }}>
                  {project.badge}
                </div>
                <div style={{ width: '100%', height: '100%', borderRadius: '12px 12px 0 0', overflow: 'hidden', boxShadow: '0 5px 15px rgba(0,0,0,0.08)' }}>
                  <img src={project.img} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                </div>
              </div>

              <div style={{ padding: '25px 30px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3 style={{ fontSize: '1.3rem', color: '#0b132b', marginBottom: '6px' }}>{project.title}</h3>
                <span style={{ fontSize: '0.85rem', color: '#888', marginBottom: '15px', fontWeight: '500' }}>{project.category}</span>
                <p style={{ fontSize: '0.95rem', color: '#666', marginBottom: '25px', flex: 1, lineHeight: '1.5' }}>{project.desc}</p>
                
                <div style={{ display: 'flex', gap: '8px', marginBottom: '25px', flexWrap: 'wrap' }}>
                  {project.tech.map((t, i) => (
                    <span key={i} style={{ background: '#f4f5f7', color: '#555', padding: '6px 14px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: '600' }}>{t}</span>
                  ))}
                </div>
                
                <Link href="#" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#ff6b00', fontWeight: '700', fontSize: '0.95rem', marginTop: 'auto', paddingTop: '20px', borderTop: '1px solid #eef0f4', textDecoration: 'none' }}>
                  View Project <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}