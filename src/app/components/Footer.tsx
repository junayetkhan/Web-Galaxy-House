        {/* ================= FOOTER ================= */}
        <footer className="footer" id="contact">
          <div className="container">
            
            {/* 🛑 এখানে যে footer-cta ডিভ ছিল, সেটা পুরোপুরি মুছে ফেলুন 🛑 */}

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