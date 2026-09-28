import { useEffect, useState } from 'react';
import { Logo } from '../data/icons';
import { LOCATION } from '../data';

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="site-footer">
      <div className="footer-content-section py-5">
        <div className="container-lg">
          <div className="row align-items-center justify-content-between g-4">
            {/* Left Content */}
            <div className="col-lg-5" data-aos="fade-right">
              <div className="footer-left-content">
                <Logo wide />
                <p className="footer-subtitle mt-3 mb-4">Premium Early Childhood Education for your little ones</p>
                
                <div className="footer-info-group">
                  <div className="footer-info-item d-flex gap-3 mb-3">
                    <div className="footer-icon"><i className="fa-solid fa-location-dot fa-fw" /></div>
                    <div>
                      <p className="small mb-1 text-white-50">Address</p>
                      <p className="small text-white mb-0">{LOCATION.address}</p>
                    </div>
                  </div>
                  
                  <div className="footer-info-item d-flex gap-3 mb-3">
                    <div className="footer-icon"><i className="fa-solid fa-clock fa-fw" /></div>
                    <div>
                      <p className="small mb-1 text-white-50">Hours</p>
                      <p className="small text-white mb-0">{LOCATION.hours}</p>
                    </div>
                  </div>
                  
                  <div className="footer-info-item d-flex gap-3 mb-3">
                    <div className="footer-icon"><i className="fa-solid fa-envelope fa-fw" /></div>
                    <div>
                      <p className="small mb-1 text-white-50">Email</p>
                      <a href={`mailto:${LOCATION.email}`} className="small text-white text-decoration-none footer-link">{LOCATION.email}</a>
                    </div>
                  </div>
                  
                  <div className="footer-info-item d-flex gap-3">
                    <div className="footer-icon"><i className="fa-solid fa-phone fa-fw" /></div>
                    <div>
                      <p className="small mb-1 text-white-50">Phone</p>
                      <a href={`tel:${LOCATION.phone}`} className="small text-white text-decoration-none footer-link">{LOCATION.phone}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card */}
            <div className="col-lg-6" data-aos="fade-left">
              <div className="footer-card-wrapper">
                <div className="footer-card-header">
                  <h3 className="footer-card-title">🔗 Quick Links</h3>
                </div>
                <div className="footer-card-content">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="footer_ul_wrap">
                        <h4 className="footer-section-title">Navigation</h4>
                        <ul className="list-unstyled small footer-list">
                          <li><a href="#" className="footer-link text-white-50 text-decoration-none">About Us</a></li>
                          <li><a href="#" className="footer-link text-white-50 text-decoration-none">Our Programs</a></li>
                          <li><a href="#" className="footer-link text-white-50 text-decoration-none">Curriculum</a></li>
                          <li><a href="#" className="footer-link text-white-50 text-decoration-none">Admissions</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="footer_ul_wrap">
                        <h4 className="footer-section-title">More</h4>
                        <ul className="list-unstyled small footer-list">
                          <li><a href="#" className="footer-link text-white-50 text-decoration-none">Contact Us</a></li>
                          <li><a href="#" className="footer-link text-white-50 text-decoration-none">Blogs</a></li>
                          <li><a href="#" className="footer-link text-white-50 text-decoration-none">Careers</a></li>
                          <li><a href="#" className="footer-link text-white-50 text-decoration-none">Gallery</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="footer_social d-flex gap-3 mt-3 pt-3 border-top border-secondary-subtle">
                    <a href="#" className="social-icon text-white text-decoration-none"><i className="fa-brands fa-facebook-f" /></a>
                    <a href="#" className="social-icon text-white text-decoration-none"><i className="fa-brands fa-instagram" /></a>
                    <a href="#" className="social-icon text-white text-decoration-none"><i className="fa-brands fa-youtube" /></a>
                    <a href="#" className="social-icon text-white text-decoration-none"><i className="fa-brands fa-whatsapp" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer_bottom border-top border-secondary-subtle py-3">
        <div className="container-lg">
          <div className="row align-items-center">
            <div className="col-12 text-center text-white-50 small">
              Copyright © 2026 by HIGREVA Preschools |
              <a href="#" className="text-white text-decoration-none mx-1 footer-link">T&C</a>
              <a href="#" className="text-white text-decoration-none mx-1 footer-link">Privacy Policy</a>
              <a href="#" className="text-white text-decoration-none mx-1 footer-link">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>

      <button onClick={scrollToTop} className={`back-to-top ${showBackToTop ? 'show' : ''}`} aria-label="Back to top">
        <i className="fa-solid fa-arrow-up" />
      </button>

      <style>{`
        .site-footer { 
          background: linear-gradient(135deg, #0f3a7d 0%, #1a5fc4 50%, #0f3a7d 100%); 
          padding-top: 0; 
          position: relative; 
          overflow: hidden;
        }
        
        .site-footer::before { 
          content: ''; 
          position: absolute; 
          top: -50%; 
          right: -10%; 
          width: 400px; 
          height: 400px; 
          border-radius: 50%; 
          background: rgba(255, 184, 28, 0.08);
        }
        
        .site-footer::after { 
          content: ''; 
          position: absolute; 
          bottom: -30%; 
          left: -5%; 
          width: 300px; 
          height: 300px; 
          border-radius: 50%; 
          background: rgba(255, 255, 255, 0.05);
        }
        
        .footer-content-section {
          position: relative;
          z-index: 2;
        }
        
        .footer-left-content {
          position: relative;
          z-index: 2;
        }
        
        .footer-subtitle {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.85);
        }
        
        .footer-info-group {
          background: rgba(255, 255, 255, 0.08);
          padding: 20px;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
        }
        
        .footer-info-item {
          transition: all 0.3s ease;
        }
        
        .footer-info-item:hover {
          transform: translateX(8px);
        }
        
        .footer-icon {
          width: 44px;
          height: 44px;
          background: linear-gradient(135deg, rgba(255, 184, 28, 0.2), rgba(255, 184, 28, 0.1));
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #ffb81c;
          font-size: 18px;
          border: 1px solid rgba(255, 184, 28, 0.3);
          transition: all 0.3s ease;
        }
        
        .footer-info-item:hover .footer-icon {
          background: linear-gradient(135deg, rgba(255, 184, 28, 0.3), rgba(255, 184, 28, 0.2));
          transform: scale(1.1) rotate(10deg);
        }
        
        .footer-card-wrapper {
          background: #ffffff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(15, 58, 125, 0.25);
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          z-index: 2;
        }
        
        .footer-card-wrapper:hover {
          transform: translateY(-12px);
          box-shadow: 0 30px 80px rgba(15, 58, 125, 0.35);
        }
        
        .footer-card-header {
          background: linear-gradient(135deg, #0f3a7d 0%, #1a5fc4 100%);
          padding: 20px 24px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }
        
        .footer-card-title {
          font-size: 18px;
          font-weight: 700;
          color: #ffffff;
          margin: 0;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .footer-card-content {
          padding: 24px;
        }
        
        .footer-section-title {
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: #ffffff;
          margin-bottom: 12px;
        }
        
        .footer-list {
          list-style: none;
        }
        
        .footer-list li {
          margin-bottom: 8px;
        }
        
        .footer-link {
          transition: all 0.3s ease;
          position: relative;
          display: inline-block;
        }
        
        .footer-link::before {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: #ffb81c;
          transition: width 0.3s ease;
        }
        
        .footer-link:hover {
          color: #ffb81c !important;
        }
        
        .footer-link:hover::before {
          width: 100%;
        }
        
        .footer_social {
          display: flex;
          gap: 12px;
        }
        
        .social-icon {
          width: 40px;
          height: 40px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          border: 2px solid transparent;
          font-size: 16px;
        }
        
        .social-icon:hover {
          background: #ffb81c;
          color: #0f3a7d !important;
          transform: translateY(-4px) rotate(5deg);
          border-color: rgba(255, 255, 255, 0.2);
        }
        
        .footer_bottom {
          background: transparent;
          border-color: rgba(255, 255, 255, 0.1) !important;
        }
        
        .back-to-top {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 1080;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: linear-gradient(135deg, #ffb81c, #ffa500);
          color: #0f3a7d;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 16px rgba(255, 184, 28, 0.3);
          opacity: 0;
          visibility: hidden;
          transform: translateY(20px) scale(0.8);
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          border: none;
          cursor: pointer;
          font-weight: bold;
        }
        
        .back-to-top:hover {
          transform: translateY(15px) scale(1.1);
          box-shadow: 0 8px 24px rgba(255, 184, 28, 0.5);
        }
        
        .back-to-top.show {
          opacity: 1;
          visibility: visible;
          transform: translateY(0) scale(1);
        }
        
        @media (max-width: 992px) {
          .footer-content-section {
            padding: 40px 0 !important;
          }
          
          .footer-card-wrapper {
            margin-top: 24px;
          }
        }
        
        @media (max-width: 768px) {
          .footer-card-content {
            padding: 16px;
          }
          
          .footer-section-title {
            font-size: 11px;
          }
        }
      `}</style>
    </footer>
  );
}
