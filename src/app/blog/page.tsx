import React from 'react';
import Link from 'next/link';
import './blog.css';

export default function Blog() {
  return (
    <div style={{ background: '#fafbfc', color: '#333', minHeight: '100vh' }}>
      
            {/* Hero Section - DARK THEME */}
      <section className="blog-hero" style={{ position: 'relative', background: '#090a15', padding: '160px 0 100px', color: 'white', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(0, 102, 255, 0.15) 0%, transparent 60%)', filter: 'blur(80px)', zIndex: 1 }}></div>
        <div style={{ position: 'absolute', bottom: '-20%', left: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(255, 107, 0, 0.15) 0%, transparent 60%)', filter: 'blur(60px)', zIndex: 1 }}></div>

        <div className="container hero-grid" style={{ position: 'relative', zIndex: 10, display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '40px', maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ flex: '1 1 500px', minWidth: '300px' }}>
            <span style={{ color: '#ff6b00', fontWeight: '800', fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase' }}>OUR BLOG</span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.8rem)', color: 'white', margin: '20px 0', lineHeight: '1.1', letterSpacing: '-1px' }}>
              Ideas, Tips &<br /><span style={{ color: '#ff6b00' }}>Digital Growth</span>
            </h1>
            <p style={{ fontSize: '1.05rem', color: '#d4d4d8', marginBottom: '35px', maxWidth: '480px' }}>
              Stay updated with the latest trends, tips and strategies from the world of digital marketing, web development, and design.
            </p>
            <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ fontSize: '1.5rem', color: '#ff6b00' }}>📝</div>
                <div><strong style={{ display: 'block', fontSize: '1.2rem', color: 'white' }}>100+</strong><span style={{ fontSize: '0.85rem', color: '#a1a1aa' }}>Articles Published</span></div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ fontSize: '1.5rem', color: '#ff6b00' }}>👥</div>
                <div><strong style={{ display: 'block', fontSize: '1.2rem', color: 'white' }}>10K+</strong><span style={{ fontSize: '0.85rem', color: '#a1a1aa' }}>Monthly Readers</span></div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ fontSize: '1.5rem', color: '#ff6b00' }}>🏆</div>
                <div><strong style={{ display: 'block', fontSize: '1.2rem', color: 'white' }}>5+</strong><span style={{ fontSize: '0.85rem', color: '#a1a1aa' }}>Years of Insights</span></div>
              </div>
            </div>
          </div>
          <div style={{ flex: '1 1 500px', minWidth: '300px', position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'absolute', top: '-20px', right: '10%', fontFamily: "'Caveat', cursive", fontSize: '2.2rem', color: 'white', transform: 'rotate(-5deg)', lineHeight: 1, textAlign: 'right', zIndex: 2 }}>
              Let's<br />Grow<br />Together
            </div>
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" alt="Blog Devices" style={{ width: '100%', maxWidth: '650px', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }} />
          </div>
        </div>
      </section>

      {/* Main Blog Area */}
      <section className="blog-section">
        <div className="container blog-layout">
          
          {/* Left Side: Articles */}
          <div className="blog-articles">
            <div className="section-top-bar">
              <div>
                <h2>Latest Articles</h2>
                <p>Fresh insights, expert tips and real-world strategies to help you grow online.</p>
              </div>
              <div className="controls">
                <select className="sort-select">
                  <option>Newest First</option>
                  <option>Oldest First</option>
                  <option>Popular</option>
                </select>
                <div className="search-box">
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                  <input type="text" placeholder="Search articles..." />
                </div>
              </div>
            </div>

            <div className="articles-grid">
              {[
                { badge: "💻 Web Development", badgeClass: "", title: "Why MERN Stack is the Best Choice for Modern Web Applications", desc: "Discover why MERN (MongoDB, Express.js, React, Node.js) is the ideal stack for building fast, scalable and secure web applications...", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80", date: "Jan 12, 2025" },
                { badge: "📈 Digital Marketing", badgeClass: "green", title: "10 Proven SEO Strategies to Rank Higher in 2025", desc: "Search engine optimization is still one of the most powerful ways to grow your business online. Here are 10 proven SEO strategies...", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80", date: "Jan 8, 2025" },
                { badge: "🎨 UI/UX Design", badgeClass: "purple", title: "UI/UX Design Trends in 2025 You Should Know", desc: "User experience is more important than ever. Explore the top UI/UX design trends that will dominate in 2025 and beyond...", img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600&q=80", date: "Jan 5, 2025" },
                { badge: "💡 Business Tips", badgeClass: "pink", title: "How to Choose the Right Digital Agency for Your Business", desc: "Choosing the right digital agency can be challenging. Here are key factors to consider before you make a decision...", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80", date: "Dec 28, 2024" },
                { badge: "📱 Social Media", badgeClass: "", title: "Social Media Trends 2025: What You Need to Know", desc: "Social media is constantly evolving. Here are the biggest trends in 2025 that can help you stay ahead and grow your brand...", img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=600&q=80", date: "Dec 20, 2024" },
                { badge: "💻 Web Development", badgeClass: "", title: "How to Improve Website Speed and Performance", desc: "A faster website means better user experience, higher rankings and more conversions. Here's how you can improve your website speed...", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80", date: "Dec 15, 2024" }
              ].map((article, index) => (
                <div key={index} className="article-card">
                  <div className="article-img">
                    <div className={`article-badge ${article.badgeClass}`}>{article.badge}</div>
                    <img src={article.img} alt={article.title} />
                  </div>
                  <div className="article-content">
                    <h3>{article.title}</h3>
                    <p>{article.desc}</p>
                    <div className="article-footer">
                      <div className="author-info">
                        <img src="https://i.pravatar.cc/100?img=12" alt="Author" />
                        <div><strong>Junayet Khan Jon</strong><span>{article.date}</span></div>
                      </div>
                      <Link href="#" className="read-more">Read More <span>→</span></Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Sidebar */}
          <div className="sidebar">
            {/* Categories Widget */}
            <div className="widget">
              <h3 className="widget-title">Categories</h3>
              <ul className="category-list">
                <li><Link href="#">💻 Web Development <span>12</span></Link></li>
                <li><Link href="#">📈 Digital Marketing <span>10</span></Link></li>
                <li><Link href="#">🎨 UI/UX Design <span>8</span></Link></li>
                <li><Link href="#">💡 Business Tips <span>7</span></Link></li>
                <li><Link href="#">📱 Social Media <span>6</span></Link></li>
                <li><Link href="#">✏️ Graphic Design <span>5</span></Link></li>
                <li><Link href="#">⚙️ Software Development <span>4</span></Link></li>
              </ul>
            </div>

            {/* Popular Posts Widget */}
            <div className="widget">
              <h3 className="widget-title">Popular Posts</h3>
              <div className="popular-posts">
                <div className="popular-post">
                  <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=150&q=80" alt="Post" />
                  <div>
                    <h4>Why MERN Stack is the Best Choice for Modern Web Apps</h4>
                    <span>Jan 12, 2025</span>
                  </div>
                </div>
                <div className="popular-post">
                  <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=150&q=80" alt="Post" />
                  <div>
                    <h4>10 Proven SEO Strategies to Rank Higher in 2025</h4>
                    <span>Jan 8, 2025</span>
                  </div>
                </div>
                <div className="popular-post">
                  <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=150&q=80" alt="Post" />
                  <div>
                    <h4>UI/UX Design Trends in 2025 You Should Know</h4>
                    <span>Jan 5, 2025</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter Widget */}
            <div className="widget newsletter-widget">
              <div className="newsletter-icon">✈️</div>
              <h3>Stay Updated</h3>
              <p>Get the latest articles, tips and exclusive resources delivered to your inbox.</p>
              <form className="newsletter-form">
                <input type="email" placeholder="Enter your email address" required />
                <button type="submit" className="btn btn-primary">Subscribe</button>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* CTA & Stats Section */}
      <section className="cta-stats-section">
        <div className="container">
          <div className="cta-stats-inner">
            <div className="cta-left">
              <span style={{ color: '#ff6b00', fontWeight: '800', fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase' }}>Let's Work Together</span>
              <h2>Have a <span>Project</span> in Mind?</h2>
              <p>Let's turn your idea into a powerful digital solution.</p>
              <Link href="#" className="btn btn-primary" style={{ padding: '16px 36px' }}>
                Get a Free Consultation <span className="btn-icon-circle">➔</span>
              </Link>
            </div>
            <div className="stats-right">
              <div className="stat-item">
                <div className="stat-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></div>
                <h3>20+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat-item">
                <div className="stat-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg></div>
                <h3>8+</h3>
                <p>Team Members</p>
              </div>
              <div className="stat-item">
                <div className="stat-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 3h8v5a4 4 0 0 1-8 0V3Zm0 2H4v2a4 4 0 0 0 4 4m8-6h4v2a4 4 0 0 1-4 4m-4 1v5m-4 0h8m-10 4h12"/></svg></div>
                <h3>3+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat-item">
                <div className="stat-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg></div>
                <h3>100%</h3>
                <p>Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}