export default function Welcome() {
  const values = [
    {
      icon: '💡',
      title: 'Innovation',
      description: 'Cutting-edge curriculum and modern teaching methodologies'
    },
    {
      icon: '❤️',
      title: 'Care & Compassion',
      description: 'Every child is valued, nurtured, and supported individually'
    },
    {
      icon: '🌱',
      title: 'Holistic Development',
      description: 'Academic, social, emotional, and physical growth'
    },
    {
      icon: '🤝',
      title: 'Community',
      description: 'Strong partnerships with parents and stakeholders'
    },
  ];

  const highlights = [
    {
      icon: '👨‍🏫',
      title: 'Expert Educators',
      description: 'Psychology background, trained in NAEYC standards'
    },
    {
      icon: '🏆',
      title: '18+ Years Legacy',
      description: '25+ Awards & Recognition, trusted by 5000+ families'
    },
    {
      icon: '🔒',
      title: 'Safe Environment',
      description: 'CCTV surveillance, hygiene protocols, secure campus'
    },
    {
      icon: '📚',
      title: 'Heureka Curriculum',
      description: 'Harvard-inspired visible thinking methodology'
    },
  ];

  return (
    <section id="about" className="welcome-section py-5">
      <div className="container-lg">
        {/* Header */}
        <div className="section-header text-center mb-5" data-aos="fade-down">
          <h2 className="section-title mb-3">About HIGREVA Preschools</h2>
          <p className="section-subtitle">Building foundations for lifelong learning and success</p>
        </div>

        {/* Mission & Vision Row */}
        <div className="row align-items-center g-5 mb-5">
          {/* Left - Mission/Vision Content */}
          <div className="col-lg-6" data-aos="fade-right">
            <div className="mission-content">
              <div className="mission-card mb-4">
                <div className="mission-icon">🎯</div>
                <h3 className="mission-title">Our Mission</h3>
                <p className="mission-text">
                  To nurture young minds through innovative education that encourages creativity, critical thinking, 
                  and confident communication. We believe every child has unique potential and deserves a safe, 
                  stimulating environment to discover and develop their abilities.
                </p>
              </div>

              <div className="mission-card">
                <div className="mission-icon">🌟</div>
                <h3 className="mission-title">Our Vision</h3>
                <p className="mission-text">
                  To be the most trusted preschool chain in India, recognized for excellence in early childhood 
                  education, innovative curriculum, and holistic child development. Creating a community where 
                  children thrive, parents trust, and educators excel.
                </p>
              </div>
            </div>
          </div>

          {/* Right - Visual Stats */}
          <div className="col-lg-6" data-aos="fade-left">
            <div className="highlights-grid">
              {highlights.map((highlight, idx) => (
                <div key={idx} className="highlight-card">
                  <div className="highlight-icon">{highlight.icon}</div>
                  <h4 className="highlight-title">{highlight.title}</h4>
                  <p className="highlight-desc">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="row mt-5 pt-5" data-aos="fade-up">
          <div className="col-12">
            <h3 className="text-center section-title-sm mb-4">Our Core Values</h3>
            <div className="values-grid">
              {values.map((value, idx) => (
                <div key={idx} className="value-card">
                  <div className="value-icon">{value.icon}</div>
                  <h4 className="value-title">{value.title}</h4>
                  <p className="value-description">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Parents Choose Us */}
        <div className="row mt-5 pt-5" data-aos="fade-up">
          <div className="col-12">
            <h3 className="text-center section-title-sm mb-4">Why Parents Choose HIGREVA</h3>
            <div className="features-list">
              <div className="feature-row">
                <div className="feature-number">✓</div>
                <div className="feature-content">
                  <h5>Proven Track Record</h5>
                  <p>18+ years of excellence, 5000+ happy families, 25+ awards</p>
                </div>
              </div>
              <div className="feature-row">
                <div className="feature-number">✓</div>
                <div className="feature-content">
                  <h5>Holistic Development</h5>
                  <p>Focus on academic, social, emotional, and physical growth</p>
                </div>
              </div>
              <div className="feature-row">
                <div className="feature-number">✓</div>
                <div className="feature-content">
                  <h5>Safety First</h5>
                  <p>CCTV surveillance, trained staff, strict hygiene protocols</p>
                </div>
              </div>
              <div className="feature-row">
                <div className="feature-number">✓</div>
                <div className="feature-content">
                  <h5>Innovative Curriculum</h5>
                  <p>Heureka Visible Thinking methodology inspired by Harvard</p>
                </div>
              </div>
              <div className="feature-row">
                <div className="feature-number">✓</div>
                <div className="feature-content">
                  <h5>Expert Team</h5>
                  <p>Psychology background educators, NAEYC aligned training</p>
                </div>
              </div>
              <div className="feature-row">
                <div className="feature-number">✓</div>
                <div className="feature-content">
                  <h5>Multiple Locations</h5>
                  <p>12+ centers across Bangalore for convenient access</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .welcome-section {
          background: linear-gradient(180deg, #ffffff 0%, #f8faff 100%);
          position: relative;
          overflow: hidden;
          padding: 60px 0;
        }

        .section-header {
          position: relative;
          z-index: 2;
        }

        .section-title {
          font-size: clamp(32px, 6vw, 48px);
          font-weight: 900;
          color: #0f3a7d;
          margin-bottom: 12px;
        }

        .section-title-sm {
          font-size: clamp(28px, 5vw, 40px);
          font-weight: 800;
          color: #0f3a7d;
        }

        .section-subtitle {
          font-size: 18px;
          color: #666;
          max-width: 500px;
          margin: 0 auto;
        }

        .mission-card {
          background: linear-gradient(135deg, #ffffff 0%, #f8faff 100%);
          border: 2px solid #e0e7ff;
          border-radius: 20px;
          padding: 32px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .mission-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #0f3a7d, #1a5fc4, #ffb81c);
        }

        .mission-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(15, 58, 125, 0.1);
          border-color: #0f3a7d;
        }

        .mission-icon {
          font-size: 48px;
          margin-bottom: 16px;
        }

        .mission-title {
          font-size: 24px;
          font-weight: 700;
          color: #0f3a7d;
          margin-bottom: 12px;
        }

        .mission-text {
          font-size: 16px;
          color: #555;
          line-height: 1.7;
          margin: 0;
        }

        .highlights-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .highlight-card {
          background: linear-gradient(135deg, rgba(15, 58, 125, 0.05), rgba(255, 184, 28, 0.05));
          border: 2px solid rgba(15, 58, 125, 0.1);
          border-radius: 16px;
          padding: 24px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .highlight-card:hover {
          border-color: #0f3a7d;
          box-shadow: 0 8px 24px rgba(15, 58, 125, 0.1);
          transform: translateY(-4px);
        }

        .highlight-icon {
          font-size: 40px;
          margin-bottom: 12px;
        }

        .highlight-title {
          font-size: 16px;
          font-weight: 700;
          color: #0f3a7d;
          margin-bottom: 8px;
        }

        .highlight-desc {
          font-size: 14px;
          color: #666;
          margin: 0;
          line-height: 1.5;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 24px;
        }

        .value-card {
          background: #ffffff;
          border: 2px solid #e0e7ff;
          border-radius: 16px;
          padding: 28px;
          text-align: center;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          overflow: hidden;
        }

        .value-card::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(255, 184, 28, 0.1), transparent);
          transition: all 0.3s ease;
        }

        .value-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 20px 50px rgba(15, 58, 125, 0.12);
          border-color: #ffb81c;
        }

        .value-card:hover::before {
          top: -20%;
          right: -20%;
        }

        .value-icon {
          font-size: 52px;
          margin-bottom: 16px;
          position: relative;
          z-index: 2;
        }

        .value-title {
          font-size: 18px;
          font-weight: 700;
          color: #0f3a7d;
          margin-bottom: 12px;
          position: relative;
          z-index: 2;
        }

        .value-description {
          font-size: 14px;
          color: #666;
          line-height: 1.6;
          margin: 0;
          position: relative;
          z-index: 2;
        }

        .features-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
        }

        .feature-row {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          padding: 20px;
          background: rgba(15, 58, 125, 0.02);
          border-radius: 12px;
          transition: all 0.3s ease;
          border-left: 4px solid transparent;
        }

        .feature-row:hover {
          background: rgba(15, 58, 125, 0.05);
          border-left-color: #ffb81c;
          transform: translateX(4px);
        }

        .feature-number {
          font-size: 24px;
          color: #ffb81c;
          font-weight: 900;
          flex-shrink: 0;
          min-width: 30px;
        }

        .feature-content h5 {
          font-size: 16px;
          font-weight: 700;
          color: #0f3a7d;
          margin-bottom: 6px;
        }

        .feature-content p {
          font-size: 14px;
          color: #666;
          margin: 0;
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .highlights-grid {
            grid-template-columns: 1fr;
          }

          .values-grid {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 16px;
          }

          .mission-card {
            padding: 24px;
            margin-bottom: 20px;
          }

          .value-card {
            padding: 20px;
          }

          .feature-row {
            padding: 16px;
          }
        }
      `}</style>
    </section>
  );
}
