import { STATS } from '../data';

export default function Banner() {
  return (
    <section id="home" className="hero-banner">
      {/* Background with gradient overlay */}
      <div className="hero-background">
        <div className="hero-overlay" />
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
      </div>

      <div className="container-lg position-relative" style={{ zIndex: 2 }}>
        <div className="row align-items-center min-vh-100 py-5">
          {/* Left Content */}
          <div className="col-lg-6 col-md-7 mb-4 mb-lg-0" data-aos="fade-right" data-aos-delay="200">
            <div className="hero-content">
              <div className="hero-badge mb-3">
                <span className="badge-icon">🎓</span>
                <span className="badge-text">Excellence in Early Education</span>
              </div>

              <h1 className="hero-title mb-4">
                Welcome to <span className="text-gradient">HIGREVA</span> Preschools
              </h1>

              <p className="hero-subtitle mb-5">
                Nurturing young minds through innovative <strong>Heureka Visible Thinking Curriculum</strong>. 
                We create a safe, stimulating environment where every child thrives, learns, and grows with joy and confidence.
              </p>

              <div className="hero-cta-group mb-5">
                <button className="btn-cta btn-cta-primary me-3 mb-2">
                  <i className="fa-solid fa-calendar-check me-2" />
                  Schedule a Tour
                </button>
                <button className="btn-cta btn-cta-secondary mb-2">
                  <i className="fa-solid fa-phone me-2" />
                  +91-8123708724
                </button>
              </div>

              <div className="hero-features">
                <div className="feature-item">
                  <i className="fa-solid fa-check-circle text-success" />
                  <span>NAEYC Aligned Curriculum</span>
                </div>
                <div className="feature-item">
                  <i className="fa-solid fa-check-circle text-success" />
                  <span>Expert Trained Staff</span>
                </div>
                <div className="feature-item">
                  <i className="fa-solid fa-check-circle text-success" />
                  <span>100% Safe & Secure</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Visual Element */}
          <div className="col-lg-6 col-md-5" data-aos="fade-left" data-aos-delay="300">
            <div className="hero-visual">
              <div className="hero-card-stack">
                <div className="hero-card hero-card-1">
                  <div className="card-icon">🎨</div>
                  <div className="card-text">Creative Learning</div>
                </div>
                <div className="hero-card hero-card-2">
                  <div className="card-icon">🤝</div>
                  <div className="card-text">Social Growth</div>
                </div>
                <div className="hero-card hero-card-3">
                  <div className="card-icon">🧠</div>
                  <div className="card-text">Brain Development</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="banner-stats row g-4 py-5 mt-5" data-aos="fade-up">
          {STATS.map((stat, idx) => (
            <div key={idx} className="col-md-6 col-lg-3">
              <div className="stat-card">
                <div className="stat-number">{stat.value}+</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .hero-banner {
          min-height: 90vh;
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #0f3a7d 0%, #1a5fc4 50%, #0f3a7d 100%);
          display: flex;
          align-items: center;
          padding: 80px 0 60px;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 20% 50%, rgba(255, 184, 28, 0.15), transparent 50%),
                      radial-gradient(circle at 80% 80%, rgba(26, 95, 196, 0.2), transparent 50%);
        }

        .hero-blob {
          position: absolute;
          border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
          filter: blur(40px);
          opacity: 0.3;
          animation: blob 7s infinite;
        }

        .hero-blob-1 {
          width: 300px;
          height: 300px;
          background: rgba(255, 184, 28, 0.4);
          top: -10%;
          right: -5%;
          animation-delay: 0s;
        }

        .hero-blob-2 {
          width: 250px;
          height: 250px;
          background: rgba(255, 255, 255, 0.2);
          bottom: -5%;
          left: -5%;
          animation-delay: 4s;
        }

        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        .hero-content {
          position: relative;
          z-index: 2;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.15);
          padding: 10px 20px;
          border-radius: 50px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(10px);
          font-size: 14px;
          color: #ffffff;
          font-weight: 500;
        }

        .badge-icon {
          font-size: 18px;
        }

        .hero-title {
          font-size: clamp(36px, 8vw, 64px);
          font-weight: 900;
          line-height: 1.2;
          color: #ffffff;
          margin-bottom: 24px;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }

        .text-gradient {
          background: linear-gradient(135deg, #ffb81c, #ffa500);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: clamp(16px, 3vw, 20px);
          color: rgba(255, 255, 255, 0.95);
          line-height: 1.6;
          max-width: 500px;
        }

        .hero-cta-group {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
        }

        .btn-cta {
          border-radius: 12px;
          font-weight: 600;
          font-size: 16px;
          padding: 14px 32px;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          border: none;
          cursor: pointer;
        }

        .btn-cta-primary {
          background: linear-gradient(135deg, #ffb81c, #ffa500);
          color: #0f3a7d;
          box-shadow: 0 8px 24px rgba(255, 184, 28, 0.3);
        }

        .btn-cta-primary:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 36px rgba(255, 184, 28, 0.5);
          color: #0f3a7d;
        }

        .btn-cta-secondary {
          background: rgba(255, 255, 255, 0.2);
          color: #ffffff;
          border: 2px solid rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(10px);
        }

        .btn-cta-secondary:hover {
          background: rgba(255, 255, 255, 0.3);
          color: #ffffff;
          border-color: rgba(255, 255, 255, 0.8);
          transform: translateY(-4px);
        }

        .hero-features {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 12px;
          color: rgba(255, 255, 255, 0.95);
          font-weight: 500;
        }

        .feature-item i {
          font-size: 20px;
        }

        .hero-visual {
          position: relative;
          height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-card-stack {
          position: relative;
          width: 280px;
          height: 350px;
        }

        .hero-card {
          position: absolute;
          width: 240px;
          height: 140px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.85));
          border-radius: 20px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.5);
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .hero-card-1 {
          top: 0;
          left: 20px;
          transform: rotate(-15deg);
          z-index: 3;
        }

        .hero-card-1:hover {
          transform: rotate(-15deg) translateY(-20px);
        }

        .hero-card-2 {
          top: 80px;
          left: 60px;
          z-index: 4;
        }

        .hero-card-2:hover {
          transform: translateY(-20px) scale(1.05);
        }

        .hero-card-3 {
          top: 140px;
          left: 20px;
          transform: rotate(15deg);
          z-index: 3;
        }

        .hero-card-3:hover {
          transform: rotate(15deg) translateY(-20px);
        }

        .card-icon {
          font-size: 48px;
        }

        .card-text {
          font-size: 16px;
          font-weight: 600;
          color: #0f3a7d;
          text-align: center;
        }

        .banner-stats {
          background: rgba(255, 255, 255, 0.08);
          padding: 40px;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
        }

        .stat-card {
          text-align: center;
          padding: 20px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-8px);
        }

        .stat-number {
          font-size: clamp(32px, 5vw, 48px);
          font-weight: 900;
          color: #ffb81c;
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .hero-banner {
            min-height: auto;
            padding: 100px 0 60px;
          }

          .hero-title {
            font-size: 36px;
          }

          .hero-subtitle {
            font-size: 16px;
          }

          .hero-visual {
            height: 350px;
            margin-top: 40px;
          }

          .hero-card-stack {
            width: 200px;
            height: 280px;
          }

          .hero-card {
            width: 180px;
            height: 110px;
            padding: 16px;
          }

          .card-icon {
            font-size: 36px;
          }

          .card-text {
            font-size: 14px;
          }

          .btn-cta {
            font-size: 14px;
            padding: 12px 24px;
          }

          .banner-stats {
            padding: 24px;
          }

          .stat-number {
            font-size: 32px;
          }
        }
      `}</style>
    </section>
  );
}
