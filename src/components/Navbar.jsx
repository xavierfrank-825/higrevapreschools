import { useState, useEffect } from 'react';

export default function Navbar({ onContactClick }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href, callback) => {
    e.preventDefault();
    setOpen(false);
    
    if (callback) {
      callback();
      return;
    }

    // Scroll to section
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Learning', href: '#learning' },
    { label: 'Contact', href: '#centres' },
  ];

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <a href="#" className="navbar-logo">
          <img src="/higreva-logo.svg" alt="HIGREVA" className="logo" />
          <span className="logo-text">HIGREVA</span>
        </a>

        {/* Hamburger Menu */}
        <button
          className={`hamburger ${open ? 'active' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Menu */}
        <nav className={`navbar-nav ${open ? 'open' : ''}`}>
          {menuItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="nav-item"
              onClick={(e) => handleNavClick(e, item.href, item.onClick)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <style>{`
        .navbar-header {
          background: #ffffff;
          border-bottom: 2px solid #f0f0f0;
          position: sticky;
          top: 0;
          z-index: 1000;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }

        .navbar-header.scrolled {
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
          border-bottom-color: #e0e0e0;
        }

        .navbar-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 20px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .navbar-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .navbar-logo:hover {
          transform: translateY(-2px);
        }

        .logo {
          height: 50px;
          width: auto;
          transition: transform 0.3s ease;
        }

        .navbar-logo:hover .logo {
          transform: rotate(5deg) scale(1.05);
        }

        .logo-text {
          font-size: 20px;
          font-weight: 900;
          color: #0f3a7d;
          letter-spacing: 1px;
          display: none;
        }

        @media (min-width: 768px) {
          .logo-text {
            display: inline;
          }
        }

        /* Hamburger Menu */
        .hamburger {
          display: flex;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 6px;
          transition: all 0.3s ease;
        }

        .hamburger span {
          display: block;
          width: 24px;
          height: 3px;
          background: #0f3a7d;
          border-radius: 2px;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .hamburger.active span:nth-child(1) {
          transform: rotate(45deg) translate(8px, 8px);
        }

        .hamburger.active span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.active span:nth-child(3) {
          transform: rotate(-45deg) translate(8px, -8px);
        }

        /* Navigation Menu */
        .navbar-nav {
          display: none;
          position: absolute;
          top: 70px;
          left: 0;
          right: 0;
          background: #ffffff;
          flex-direction: column;
          gap: 0;
          padding: 0;
          margin: 0;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
          border-bottom: 2px solid #f0f0f0;
        }

        .navbar-nav.open {
          display: flex;
        }

        .nav-item {
          padding: 16px 20px;
          color: #0f3a7d;
          text-decoration: none;
          font-weight: 600;
          font-size: 16px;
          transition: all 0.3s ease;
          border-bottom: 1px solid #f0f0f0;
          display: block;
        }

        .nav-item:last-child {
          border-bottom: none;
        }

        .nav-item:hover {
          background: linear-gradient(135deg, rgba(15, 58, 125, 0.05), rgba(255, 184, 28, 0.05));
          color: #1a5fc4;
          padding-left: 24px;
        }

        /* Desktop Menu */
        @media (min-width: 768px) {
          .hamburger {
            display: none;
          }

          .navbar-nav {
            display: flex;
            position: static;
            flex-direction: row;
            gap: 0;
            background: none;
            box-shadow: none;
            border: none;
            padding: 0;
          }

          .nav-item {
            padding: 8px 20px;
            border: none;
            border-bottom: 3px solid transparent;
            transition: all 0.3s ease;
          }

          .nav-item:hover {
            background: none;
            border-bottom-color: #ffb81c;
            padding-left: 20px;
          }
        }

        @media (max-width: 767px) {
          .navbar-container {
            padding: 0 16px;
          }

          .nav-item {
            padding: 14px 16px;
            font-size: 15px;
          }

          .logo {
            height: 45px;
          }
        }
      `}</style>
    </header>
  );
}
