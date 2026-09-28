import { useEffect, useRef, useState } from 'react';
import { useScrollHide } from '../hooks/useLib';

export default function FloatingAdmissions({ onOpen }) {
  const btnRef = useRef(null);
  const show = useScrollHide(btnRef, 600);
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => setPulse(p => !p), 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <button
        ref={btnRef}
        id="floatingBtn"
        className={`floating-btn ${show ? 'show' : ''} ${pulse ? 'pulse-animate' : ''}`}
        onClick={(e) => { e.preventDefault(); onOpen?.(); }}
        aria-label="Enquire Now"
      >
        <span className="btn-text">Enquire Now</span>
        <i className="fa-solid fa-arrow-right ms-2"></i>
      </button>
      <style>{`
        .floating-btn {
          position: fixed; top: 50%; right: -20px; z-index: 1070;
          background: linear-gradient(135deg, #ed2a4f, #ff3d5a); color: white; border: none;
          border-radius: 0 8px 8px 0;
          cursor: pointer; padding: 12px 24px; font-weight: 700;
          box-shadow: 0 6px 18px rgba(237,42,79,0.4);
          opacity: 0; visibility: hidden;
          transition: opacity 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), visibility 0.3s, transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s;
          transform: rotate(90deg) translateY(-50%) scale(0.8);
          text-decoration: none;
          display: flex; align-items: center; justify-content: center;
          font-size: 14px;
          letter-spacing: 0.5px;
        }
        .floating-btn.show { 
          opacity: 1; 
          visibility: visible; 
          transform: rotate(0deg) translateY(-50%) scale(1); 
        }
        .floating-btn:hover { 
          background: linear-gradient(135deg, #fcb921, #ffb81c); 
          color: #0f358c; 
          transform: rotate(0deg) translateY(-50%) scale(1.08);
          box-shadow: 0 12px 32px rgba(237,42,79,0.5);
        }
        .floating-btn.pulse-animate {
          animation: floatingPulse 2s ease-in-out infinite;
        }
        .btn-text {
          transition: all 0.3s ease;
        }
        .floating-btn:hover .btn-text {
          transform: translateX(-4px);
        }
        .floating-btn i {
          transition: all 0.3s ease;
          font-size: 12px;
        }
        .floating-btn:hover i {
          transform: translateX(4px);
        }
        @keyframes floatingPulse {
          0%, 100% { box-shadow: 0 6px 18px rgba(237,42,79,0.4); }
          50% { box-shadow: 0 12px 36px rgba(237,42,79,0.7); }
        }
        @media (max-width: 768px) {
          .floating-btn {
            padding: 10px 16px;
            font-size: 12px;
          }
        }
      `}</style>
    </>
  );
}
