import { useState } from 'react';
import { AMENITY_IMG, PROGRAM_IMG } from '../data';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const galleryImages = [
    { id: 1, title: 'Classroom Learning', category: 'classroom', image: PROGRAM_IMG.playgroup },
    { id: 2, title: 'Creative Art Activity', category: 'activities', image: AMENITY_IMG.ambience },
    { id: 3, title: 'Play Time Fun', category: 'activities', image: AMENITY_IMG.play },
    { id: 4, title: 'Safe Learning Space', category: 'classroom', image: PROGRAM_IMG.nursery },
    { id: 5, title: 'Group Learning', category: 'classroom', image: PROGRAM_IMG.junior },
    { id: 6, title: 'Interactive Learning', category: 'activities', image: AMENITY_IMG.staff },
    { id: 7, title: 'Modern Infrastructure', category: 'facilities', image: PROGRAM_IMG.senior },
    { id: 8, title: 'Safe Transportation', category: 'facilities', image: AMENITY_IMG.transfer },
  ];

  const filters = [
    { label: 'All', value: 'all' },
    { label: 'Classrooms', value: 'classroom' },
    { label: 'Activities', value: 'activities' },
    { label: 'Facilities', value: 'facilities' },
  ];

  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  return (
    <section className="gallery-section py-5">
      <div className="container-lg">
        {/* Header */}
        <div className="section-header text-center mb-5" data-aos="fade-down">
          <h2 className="section-title mb-3">Gallery & Moments</h2>
          <p className="section-subtitle">Glimpses of learning, laughter, and growth at HIGREVA</p>
        </div>

        {/* Filter Buttons */}
        <div className="filter-buttons text-center mb-5" data-aos="fade-up">
          {filters.map(filter => (
            <button
              key={filter.value}
              className={`filter-btn ${activeFilter === filter.value ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid" data-aos="fade-up">
          {filteredImages.map((image, idx) => (
            <div
              key={image.id}
              className="gallery-item"
              onClick={() => setSelectedImage(image)}
              data-aos="fade-up"
              data-aos-delay={idx * 50}
            >
              <div className="gallery-image-wrapper">
                <img
                  src={image.image}
                  alt={image.title}
                  className="gallery-image"
                  loading="lazy"
                />
                <div className="gallery-overlay">
                  <div className="overlay-content">
                    <i className="fa-solid fa-magnifying-glass-plus" />
                    <p className="overlay-title">{image.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox-modal" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
              <i className="fa-solid fa-xmark" />
            </button>
            <img src={selectedImage.image} alt={selectedImage.title} className="lightbox-image" />
            <div className="lightbox-info">
              <h3>{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .gallery-section {
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

        .filter-buttons {
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .filter-btn {
          background: rgba(15, 58, 125, 0.08);
          color: #0f3a7d;
          border: 2px solid rgba(15, 58, 125, 0.2);
          padding: 10px 24px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .filter-btn:hover {
          background: rgba(15, 58, 125, 0.12);
          border-color: rgba(15, 58, 125, 0.4);
        }

        .filter-btn.active {
          background: linear-gradient(135deg, #0f3a7d, #1a5fc4);
          color: #ffffff;
          border-color: transparent;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
          margin-bottom: 40px;
        }

        .gallery-item {
          cursor: pointer;
          position: relative;
          aspect-ratio: 1;
        }

        .gallery-image-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
          border-radius: 16px;
          box-shadow: 0 8px 24px rgba(15, 58, 125, 0.1);
          transition: all 0.3s ease;
        }

        .gallery-item:hover .gallery-image-wrapper {
          transform: scale(1.05);
          box-shadow: 0 16px 40px rgba(15, 58, 125, 0.15);
        }

        .gallery-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease, filter 0.3s ease;
        }

        .gallery-item:hover .gallery-image {
          transform: scale(1.15);
          filter: brightness(0.8);
        }

        .gallery-overlay {
          position: absolute;
          inset: 0;
          background: rgba(15, 58, 125, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }

        .overlay-content {
          text-align: center;
          color: #ffffff;
        }

        .overlay-content i {
          font-size: 48px;
          margin-bottom: 12px;
          display: block;
          animation: bounce 0.6s ease-in-out infinite;
        }

        .overlay-title {
          font-size: 18px;
          font-weight: 600;
          margin: 0;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        /* Lightbox Modal */
        .lightbox-modal {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.95);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .lightbox-content {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
          animation: slideUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @keyframes slideUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .lightbox-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 12px;
        }

        .lightbox-close {
          position: absolute;
          top: -40px;
          right: 0;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.2);
          border: 2px solid #ffffff;
          color: #ffffff;
          border-radius: 50%;
          font-size: 24px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lightbox-close:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: scale(1.1) rotate(90deg);
        }

        .lightbox-info {
          text-align: center;
          color: #ffffff;
          margin-top: 20px;
        }

        .lightbox-info h3 {
          font-size: 20px;
          margin: 0;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }

          .lightbox-close {
            top: -30px;
            width: 36px;
            height: 36px;
            font-size: 20px;
          }

          .overlay-content i {
            font-size: 36px;
          }

          .overlay-title {
            font-size: 14px;
          }
        }

        @media (max-width: 480px) {
          .gallery-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .filter-buttons {
            gap: 8px;
          }

          .filter-btn {
            padding: 8px 16px;
            font-size: 12px;
          }
        }
      `}</style>
    </section>
  );
}
