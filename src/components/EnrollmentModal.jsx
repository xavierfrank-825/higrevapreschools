import { useState, useEffect, useRef } from 'react';
import { PROGRAMS_LIST, LOCATION } from '../data';
import { useSelect2 } from '../hooks/useLib';

export default function EnrollmentModal({ isOpen }) {
  const selectRef = useRef(null);
  const selected = useSelect2(selectRef, {
    placeholder: 'Select a Program*',
    allowClear: true,
    width: '100%',
  });
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    program: '',
  });
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [answer, setAnswer] = useState('');
  const [agree, setAgree] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const a = Math.floor(Math.random() * 15);
    const b = Math.floor(Math.random() * 15);
    setN1(a);
    setN2(b);
    setAnswer('');
    setAgree(false);
    setSubmitted(false);
    setFormData({ firstName: '', lastName: '', phone: '', email: '', program: '' });
  }, [isOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const sendEmail = async (data) => {
    try {
      const response = await fetch('https://formspree.io/f/xvgoqgbw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          _subject: 'New Admission Inquiry - HIGREVA Preschools',
          firstName: data.firstName,
          lastName: data.lastName,
          phone: data.phone,
          email: data.email,
          program: data.program,
          submittedAt: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        }),
      });
      return response.ok;
    } catch (error) {
      console.error('Email submission error:', error);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (answer !== String(n1 + n2)) {
      alert('Please solve the captcha correctly.');
      return;
    }
    if (!agree) {
      alert('Please agree to the privacy policy.');
      return;
    }
    
    setIsLoading(true);
    const success = await sendEmail(formData);
    setIsLoading(false);
    
    if (success) {
      setSubmitted(true);
    } else {
      alert('Error submitting form. Please try again or contact us directly at ' + LOCATION.phone);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal fade show d-block modal-backdrop-animate" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-dialog-centered modal-content-animate" role="document">
        <div className="modal-content modal-card-animate">
          <div className="modal-header border-0 pb-0 modal-header-animate">
            <h4 className="modal-title admission-title">Admissions Open</h4>
            <button type="button" className="btn-close close-btn-animate" onClick={() => {}} aria-label="Close">
              <span className="visually-hidden">Close</span><i className="fa-solid fa-xmark" />
            </button>
          </div>
          {submitted ? (
            <div className="modal-body text-center py-5 success-content-animate">
              <div className="success-icon text-warning fs-1 mb-3 icon-animate"><i className="fa-solid fa-circle-check" /></div>
              <h4 className="fw-bold text-primary title-animate">Thank You!</h4>
              <p className="text-muted description-animate">Your inquiry has been submitted successfully. Our admissions team will call you at <strong>{formData.phone}</strong> within 24 hours.</p>
              <p className="small text-muted mt-2">Confirmation email sent to: <strong>{formData.email}</strong></p>
              <button className="btn btn-warning mt-3 px-4 btn-animate" onClick={() => setSubmitted(false)}>Submit Another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="modal-body p-4 p-md-5 form-body-animate">
                <div className="row">
                  <div className="col-6">
                    <div className="form-wrap mb-3 form-group-animate">
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First Name*"
                        className="form-control form-input-animate"
                        pattern="[a-zA-Z ]+"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-wrap mb-3 form-group-animate">
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name*"
                        className="form-control form-input-animate"
                        pattern="[a-zA-Z ]+"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="form-wrap mb-3 form-group-animate">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Mobile Number*"
                    className="form-control form-input-animate"
                    pattern="(6|7|8|9)\d{9}"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-wrap mb-3 form-group-animate">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email ID*"
                    className="form-control form-input-animate"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-wrap mb-3 select-z form-group-animate">
                  <select
                    ref={selectRef}
                    name="program"
                    defaultValue=""
                    value={formData.program}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select a Program*</option>
                    {PROGRAMS_LIST.map((p) => <option key={p.value} value={p.value}>{p.label}</option>)}
                  </select>
                </div>
                <div className="form-wrap mb-3 captcha form-group-animate">
                  <input
                    type="text"
                    id="capsum1"
                    className="form-control form-input-animate"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    placeholder="Enter answer"
                    required
                  />
                  <span className="ms-2 small captcha-text">{n1} + {n2} = ?</span>
                </div>
                <div className="form-check mb-3 form-group-animate">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="policyCheck"
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                  />
                  <label className="form-check-label small" htmlFor="policyCheck">I have read and agree to the Privacy Policy.</label>
                </div>
                <button
                  type="submit"
                  className="btn btn-warning w-100 fw-bold submit-btn-animate"
                  disabled={isLoading}
                >
                  {isLoading ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </form>
          )}
          <div className="modal-footer border-0 pb-3 pt-0">
            <small className="text-white-50 footer-text-animate">By submitting, you agree to our terms. Contact: {LOCATION.email}</small>
          </div>
        </div>
      </div>
      <button type="button" className="modal-backdrop fade show" onClick={() => {}} />
      <style>{`
        .modal-backdrop-animate { animation: fadeInBackdrop 0.3s ease-out; }
        @keyframes fadeInBackdrop { from { opacity: 0; } to { opacity: 1; } }
        .modal-content-animate { animation: slideUpModal 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); }
        @keyframes slideUpModal { from { opacity: 0; transform: translateY(30px) scale(0.95); } to { opacity: 1; transform: translateY(0) scale(1); } }
        .modal-card-animate { border-radius: 20px; box-shadow: 0 20px 60px rgba(0,0,0,0.25); }
        .modal-header-animate { animation: slideDown 0.4s ease-out; padding: 24px 24px 12px; }
        @keyframes slideDown { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
        .admission-title { font-size: 22px; font-weight: 900; color: #3B4FD9; }
        .close-btn-animate { transition: all 0.3s ease; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; border: none; background: rgba(59,79,217,0.08); border-radius: 8px; color: #3B4FD9; }
        .close-btn-animate:hover { background: #3B4FD9; color: #fff; transform: rotate(90deg) scale(1.1); }
        .form-body-animate { animation: fadeIn 0.5s ease-out 0.2s both; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .form-group-animate { animation: fadeInUp 0.5s ease-out 0.3s both; }
        .form-input-animate { transition: all 0.3s ease; border: 2px solid rgba(59,79,217,0.2); border-radius: 10px; }
        .form-input-animate:focus { border-color: #3B4FD9; box-shadow: 0 0 0 3px rgba(59,79,217,0.1); outline: none; }
        .form-input-animate:hover { border-color: #3B4FD9; }
        .submit-btn-animate { transition: all 0.3s ease; border-radius: 10px; animation: fadeInUp 0.5s ease-out 0.6s both; }
        .submit-btn-animate:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(255,184,28,0.4); }
        .submit-btn-animate:disabled { opacity: 0.7; cursor: not-allowed; }
        .success-icon { animation: popIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1); }
        @keyframes popIn { from { opacity: 0; transform: scale(0.3); } to { opacity: 1; transform: scale(1); } }
        .title-animate { animation: fadeInDown 0.5s ease-out 0.1s both; }
        .description-animate { animation: fadeIn 0.5s ease-out 0.2s both; }
        .success-content-animate { animation: fadeIn 0.5s ease-out; }
        .btn-animate { animation: fadeInUp 0.5s ease-out 0.3s both; }
        .footer-text-animate { animation: fadeIn 0.5s ease-out 0.4s both; display: inline-block; }
        .captcha { display: flex; align-items: center; gap: 8px; }
        .captcha-text { white-space: nowrap; color: #3B4FD9; font-weight: 600; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeInDown { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}
