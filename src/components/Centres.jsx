import { useState, useEffect } from 'react';
import { CENTRES } from '../data';
import { CentrePhoto } from '../data/icons';
import LazyImage from './LazyImage';

export default function Centres() {
  const [selected, setSelected] = useState('');
  const [filtered, setFiltered] = useState(CENTRES);

  useEffect(() => {
    if (!selected) { 
      setFiltered(CENTRES); 
      return; 
    }
    const match = CENTRES.filter((c) =>
      c.name.toLowerCase().includes(selected.toLowerCase()) ||
      c.addr.toLowerCase().includes(selected.toLowerCase())
    );
    setFiltered(match.length ? match : CENTRES);
  }, [selected]);

  return (
    <section id="centres" className="centers_sec py-5 grey_bg">
      <div className="container-lg position-relative">
        <div className="sec_head text-center mb-4" data-aos="fade-down">
          <h2 className="fw-bold text-primary">Our Centres in Bangalore</h2>
          <p className="text-muted mt-2">Find a centre near you and visit us</p>
        </div>
        <div className="row g-lg-0 justify-content-between gy-3 mb-4" data-aos="fade-up">
          <div className="col-lg-5 col-md-5">
            <div className="input-group search-input-group">
              <span className="input-group-text bg-white text-primary fw-bold"><i className="fa-solid fa-magnifying-glass" /></span>
              <select 
                className="form-select" 
                value={selected} 
                onChange={(e) => setSelected(e.target.value)}
              >
                <option value="">Select Area</option>
                {CENTRES.map((c, i) => <option key={i} value={c.name}>{c.name}</option>)}
              </select>
            </div>
          </div>
          <div className="col-lg-4 col-md-5">
            <input type="text" className="form-select search-input" placeholder="Search by Pincode" readOnly value="" />
          </div>
          <div className="col-lg-3 col-md-2 d-flex align-items-end">
            <button className="btn btn-warning w-100 fw-bold search-btn">Search</button>
          </div>
        </div>
        <div className="row g-3 mt-3 centres_row">
          {filtered.map((c, i) => (
            <div key={i} className="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay={i * 50}>
              <div className="center-card bg-white rounded-4 overflow-hidden shadow-sm border border-secondary-subtle">
                <div className="center-img text-center p-3 bg-primary-subtle img-container">
                  <LazyImage src={c.img || '/src/assets/319606.jpeg'} alt={c.name} className="w-100 center-photo" />
                </div>
                <div className="p-3 card-body">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <a href={`tel:${c.phone}`} className="btn btn-outline-primary btn-sm py-1 px-2 call-btn"><i className="fa-solid fa-phone" /> Call Us</a>
                  </div>
                  <a href="#" className="text-primary fw-bold text-decoration-none small mb-1 d-block center-name">{c.name}</a>
                  <p className="text-muted small mb-1"><i className="fa-solid fa-location-dot me-1 icon-accent" />{c.addr}</p>
                  <p className="text-muted small mb-1"><i className="fa-solid fa-clock me-1 icon-accent" />{c.timing}</p>
                  <p className="text-muted small mb-2"><i className="fa-solid fa-child me-1 icon-accent" />Age group - {c.age}</p>
                  <div className="d-flex gap-2 justify-content-center mt-2 social-links">
                    <a href="#" className="text-primary text-decoration-none link-icon"><i className="fa-brands fa-facebook-f" /></a>
                    <a href="#" className="text-danger text-decoration-none link-icon"><i className="fa-brands fa-instagram" /></a>
                    <a href="#" className="text-danger text-decoration-none link-icon"><i className="fa-brands fa-youtube" /></a>
                    <a href="#" className="text-primary text-decoration-none link-icon"><i className="fa-brands fa-whatsapp" /></a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4" data-aos="fade-up">
          <a href="#" className="btn btn-outline-primary rounded-pill px-4 small fw-bold view-more-btn">View More Pre-Schools <i className="fa-solid fa-arrow-right ms-1" /></a>
        </div>
      </div>
      <style>{`
        .centers_sec { background: #f8f9fa; }
        .sec_head h2 { font-size: 26px; font-weight: 900; color: #3B4FD9; text-align: center; margin-bottom: 12px; }
        .sec_head p { font-size: 14px; }
        .center-card { transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); position: relative; overflow: hidden; }
        .center-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(135deg, rgba(59,79,217,0.1) 0%, transparent 100%); opacity: 0; transition: opacity 0.3s; }
        .center-card:hover { transform: translateY(-8px); box-shadow: 0 16px 40px rgba(59,79,217,0.16); }
        .center-card:hover::before { opacity: 1; }
        .img-container { min-height: 120px; overflow: hidden; position: relative; }
        .center-photo { height: 100%; width: 100%; object-fit: cover; transition: transform 0.4s ease, filter 0.3s ease; }
        .center-card:hover .center-photo { transform: scale(1.1) rotate(1deg); filter: brightness(0.95); }
        .card-body { position: relative; z-index: 1; }
        .center-name { transition: all 0.3s ease; }
        .center-card:hover .center-name { color: #2d42b8; }
        .icon-accent { transition: all 0.3s ease; }
        .center-card:hover .icon-accent { color: #ffb81c; transform: rotate(10deg); }
        .call-btn { transition: all 0.3s ease; }
        .call-btn:hover { transform: scale(1.05); box-shadow: 0 4px 12px rgba(59,79,217,0.2); }
        .btn-outline-primary { color: #3B4FD9; border-color: #3B4FD9; }
        .btn-outline-primary:hover { background: #3B4FD9; color: #fff; }
        .search-input-group, .search-input { transition: all 0.3s ease; }
        .search-input-group:focus-within, .search-input:focus { box-shadow: 0 0 0 3px rgba(59,79,217,0.1); }
        .search-btn { transition: all 0.3s ease; }
        .search-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 16px rgba(255,184,28,0.3); }
        .link-icon { font-size: 16px; transition: all 0.3s ease; display: inline-flex; align-items: center; justify-content: center; width: 28px; height: 28px; border-radius: 50%; background: rgba(59,79,217,0.05); }
        .link-icon:hover { transform: translateY(-3px) scale(1.15); background: rgba(59,79,217,0.15); }
        .view-more-btn { transition: all 0.3s ease; }
        .view-more-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 16px rgba(59,79,217,0.2); }
      `}</style>
    </section>
  );
}
