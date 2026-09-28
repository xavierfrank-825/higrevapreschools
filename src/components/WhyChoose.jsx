import { WHY_CARDS } from '../data';
import LazyImage from './LazyImage';

export default function WhyChoose() {
  const benefits = [
    { icon: '🎓', title: 'Expert Educators', desc: 'Psychology-trained staff' },
    { icon: '🏆', title: '18+ Years Legacy', desc: '25+ awards & recognition' },
    { icon: '🔒', title: 'Safe Campus', desc: 'CCTV & security protocols' },
    { icon: '📚', title: 'Heureka Curriculum', desc: 'Harvard-inspired method' },
    { icon: '❤️', title: 'Individual Attention', desc: '1:8 to 1:12 ratio' },
    { icon: '🌍', title: 'Global Standards', desc: 'NAEYC aligned' },
  ];

  return (
    <section className="why-choose-section py-5">
      <div className="container-lg">
        {/* Header */}
        <div className="section-header text-center mb-5" data-aos="fade-down">
          <h2 className="section-title mb-3">Why Choose HIGREVA?</h2>
          <p className="section-subtitle">Leading preschool chain trusted by 5000+ families</p>
        </div>

        {/* Main Cards */}
        <div className="why-cards-grid mb-5" data-aos="fade-up">
          {WHY_CARDS.map((card, idx) => (
            <div key={idx} className="why-card" data-aos="fade-up" data-aos-delay={idx * 100}>
              <div className="why-card-image">
                <img src={'/src/assets/319609.jpeg'} alt={card.title} className="why-image" />
                <div className="why-overlay" />
              </div>
              <div className="why-card-content">
                <h3 className="why-title">{card.title}</h3>
                <p className="why-description">{card.body}</p>
                <button className="why-cta">
                  Learn More <i className="fa-solid fa-arrow-right ms-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="benefits-section" data-aos="fade-up">
          <h3 className="benefits-title text-center mb-4">Our Key Strengths</h3>
          <div className="benefits-grid">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="benefit-item" data-aos="zoom-in" data-aos-delay={idx * 80}>
                <div className="benefit-icon">{benefit.icon}</div>
                <h4 className="benefit-name">{benefit.title}</h4>
                <p className="benefit-desc">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison with other schools */}
        <div className="comparison-section mt-5" data-aos="fade-up">
          <h3 className="comparison-title text-center mb-4">How We Compare</h3>
          <div className="comparison-table">
            <div className="comparison-row header">
              <div className="comparison-cell feature">Features</div>
              <div className="comparison-cell">HIGREVA</div>
              <div className="comparison-cell">Other Schools</div>
            </div>
            {[
              { feature: 'Teacher Training', higreva: '✓ Psychology Background', other: '✗ Basic Training' },
              { feature: 'Curriculum', higreva: '✓ Heureka (Harvard)', other: '✗ Standard' },
              { feature: 'Safety', higreva: '✓ CCTV + Protocols', other: '✗ Basic' },
              { feature: 'Ratio', higreva: '✓ 1:8 to 1:12', other: '✗ 1:20+' },
              { feature: 'Track Record', higreva: '✓ 18+ Years, 25+ Awards', other: '✗ Few' },
            ].map((row, idx) => (
              <div key={idx} className="comparison-row">
                <div className="comparison-cell feature">{row.feature}</div>
                <div className="comparison-cell higreva">{row.higreva}</div>
                <div className="comparison-cell other">{row.other}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .why-choose-section {
          background: linear-gradient(180deg, #ffffff 0%, #f0f4ff 100%);
          position: relative;
          overflow: hidden;
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

        .why-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 32px;
        }

        .why-card {
          background: #ffffff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(15, 58, 125, 0.08);
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .why-card:hover {
          transform: translateY(-16px);
          box-shadow: 0 25px 60px rgba(15, 58, 125, 0.15);
        }

        .why-card-image {
          position: relative;
          width: 100%;
          height: 220px;
          overflow: hidden;
          background: linear-gradient(135deg, rgba(15, 58, 125, 0.1), rgba(255, 184, 28, 0.05));
        }

        .why-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .why-card:hover .why-image {
          transform: scale(1.12);
        }

        .why-overlay {
          position: absolute;
          inset: 0;
          background: rgba(15, 58, 125, 0.3);
        }

        .why-card-content {
          padding: 28px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .why-title {
          font-size: 22px;
          font-weight: 800;
          color: #0f3a7d;
          margin-bottom: 12px;
        }

        .why-description {
          font-size: 15px;
          color: #666;
          line-height: 1.7;
          flex-grow: 1;
          margin-bottom: 16px;
        }

        .why-cta {
          background: linear-gradient(135deg, #0f3a7d, #1a5fc4);
          color: #ffffff;
          border: none;
          padding: 12px 20px;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          align-self: flex-start;
        }

        .why-cta:hover {
          transform: translateY(-2px);
          color: #ffffff;
        }

        .benefits-section {
          background: linear-gradient(135deg, rgba(15, 58, 125, 0.05), rgba(255, 184, 28, 0.05));
          padding: 48px;
          border-radius: 24px;
          border: 2px solid rgba(15, 58, 125, 0.1);
          margin-top: 40px;
        }

        .benefits-title {
          font-size: 28px;
          font-weight: 800;
          color: #0f3a7d;
          margin-bottom: 32px;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 24px;
        }

        .benefit-item {
          text-align: center;
          padding: 24px;
          background: #ffffff;
          border-radius: 16px;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .benefit-item:hover {
          border-color: #ffb81c;
          transform: translateY(-8px);
          box-shadow: 0 12px 30px rgba(15, 58, 125, 0.1);
        }

        .benefit-icon {
          font-size: 48px;
          margin-bottom: 12px;
        }

        .benefit-name {
          font-size: 16px;
          font-weight: 700;
          color: #0f3a7d;
          margin-bottom: 8px;
        }

        .benefit-desc {
          font-size: 13px;
          color: #666;
          margin: 0;
          line-height: 1.5;
        }

        .comparison-section {
          background: #ffffff;
          padding: 48px;
          border-radius: 24px;
          box-shadow: 0 10px 30px rgba(15, 58, 125, 0.08);
        }

        .comparison-title {
          font-size: 28px;
          font-weight: 800;
          color: #0f3a7d;
          margin-bottom: 32px;
        }

        .comparison-table {
          overflow-x: auto;
        }

        .comparison-row {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          border-bottom: 1px solid #e0e7ff;
          transition: all 0.3s ease;
        }

        .comparison-row:hover {
          background: rgba(15, 58, 125, 0.03);
        }

        .comparison-row.header {
          background: linear-gradient(135deg, rgba(15, 58, 125, 0.08), rgba(255, 184, 28, 0.05));
          font-weight: 700;
        }

        .comparison-cell {
          padding: 20px;
          font-size: 14px;
          color: #555;
          display: flex;
          align-items: center;
        }

        .comparison-cell.feature {
          font-weight: 600;
          color: #0f3a7d;
        }

        .comparison-cell.higreva {
          color: #27ae60;
        }

        .comparison-cell.other {
          color: #e74c3c;
        }

        @media (max-width: 768px) {
          .why-cards-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .benefits-section {
            padding: 32px;
          }

          .benefits-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .comparison-row {
            grid-template-columns: 1fr;
          }

          .comparison-cell {
            padding: 12px;
            font-size: 13px;
          }
        }
      `}</style>
    </section>
  );
}
