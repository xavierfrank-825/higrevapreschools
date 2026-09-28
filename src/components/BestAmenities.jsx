import { AMENITIES, AMENITY_IMG } from '../data';
import LazyImage from './LazyImage';

export default function BestAmenities() {
  const amenityEmojis = {
    ambience: '🎨',
    safety: '🛡️',    
    staff: '👨‍🏫',
    play: '🎪',
    ratio: '👥',
    transfer: '🚌'
  };

  const amenityColors = {
    ambience: '#FF6B6B',
    safety: '#4ECDC4',
    staff: '#45B7D1',
    play: '#FFA07A',
    ratio: '#98D8C8',
    transfer: '#F7DC6F'
  };

  return (
    <section className="amenities-section py-5">
      <div className="container-lg">
        {/* Header */}
        <div className="section-header text-center mb-5" data-aos="fade-down">
          <h2 className="section-title mb-3">World-Class Amenities & Facilities</h2>
          <p className="section-subtitle">Everything your child needs to learn, play, and grow</p>
        </div>

        {/* Amenities Grid */}
        <div className="amenities-grid" data-aos="fade-up">
          {AMENITIES.map((amenity, idx) => (
            <div key={amenity.id} className="amenity-card-wrapper" data-aos="fade-up" data-aos-delay={idx * 100}>
              <div className="amenity-card">
                {/* Card Top - Image with Emoji */}
                <div className="amenity-image-wrapper" style={{ borderColor: amenityColors[amenity.id] }}>
                  <LazyImage 
                    src={AMENITY_IMG[amenity.id] || '/src/assets/319600.jpeg'} 
                    alt={amenity.label}
                    className="amenity-image"
                  />
                  <div className="amenity-emoji">{amenityEmojis[amenity.id]}</div>
                  <div className="amenity-overlay">
                    <span className="overlay-text">Learn More</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="amenity-content">
                  <h4 className="amenity-title">{amenity.label}</h4>
                  <p className="amenity-description">{amenity.desc}</p>
                  
                  {/* Color accent bar */}
                  <div className="amenity-accent-bar" style={{ backgroundColor: amenityColors[amenity.id] }} />
                </div>

                {/* Hover Icon */}
                <div className="amenity-hover-icon">
                  <i className="fa-solid fa-arrow-right" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="amenities-cta text-center mt-5" data-aos="fade-up">
          <p className="cta-text mb-3">Want to see our facilities in person?</p>
          <button className="btn-amenity-cta">
            <i className="fa-solid fa-video me-2" />
            Take a Virtual Tour
          </button>
        </div>
      </div>

      <style>{`
        .amenities-section {
          background: linear-gradient(180deg, #ffffff 0%, #f0f4ff 100%);
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

        .amenities-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 28px;
          margin-bottom: 40px;
        }

        .amenity-card-wrapper {
          position: relative;
          height: 100%;
        }

        .amenity-card {
          background: #ffffff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 8px 24px rgba(15, 58, 125, 0.08);
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          height: 100%;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .amenity-card:hover {
          transform: translateY(-16px);
          box-shadow: 0 20px 60px rgba(15, 58, 125, 0.15);
        }

        .amenity-image-wrapper {
          position: relative;
          width: 100%;
          height: 200px;
          overflow: hidden;
          border-bottom: 4px solid;
          background: linear-gradient(135deg, rgba(15, 58, 125, 0.05), rgba(255, 184, 28, 0.05));
        }

        .amenity-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease, filter 0.3s ease;
        }

        .amenity-card:hover .amenity-image {
          transform: scale(1.15);
          filter: brightness(0.8);
        }

        .amenity-emoji {
          position: absolute;
          top: 12px;
          right: 12px;
          font-size: 40px;
          background: rgba(255, 255, 255, 0.95);
          width: 56px;
          height: 56px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .amenity-card:hover .amenity-emoji {
          transform: scale(1.1) rotate(10deg);
        }

        .amenity-overlay {
          position: absolute;
          inset: 0;
          background: rgba(15, 58, 125, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .amenity-card:hover .amenity-overlay {
          opacity: 1;
        }

        .overlay-text {
          color: #ffffff;
          font-size: 16px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .amenity-content {
          padding: 24px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .amenity-title {
          font-size: 18px;
          font-weight: 700;
          color: #0f3a7d;
          margin-bottom: 12px;
          line-height: 1.3;
        }

        .amenity-description {
          font-size: 14px;
          color: #666;
          line-height: 1.6;
          margin-bottom: 16px;
          flex-grow: 1;
        }

        .amenity-accent-bar {
          width: 40px;
          height: 3px;
          border-radius: 2px;
          transition: width 0.3s ease;
        }

        .amenity-card:hover .amenity-accent-bar {
          width: 60px;
        }

        .amenity-hover-icon {
          position: absolute;
          top: 50%;
          right: 24px;
          transform: translateY(-50%);
          font-size: 24px;
          color: #0f3a7d;
          opacity: 0;
          transition: all 0.3s ease;
        }

        .amenity-card:hover .amenity-hover-icon {
          opacity: 1;
          transform: translateY(-50%) translateX(8px);
          right: 16px;
        }

        .amenities-cta {
          padding: 40px;
          background: linear-gradient(135deg, rgba(15, 58, 125, 0.05), rgba(255, 184, 28, 0.05));
          border-radius: 20px;
          border: 2px solid rgba(15, 58, 125, 0.1);
        }

        .cta-text {
          font-size: 18px;
          color: #0f3a7d;
          font-weight: 600;
        }

        .btn-amenity-cta {
          background: linear-gradient(135deg, #0f3a7d, #1a5fc4);
          color: #ffffff;
          border: none;
          padding: 14px 40px;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 8px 24px rgba(15, 58, 125, 0.2);
        }

        .btn-amenity-cta:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 36px rgba(15, 58, 125, 0.3);
          color: #ffffff;
        }

        .btn-amenity-cta:active {
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .amenities-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .amenity-image-wrapper {
            height: 160px;
          }

          .amenity-emoji {
            width: 48px;
            height: 48px;
            font-size: 32px;
          }

          .amenity-content {
            padding: 20px;
          }

          .amenities-cta {
            padding: 24px;
          }

          .cta-text {
            font-size: 16px;
          }

          .btn-amenity-cta {
            padding: 12px 32px;
            font-size: 14px;
          }
        }

        @media (max-width: 480px) {
          .amenities-grid {
            grid-template-columns: 1fr;
          }

          .section-title {
            font-size: 28px;
          }

          .amenity-image-wrapper {
            height: 140px;
          }
        }
      `}</style>
    </section>
  );
}
