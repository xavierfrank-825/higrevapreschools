import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'select2/dist/css/select2.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './index.css';

import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Welcome from './components/Welcome';
import BestAmenities from './components/BestAmenities';
import Programs from './components/Programs';
import WhyChoose from './components/WhyChoose';
import Location from './components/Location';
import Centres from './components/Centres';
import TestimonialsSec from './components/Testimonials';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingAdmissions from './components/FloatingAdmissions';
import EnrollmentModal from './components/EnrollmentModal';
import ContactModal from './components/ContactModal';
import ScrollProgress from './components/ScrollProgress';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <>
      <ScrollProgress />
      <Navbar onContactClick={() => setContactModalOpen(true)} />
      <main style={{ overflow: 'hidden' }}>
        <Banner />
        <Welcome />
        <BestAmenities />
        <Programs />
        <WhyChoose />
        <Location />
        <Centres />
        <TestimonialsSec />
        <Gallery />
        <FAQ />
      </main>
      <FloatingAdmissions onOpen={() => setModalOpen(true)} />
      <EnrollmentModal isOpen={modalOpen} />
      <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
      <Footer />
    </>
  );
}
