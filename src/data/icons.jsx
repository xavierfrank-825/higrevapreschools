import { PROGRAM_IMG, AMENITY_IMG, CENTRE_IMG, CENTRE_IMG_ALT, WHY_IMG, TESTIMONIALS } from './index';

export const STAT_ICONS = {
  years:   <i className="fa-solid fa-calendar-check" style={{ fontSize: 28 }} />,
  centres: <i className="fa-solid fa-school" style={{ fontSize: 28 }} />,
  awards:  <i className="fa-solid fa-trophy" style={{ fontSize: 28 }} />,
  happy:   <i className="fa-solid fa-heart" style={{ fontSize: 28 }} />,
};

export const Logo = ({ wide = false }) => (
  <svg viewBox="0 0 220 60" width={wide ? 220 : 160} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width={wide ? 216 : 156} height="56" rx="28" fill="#6B2D5B" opacity="0.12" />
    <text x="20" y="38" fontSize="22" fontWeight="900" fill="#6B2D5B" fontFamily="Poppins, sans-serif" letterSpacing="0.5">HIGREVA</text>
    <text x="20" y="54" fontSize="9" fontWeight="600" fill="#6B2D5B" fontFamily="Poppins, sans-serif" letterSpacing="2">PRESCHOOLS</text>
    {wide && <text x="170" y="38" fontSize="11" fontWeight="500" fill="#3B4FD9" fontFamily="Poppins, sans-serif">Where Little Minds Grow</text>}
  </svg>
);

export const Mascot = ({ className = '' }) => (
  <img
    src="/src/assets/hero.png"
    alt="HIGREVA mascot"
    className={className}
    style={{ width: '100%', maxWidth: 380, height: 'auto', display: 'block' }}
  />
);

export const Photo = ({ src, alt = '', className = '', style = {}, imgStyle = {} }) => (
  <img
    src={typeof src === 'string' ? src : '/src/assets/319600.jpeg'}
    alt={alt}
    className={className}
    style={{ objectFit: 'cover', width: '100%', height: '100%', display: 'block', ...style }}
    {...imgStyle}
  />
);

export const ProgramPhoto = ({ imgKey, className = '' }) => {
  const src = PROGRAM_IMG[imgKey] || '/src/assets/319600.jpeg';
  return <Photo src={src} alt={imgKey} className={className} />;
};

export const WhyPhoto = ({ imgKey, className = '' }) => {
  const src = WHY_IMG[imgKey] || '/src/assets/319600.jpeg';
  return <Photo src={src} alt={imgKey} className={className} />;
};

export const CentrePhoto = ({ imgKey, className = '' }) => {
  const src = CENTRE_IMG[imgKey] || '/src/assets/319600.jpeg';
  return <Photo src={src} alt={imgKey} className={className} />;
};

export const CentreAltPhoto = ({ imgKey, className = '' }) => {
  const src = CENTRE_IMG_ALT[imgKey] || '/src/assets/319606.jpeg';
  return <Photo src={src} alt={imgKey} className={className} />;
};

export const TestimonialPhoto = ({ index, className = '' }) => {
  const t = TESTIMONIALS[index];
  const src = t?.img || '/src/assets/319600.jpeg';
  return <Photo src={src} alt={t?.name || 'testimonial'} className={className} />;
};
