import { useState } from 'react';
import { LOCATION } from '../data';

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Send to Formspree
      const response = await fetch('https://formspree.io/f/xvgoqgbw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          _subject: 'New Contact Form Submission - HIGREVA',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          submittedAt: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        }),
      });

      setIsLoading(false);

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert('Error sending message. Please try again.');
      }
    } catch (error) {
      setIsLoading(false);
      alert('Error: ' + error.message);
    }
  };

  const handleClose = () => {
    setFormData({ name: '', email: '', phone: '', message: '' });
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Modal Backdrop */}
      <div className="contact-modal-backdrop" onClick={handleClose} />

      {/* Modal */}
      <div className="contact-modal">
        <div className="modal-container">
          {/* Close Button */}
          <button className="modal-close" onClick={handleClose}>
            <i className="fa-solid fa-xmark" />
          </button>

          {submitted ? (
            // Success Message
            <div className="success-message">
              <div className="success-icon">
                <i className="fa-solid fa-circle-check" />
              </div>
              <h2 className="success-title">Thank You!</h2>
              <p className="success-text">
                We've received your message and will get back to you soon at <strong>{formData.email}</strong>
              </p>
              <div className="submitted-details">
                <h3 className="details-title">Your Details:</h3>
                <div className="detail-row">
                  <span className="detail-label">Name:</span>
                  <span className="detail-value">{formData.name}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Email:</span>
                  <span className="detail-value">{formData.email}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Phone:</span>
                  <span className="detail-value">{formData.phone}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Message:</span>
                  <span className="detail-value">{formData.message}</span>
                </div>
              </div>
              <button className="btn-close-modal" onClick={handleClose}>
                Close
              </button>
            </div>
          ) : (
            // Form
            <>
              <h2 className="modal-title">Get in Touch</h2>
              <p className="modal-subtitle">We'd love to hear from you. Send us a message!</p>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXXXXXXX"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us what you'd like to know..."
                    rows="5"
                    required
                  />
                </div>

                <button type="submit" className="btn-submit" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <i className="fa-solid fa-spinner fa-spin me-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <i className="fa-solid fa-paper-plane me-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>

      <style>{`
        .contact-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          z-index: 1999;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .contact-modal {
          position: fixed;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          padding: 20px;
          animation: slideUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .modal-container {
          background: #ffffff;
          border-radius: 20px;
          box-shadow: 0 25px 80px rgba(15, 58, 125, 0.25);
          max-width: 500px;
          width: 100%;
          padding: 40px;
          position: relative;
          max-height: 90vh;
          overflow-y: auto;
        }

        .modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 40px;
          height: 40px;
          border: none;
          background: rgba(15, 58, 125, 0.1);
          color: #0f3a7d;
          border-radius: 50%;
          cursor: pointer;
          font-size: 20px;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-close:hover {
          background: rgba(15, 58, 125, 0.2);
          transform: rotate(90deg);
        }

        .modal-title {
          font-size: 28px;
          font-weight: 800;
          color: #0f3a7d;
          margin: 0 0 8px;
        }

        .modal-subtitle {
          font-size: 14px;
          color: #666;
          margin: 0 0 24px;
        }

        /* Form Styles */
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group label {
          font-size: 14px;
          font-weight: 600;
          color: #0f3a7d;
        }

        .form-group input,
        .form-group textarea {
          padding: 12px 16px;
          border: 2px solid rgba(15, 58, 125, 0.1);
          border-radius: 10px;
          font-size: 14px;
          font-family: 'Poppins', sans-serif;
          transition: all 0.3s ease;
          color: #333;
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: #999;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #0f3a7d;
          box-shadow: 0 0 0 3px rgba(15, 58, 125, 0.1);
        }

        .form-group textarea {
          resize: vertical;
        }

        .btn-submit {
          background: linear-gradient(135deg, #0f3a7d, #1a5fc4);
          color: #ffffff;
          border: none;
          padding: 14px 24px;
          border-radius: 10px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          margin-top: 12px;
        }

        .btn-submit:hover:not(:disabled) {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(15, 58, 125, 0.3);
        }

        .btn-submit:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        /* Success Message */
        .success-message {
          text-align: center;
        }

        .success-icon {
          font-size: 64px;
          color: #27ae60;
          margin-bottom: 16px;
          animation: bounce 0.6s ease;
        }

        @keyframes bounce {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }

        .success-title {
          font-size: 28px;
          font-weight: 800;
          color: #0f3a7d;
          margin: 0 0 12px;
        }

        .success-text {
          font-size: 14px;
          color: #666;
          margin-bottom: 24px;
          line-height: 1.6;
        }

        .submitted-details {
          background: rgba(15, 58, 125, 0.05);
          padding: 24px;
          border-radius: 12px;
          margin-bottom: 24px;
          text-align: left;
          border: 2px solid rgba(15, 58, 125, 0.1);
        }

        .details-title {
          font-size: 16px;
          font-weight: 700;
          color: #0f3a7d;
          margin: 0 0 12px;
        }

        .detail-row {
          display: flex;
          justify-content: space-between;
          padding: 8px 0;
          border-bottom: 1px solid rgba(15, 58, 125, 0.08);
          font-size: 13px;
        }

        .detail-row:last-child {
          border-bottom: none;
        }

        .detail-label {
          font-weight: 600;
          color: #0f3a7d;
        }

        .detail-value {
          color: #666;
          word-break: break-word;
          text-align: right;
          flex: 1;
          margin-left: 12px;
        }

        .btn-close-modal {
          background: linear-gradient(135deg, #0f3a7d, #1a5fc4);
          color: #ffffff;
          border: none;
          padding: 12px 32px;
          border-radius: 10px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-close-modal:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(15, 58, 125, 0.2);
        }

        /* Mobile Responsive */
        @media (max-width: 600px) {
          .modal-container {
            padding: 24px;
            border-radius: 16px;
          }

          .modal-title {
            font-size: 24px;
          }

          .modal-close {
            width: 36px;
            height: 36px;
            font-size: 18px;
          }

          .submitted-details {
            padding: 16px;
          }

          .detail-row {
            flex-direction: column;
            gap: 4px;
          }

          .detail-value {
            text-align: left;
            margin-left: 0;
          }
        }
      `}</style>
    </>
  );
}
