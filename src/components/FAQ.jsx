import { useState } from 'react';
import { FAQS } from '../data';

export default function FAQ() {
  const [activeId, setActiveId] = useState(0);

  return (
    <section className="faq-section py-5">
      <div className="container-lg">
        {/* Header */}
        <div className="section-header text-center mb-5" data-aos="fade-down">
          <h2 className="section-title mb-3">Frequently Asked Questions</h2>
          <p className="section-subtitle">Get answers to common questions from parents</p>
        </div>

        {/* FAQ Accordion */}
        <div className="faq-container" data-aos="fade-up">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className={`faq-item ${activeId === idx ? 'active' : ''}`}
              data-aos="fade-up"
              data-aos-delay={idx * 80}
            >
              <button
                className="faq-question"
                onClick={() => setActiveId(activeId === idx ? -1 : idx)}
              >
                <span className="question-text">{faq.q}</span>
                <span className="question-icon">
                  <i className="fa-solid fa-chevron-down" />
                </span>
              </button>
              <div className={`faq-answer-wrapper ${activeId === idx ? 'open' : ''}`}>
                <div className="faq-answer">{faq.a}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="faq-cta text-center mt-5" data-aos="fade-up">
          <h3 className="cta-title mb-3">Still Have Questions?</h3>
          <p className="cta-text mb-4">Our admissions team is ready to help you</p>
          <button className="btn-contact">
            <i className="fa-solid fa-phone me-2" />
            Call us at +91-8123708724
          </button>
        </div>
      </div>

      <style>{`
        .faq-section {
          background: linear-gradient(180deg, #ffffff 0%, #f8faff 100%);
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

        .faq-container {
          max-width: 900px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .faq-item {
          background: #ffffff;
          border: 2px solid rgba(15, 58, 125, 0.1);
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .faq-item:hover {
          border-color: rgba(15, 58, 125, 0.2);
          box-shadow: 0 8px 24px rgba(15, 58, 125, 0.08);
        }

        .faq-item.active {
          border-color: #ffb81c;
          box-shadow: 0 12px 32px rgba(15, 58, 125, 0.12);
        }

        .faq-question {
          width: 100%;
          background: transparent;
          border: none;
          padding: 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 16px;
          font-weight: 600;
          color: #0f3a7d;
          text-align: left;
        }

        .faq-item.active .faq-question {
          background: linear-gradient(135deg, rgba(15, 58, 125, 0.05), rgba(255, 184, 28, 0.02));
          color: #0f3a7d;
        }

        .question-text {
          flex-grow: 1;
        }

        .question-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(15, 58, 125, 0.1);
          color: #0f3a7d;
          margin-left: 16px;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .faq-item.active .question-icon {
          background: linear-gradient(135deg, #ffb81c, #ffa500);
          color: #ffffff;
          transform: rotate(180deg);
        }

        .faq-answer-wrapper {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          background: linear-gradient(135deg, rgba(15, 58, 125, 0.02), rgba(255, 184, 28, 0.01));
        }

        .faq-answer-wrapper.open {
          max-height: 1000px;
        }

        .faq-answer {
          padding: 0 24px 24px;
          font-size: 15px;
          color: #555;
          line-height: 1.8;
          animation: slideDown 0.3s ease;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .faq-cta {
          background: linear-gradient(135deg, rgba(15, 58, 125, 0.05), rgba(255, 184, 28, 0.05));
          padding: 40px;
          border-radius: 20px;
          border: 2px solid rgba(15, 58, 125, 0.1);
          margin-top: 40px;
        }

        .cta-title {
          font-size: 24px;
          font-weight: 800;
          color: #0f3a7d;
          margin-bottom: 12px;
        }

        .cta-text {
          font-size: 16px;
          color: #666;
        }

        .btn-contact {
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

        .btn-contact:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 36px rgba(15, 58, 125, 0.3);
          color: #ffffff;
        }

        @media (max-width: 768px) {
          .faq-question {
            padding: 20px;
            font-size: 15px;
          }

          .faq-answer {
            padding: 0 20px 20px;
            font-size: 14px;
          }

          .faq-cta {
            padding: 24px;
          }

          .cta-title {
            font-size: 20px;
          }

          .btn-contact {
            padding: 14px 32px;
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  );
}
