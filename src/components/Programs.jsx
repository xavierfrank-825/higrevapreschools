import { PROGRAMS, PROGRAM_IMG } from '../data';
import LazyImage from './LazyImage';

export default function Programs() {
  const programColors = {
    playgroup: '#FF6B6B',
    nursery: '#4ECDC4',
    junior: '#45B7D1',
    senior: '#FFA07A',
  };

  const ageGroupEmojis = {
    'Junior PlayGroup': '👶',
    'PlayGroup': '🧒',
    'Nursery': '👧',
    'HIGREVA Junior (Junior KG)': '🧑',
    'HIGREVA Senior (Senior KG)': '👨‍🎓',
  };

  return (
    <section id="learning" className="programs-section py-5">
      <div className="container-lg">
        {/* Header */}
        <div className="section-header text-center mb-5" data-aos="fade-down">
          <h2 className="section-title mb-3">Our Programs & Curriculum</h2>
          <p className="section-subtitle">Age-appropriate learning from 18 months to 6 years</p>
        </div>

        {/* Programs Grid */}
        <div className="programs-grid" data-aos="fade-up">
          {PROGRAMS.map((program, idx) => {
            const imgKey = program.imgKey || 'playgroup';
            const colorKey = program.name.toLowerCase().includes('senior') ? 'senior' 
                           : program.name.toLowerCase().includes('junior') && program.name.includes('PlayGroup') ? 'playgroup'
                           : program.name.toLowerCase().includes('junior') ? 'junior'
                           : program.name.toLowerCase().includes('nursery') ? 'nursery'
                           : 'playgroup';
            
            return (
              <div key={program.name} className="program-card-wrapper" data-aos="fade-up" data-aos-delay={idx * 100}>
                <div className="program-card">
                  {/* Card Image Section */}
                  <div className="program-image-section" style={{ borderTopColor: programColors[colorKey] }}>
                    <LazyImage
                      src={PROGRAM_IMG[imgKey] || '/src/assets/319600.jpeg'}
                      alt={program.name}
                      className="program-image"
                    />
                    <div className="program-overlay">
                      <span className="overlay-badge">Ages {program.age}</span>
                    </div>
                    <div className="program-emoji">{ageGroupEmojis[program.name] || '📚'}</div>
                  </div>

                  {/* Card Content */}
                  <div className="program-content">
                    <h3 className="program-title">{program.name}</h3>
                    <p className="program-age">
                      <i className="fa-solid fa-birthday-cake me-2" />
                      {program.age}
                    </p>

                    {/* Curriculum Highlights */}
                    <div className="curriculum-highlights">
                      <p className="highlights-label">What Your Child Will Learn:</p>
                      <ul className="highlights-list">
                        {program.bullets.map((bullet, bidx) => (
                          <li key={bidx}>
                            <span className="bullet-point">✓</span>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Color accent */}
                    <div className="program-accent" style={{ backgroundColor: programColors[colorKey] }} />
                  </div>

                  {/* Hover CTA */}
                  <div className="program-cta">
                    <button className="btn-learn-more">
                      Learn More <i className="fa-solid fa-arrow-right ms-2" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="programs-cta text-center mt-5" data-aos="fade-up">
          <h3 className="cta-title mb-3">Ready to Start Your Child's Journey?</h3>
          <p className="cta-description mb-4">
            Our experienced educators are ready to welcome your child to HIGREVA
          </p>
          <button className="btn-enroll">
            <i className="fa-solid fa-star me-2" />
            Book a Tour Today
          </button>
        </div>
      </div>

      <style>{`
        .programs-section {
          background: linear-gradient(180deg, #f8faff 0%, #ffffff 100%);
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

        .section-subtitle {
          font-size: 18px;
          color: #666;
          max-width: 500px;
          margin: 0 auto;
        }

        .programs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 32px;
          margin-bottom: 40px;
        }

        .program-card-wrapper {
          position: relative;
          height: 100%;
        }

        .program-card {
          background: #ffffff;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(15, 58, 125, 0.08);
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          height: 100%;
          display: flex;
          flex-direction: column;
          position: relative;
          border-top: 5px solid #0f3a7d;
        }

        .program-card:hover {
          transform: translateY(-20px);
          box-shadow: 0 25px 60px rgba(15, 58, 125, 0.15);
        }

        .program-image-section {
          position: relative;
          width: 100%;
          height: 220px;
          overflow: hidden;
          border-bottom: 4px solid;
          background: linear-gradient(135deg, rgba(15, 58, 125, 0.05), rgba(255, 184, 28, 0.05));
        }

        .program-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease, filter 0.3s ease;
        }

        .program-card:hover .program-image {
          transform: scale(1.12);
          filter: brightness(0.85);
        }

        .program-overlay {
          position: absolute;
          inset: 0;
          background: rgba(15, 58, 125, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .program-card:hover .program-overlay {
          opacity: 1;
        }

        .overlay-badge {
          background: linear-gradient(135deg, #ffb81c, #ffa500);
          color: #0f3a7d;
          padding: 8px 20px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 14px;
        }

        .program-emoji {
          position: absolute;
          top: 12px;
          right: 12px;
          font-size: 44px;
          background: rgba(255, 255, 255, 0.95);
          width: 64px;
          height: 64px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
          transition: all 0.3s ease;
        }

        .program-card:hover .program-emoji {
          transform: scale(1.15) rotate(15deg);
        }

        .program-content {
          padding: 28px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .program-title {
          font-size: 22px;
          font-weight: 800;
          color: #0f3a7d;
          margin-bottom: 8px;
          line-height: 1.3;
        }

        .program-age {
          font-size: 14px;
          color: #1a5fc4;
          font-weight: 600;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .curriculum-highlights {
          flex-grow: 1;
        }

        .highlights-label {
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          color: #0f3a7d;
          letter-spacing: 0.5px;
          margin-bottom: 12px;
        }

        .highlights-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .highlights-list li {
          font-size: 13px;
          color: #555;
          margin-bottom: 10px;
          display: flex;
          align-items: flex-start;
          gap: 8px;
          line-height: 1.5;
        }

        .highlights-list li:last-child {
          margin-bottom: 0;
        }

        .bullet-point {
          color: #ffb81c;
          font-weight: 700;
          flex-shrink: 0;
        }

        .program-accent {
          width: 50px;
          height: 3px;
          border-radius: 2px;
          margin-top: 12px;
          transition: width 0.3s ease;
        }

        .program-card:hover .program-accent {
          width: 80px;
        }

        .program-cta {
          padding: 0 28px 28px;
          position: relative;
        }

        .btn-learn-more {
          width: 100%;
          background: linear-gradient(135deg, rgba(15, 58, 125, 0.1), rgba(255, 184, 28, 0.05));
          color: #0f3a7d;
          border: 2px solid #0f3a7d;
          padding: 12px 16px;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-learn-more:hover {
          background: linear-gradient(135deg, #0f3a7d, #1a5fc4);
          color: #ffffff;
          border-color: transparent;
          transform: translateY(-2px);
        }

        .programs-cta {
          background: linear-gradient(135deg, rgba(15, 58, 125, 0.05), rgba(255, 184, 28, 0.05));
          padding: 50px 40px;
          border-radius: 24px;
          border: 2px solid rgba(15, 58, 125, 0.1);
        }

        .cta-title {
          font-size: clamp(24px, 4vw, 36px);
          font-weight: 800;
          color: #0f3a7d;
          margin-bottom: 12px;
        }

        .cta-description {
          font-size: 16px;
          color: #666;
          max-width: 600px;
          margin: 0 auto 24px;
        }

        .btn-enroll {
          background: linear-gradient(135deg, #0f3a7d, #1a5fc4);
          color: #ffffff;
          border: none;
          padding: 16px 48px;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 8px 24px rgba(15, 58, 125, 0.2);
        }

        .btn-enroll:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 36px rgba(15, 58, 125, 0.3);
          color: #ffffff;
        }

        @media (max-width: 768px) {
          .programs-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .program-image-section {
            height: 180px;
          }

          .program-content {
            padding: 20px;
          }

          .program-emoji {
            width: 56px;
            height: 56px;
            font-size: 36px;
          }

          .program-title {
            font-size: 18px;
          }

          .programs-cta {
            padding: 32px 24px;
          }

          .cta-title {
            font-size: 24px;
          }

          .btn-enroll {
            padding: 14px 40px;
            font-size: 14px;
          }
        }

        @media (max-width: 480px) {
          .programs-grid {
            grid-template-columns: 1fr;
          }

          .program-image-section {
            height: 160px;
          }

          .highlights-list li {
            font-size: 12px;
            margin-bottom: 8px;
          }

          .program-emoji {
            width: 48px;
            height: 48px;
            font-size: 32px;
          }
        }
      `}</style>
    </section>
  );
}
