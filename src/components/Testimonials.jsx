import { TESTIMONIALS } from '../data';
import { useState, useEffect } from 'react';
import LazyImage from './LazyImage';

export default function TestimonialsSec() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="testimonials-section py-5">
      <div className="container-lg">
        {/* Header */}
        <div className="section-header text-center mb-5" data-aos="fade-down">
          <h2 className="section-title mb-3">Parent Reviews & Testimonials</h2>
          <p className="section-subtitle">Hear from happy families who trust HIGREVA</p>
        </div>

        {/* Testimonials Carousel */}
        <div className="testimonials-carousel" data-aos="fade-up">
          <div className="carousel-container">
            {TESTIMONIALS.map((testimonial, idx) => (
              <div
                key={idx}
                className={`testimonial-slide ${idx === currentSlide ? 'active' : ''}`}
              >
                <div className="testimonial-card">
                  {/* Star Rating */}
                  <div className="star-rating mb-4">
                    {[...Array(5)].map((_, i) => (
                      <i
                        key={i}
                        className={`fa-solid fa-star ${i < testimonial.rating ? 'active' : ''}`}
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="testimonial-quote">
                    <i className="fa-solid fa-quote-left quote-icon" />
                    "{testimonial.quote}"
                    <i className="fa-solid fa-quote-right quote-icon" />
                  </blockquote>

                  {/* Author Info */}
                  <div className="testimonial-author">
                    <div className="author-image">
                      <LazyImage
                        src={testimonial.img}
                        alt={testimonial.name}
                        className="author-photo"
                      />
                    </div>
                    <div className="author-info">
                      <h4 className="author-name">{testimonial.name}</h4>
                      <p className="author-role">{testimonial.sub}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="carousel-dots">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                className={`dot ${idx === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(idx)}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button className="carousel-arrow prev" onClick={prevSlide}>
            <i className="fa-solid fa-chevron-left" />
          </button>
          <button className="carousel-arrow next" onClick={nextSlide}>
            <i className="fa-solid fa-chevron-right" />
          </button>
        </div>

        {/* Stats Section */}
        <div className="testimonials-stats mt-5" data-aos="fade-up">
          <div className="stat-item">
            <div className="stat-icon">⭐</div>
            <div className="stat-content">
              <div className="stat-number">4.8/5</div>
              <div className="stat-label">Average Rating</div>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">👨‍👩‍👧‍👦</div>
            <div className="stat-content">
              <div className="stat-number">5000+</div>
              <div className="stat-label">Happy Families</div>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">✅</div>
            <div className="stat-content">
              <div className="stat-number">98%</div>
              <div className="stat-label">Parent Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .testimonials-section {
          background: linear-gradient(180deg, #f8faff 0%, #ffffff 100%);
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

        .testimonials-carousel {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
        }

        .carousel-container {
          position: relative;
          height: 400px;
        }

        .testimonial-slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
        }

        .testimonial-slide.active {
          opacity: 1;
          pointer-events: auto;
        }

        .testimonial-card {
          background: #ffffff;
          border-radius: 20px;
          padding: 48px;
          box-shadow: 0 12px 40px rgba(15, 58, 125, 0.1);
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          border-left: 5px solid #ffb81c;
        }

        .star-rating {
          display: flex;
          gap: 8px;
          font-size: 20px;
        }

        .star-rating i {
          color: #ddd;
          transition: color 0.3s ease;
        }

        .star-rating i.active {
          color: #ffb81c;
        }

        .testimonial-quote {
          font-size: 18px;
          color: #555;
          line-height: 1.8;
          margin: 24px 0;
          font-style: italic;
          position: relative;
        }

        .quote-icon {
          color: #ffb81c;
          opacity: 0.3;
          font-size: 28px;
          margin: 0 8px;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: auto;
          padding-top: 24px;
          border-top: 1px solid #e0e7ff;
        }

        .author-image {
          flex-shrink: 0;
        }

        .author-photo {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid #ffb81c;
        }

        .author-info {
          flex-grow: 1;
        }

        .author-name {
          font-size: 16px;
          font-weight: 700;
          color: #0f3a7d;
          margin: 0;
        }

        .author-role {
          font-size: 13px;
          color: #999;
          margin: 4px 0 0;
        }

        .carousel-dots {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 32px;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(15, 58, 125, 0.2);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dot:hover {
          background: rgba(15, 58, 125, 0.4);
        }

        .dot.active {
          background: linear-gradient(135deg, #0f3a7d, #1a5fc4);
          width: 32px;
          border-radius: 6px;
        }

        .carousel-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: linear-gradient(135deg, #0f3a7d, #1a5fc4);
          color: #ffffff;
          border: none;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          font-size: 20px;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .carousel-arrow:hover {
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 8px 24px rgba(15, 58, 125, 0.2);
        }

        .carousel-arrow.prev {
          left: -60px;
        }

        .carousel-arrow.next {
          right: -60px;
        }

        .testimonials-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 24px;
          background: linear-gradient(135deg, rgba(15, 58, 125, 0.05), rgba(255, 184, 28, 0.05));
          padding: 40px;
          border-radius: 20px;
          border: 2px solid rgba(15, 58, 125, 0.1);
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 16px;
          text-align: center;
        }

        .stat-icon {
          font-size: 40px;
        }

        .stat-content {
          text-align: left;
        }

        .stat-number {
          font-size: 28px;
          font-weight: 900;
          color: #0f3a7d;
        }

        .stat-label {
          font-size: 14px;
          color: #666;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .testimonial-card {
            padding: 32px;
            height: auto;
          }

          .testimonial-quote {
            font-size: 16px;
          }

          .carousel-arrow {
            width: 40px;
            height: 40px;
            font-size: 16px;
          }

          .carousel-arrow.prev {
            left: -50px;
          }

          .carousel-arrow.next {
            right: -50px;
          }

          .carousel-container {
            height: auto;
          }

          .testimonials-stats {
            grid-template-columns: 1fr;
            padding: 24px;
          }
        }

        @media (max-width: 480px) {
          .carousel-arrow {
            position: static;
            transform: none;
            margin: 12px 6px 0;
            width: 36px;
            height: 36px;
          }

          .carousel-arrow.prev,
          .carousel-arrow.next {
            left: auto;
            right: auto;
          }

          .testimonial-card {
            padding: 24px;
          }

          .testimonial-quote {
            font-size: 14px;
          }

          .author-photo {
            width: 48px;
            height: 48px;
          }

          .quote-icon {
            font-size: 20px;
          }
        }
      `}</style>
    </section>
  );
}
