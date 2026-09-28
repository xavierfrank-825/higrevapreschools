import { LOCATION } from '../data';

export default function Location() {
  const mapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0!2d77.6554!3d12.9531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f3!3m2!1m1!1s0x0%3A0x0!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin';
  return (
    <section id="locate" className="location_sec py-5">
      <div className="container-lg position-relative">
        <div className="row align-items-center justify-content-between g-4">
          {/* Left Content */}
          <div className="col-lg-5" data-aos="fade-right">
            <div className="location-left-content">
              <h2 className="location-heading mb-4">Locate Us</h2>
              <p className="location-subtitle mb-4">Find our premium learning centers across Bangalore</p>
              
              <div className="location-info-group mb-4">
                <div className="location-info-item d-flex gap-3 mb-3">
                  <div className="location-icon"><i className="fa-solid fa-clock fa-fw" /></div>
                  <div>
                    <p className="small mb-1 text-white-50">Hours</p>
                    <p className="small fw-bold text-white mb-0">{LOCATION.hours}</p>
                  </div>
                </div>
                
                <div className="location-info-item d-flex gap-3 mb-3">
                  <div className="location-icon"><i className="fa-solid fa-location-dot fa-fw" /></div>
                  <div>
                    <p className="small mb-1 text-white-50">Address</p>
                    <p className="small text-white mb-0">{LOCATION.address}</p>
                  </div>
                </div>
                
                <div className="location-info-item d-flex gap-3 mb-3">
                  <div className="location-icon"><i className="fa-solid fa-envelope fa-fw" /></div>
                  <div>
                    <p className="small mb-1 text-white-50">Email</p>
                    <a href={`mailto:${LOCATION.email}`} className="small text-white text-decoration-none location-link">{LOCATION.email}</a>
                  </div>
                </div>
                
                <div className="location-info-item d-flex gap-3">
                  <div className="location-icon"><i className="fa-solid fa-phone fa-fw" /></div>
                  <div>
                    <p className="small mb-1 text-white-50">Phone</p>
                    <a href={`tel:${LOCATION.phone}`} className="small text-white text-decoration-none location-link">{LOCATION.phone}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="col-lg-6" data-aos="fade-left">
            <div className="location-card-wrapper">
              <div className="location-card-header">
                <h3 className="location-card-title">📍 Visit Us</h3>
              </div>
              <div className="location-card-content">
                <div className="map-wrap rounded-3 overflow-hidden">
                  <iframe title="Our Location" src={mapUrl} width="100%" height="100%" style={{ border: 0, minHeight: '340px' }} allowFullScreen loading="lazy"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        .location_sec { 
          background: linear-gradient(135deg, #0f3a7d 0%, #1a5fc4 50%, #0f3a7d 100%); 
          min-height: 600px; 
          position: relative; 
          overflow: hidden;
          display: flex;
          align-items: center;
        }
        
        .location_sec::before { 
          content: ''; 
          position: absolute; 
          top: -50%; 
          right: -10%; 
          width: 400px; 
          height: 400px; 
          border-radius: 50%; 
          background: rgba(255, 184, 28, 0.08);
        }
        
        .location_sec::after { 
          content: ''; 
          position: absolute; 
          bottom: -30%; 
          left: -5%; 
          width: 300px; 
          height: 300px; 
          border-radius: 50%; 
          background: rgba(255, 255, 255, 0.05);
        }
        
        .location-left-content {
          position: relative;
          z-index: 2;
        }
        
        .location-heading {
          font-size: 42px;
          font-weight: 900;
          color: #ffffff;
          margin-bottom: 12px;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        
        .location-subtitle {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 24px;
        }
        
        .location-info-group {
          background: rgba(255, 255, 255, 0.08);
          padding: 24px;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
        }
        
        .location-info-item {
          transition: all 0.3s ease;
        }
        
        .location-info-item:hover {
          transform: translateX(8px);
        }
        
        .location-icon {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, rgba(255, 184, 28, 0.2), rgba(255, 184, 28, 0.1));
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #ffb81c;
          font-size: 20px;
          border: 1px solid rgba(255, 184, 28, 0.3);
          transition: all 0.3s ease;
        }
        
        .location-info-item:hover .location-icon {
          background: linear-gradient(135deg, rgba(255, 184, 28, 0.3), rgba(255, 184, 28, 0.2));
          transform: scale(1.1) rotate(10deg);
        }
        
        .location-link {
          transition: all 0.3s ease;
          position: relative;
          display: inline-block;
          color: #ffffff !important;
        }
        
        .location-link:hover {
          color: #ffb81c !important;
        }
        
        .location-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: #ffb81c;
          transition: width 0.3s ease;
        }
        
        .location-link:hover::after {
          width: 100%;
        }
        
        .location-card-wrapper {
          background: #ffffff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(15, 58, 125, 0.25);
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          z-index: 2;
        }
        
        .location-card-wrapper:hover {
          transform: translateY(-12px);
          box-shadow: 0 30px 80px rgba(15, 58, 125, 0.35);
        }
        
        .location-card-header {
          background: linear-gradient(135deg, #0f3a7d 0%, #1a5fc4 100%);
          padding: 20px 24px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }
        
        .location-card-title {
          font-size: 20px;
          font-weight: 700;
          color: #ffffff;
          margin: 0;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .location-card-content {
          padding: 0;
        }
        
        .map-wrap {
          min-height: 340px;
          transition: all 0.3s ease;
          border: none;
        }
        
        .map-wrap iframe {
          transition: all 0.3s ease;
        }
        
        .location-card-wrapper:hover .map-wrap iframe {
          filter: brightness(1.05);
        }
        
        @media (max-width: 992px) {
          .location-heading {
            font-size: 32px;
          }
          
          .location_sec {
            min-height: auto;
            padding: 60px 0;
          }
          
          .map-wrap {
            min-height: 280px;
          }
        }
        
        @media (max-width: 768px) {
          .location-heading {
            font-size: 28px;
          }
          
          .location-info-group {
            padding: 16px;
          }
          
          .map-wrap {
            min-height: 250px;
          }
        }
      `}</style>
    </section>
  );
}
