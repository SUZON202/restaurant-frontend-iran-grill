import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        alert("কিছু সমস্যা হয়েছে, আবার চেষ্টা করুন।");
      }
    } catch (error) {
      alert("সার্ভারে কানেক্ট করা যাচ্ছে না!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: '#0A0F1A', color: '#FFFFFF', overflowX: 'hidden' }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=DM+Sans:wght@300;400;500&display=swap');

        :root {
          --flame: #F97316;
          --gold: #FB923C;
          --gold-light: #FDBA74;
          --dark: #0A0F1A;
          --dark2: #111827;
          --dark3: #1E293B;
          --border: rgba(255,255,255,0.1);
        }

        .ct-wrapper {
          min-height: 100vh;
          padding: 120px 40px 100px;
          max-width: 1100px;
          margin: 0 auto;
        }

        /* HEADER */
        .ct-label {
          font-size: 10px;
          letter-spacing: 0.45em;
          text-transform: uppercase;
          color: var(--flame);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin-bottom: 22px;
        }
        .ct-label::before, .ct-label::after {
          content: '';
          width: 40px;
          height: 1px;
          background: rgba(249,115,22,0.4);
        }
        .ct-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(44px, 7vw, 82px);
          font-weight: 900;
          line-height: 0.95;
          letter-spacing: -0.02em;
          text-align: center;
          margin-bottom: 16px;
        }
        .ct-title .solid { color: #FFFFFF; display: block; }
        .ct-title .outline {
          color: transparent;
          -webkit-text-stroke: 1.5px var(--flame);
          font-style: italic;
          display: block;
        }
        .ct-subtitle {
          font-size: 15px;
          font-weight: 300;
          color: rgba(255,255,255,0.6);
          max-width: 440px;
          margin: 0 auto 80px;
          line-height: 1.85;
          text-align: center;
        }

        /* MAIN GRID */
        .ct-grid {
          display: grid;
          grid-template-columns: 1fr 1.6fr;
          gap: 1px;
          background: rgba(255,255,255,0.05);
          border: 1px solid var(--border);
          position: relative;
          border-radius: 8px;
          overflow: hidden;
        }

        /* LEFT INFO PANEL */
        .ct-info {
          background: var(--dark2);
          padding: 60px 44px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 40px;
        }
        .ct-info-tag {
          font-size: 10px;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: var(--flame);
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .ct-info-tag::after {
          content: '';
          flex: 1;
          height: 1px;
          background: rgba(249,115,22,0.3);
        }
        .ct-info-heading {
          font-family: 'Playfair Display', serif;
          font-size: 28px;
          font-weight: 700;
          color: #FFFFFF;
          line-height: 1.2;
          margin-bottom: 18px;
          letter-spacing: -0.01em;
        }
        .ct-info-heading em { font-style: italic; color: var(--flame); }
        .ct-info-body {
          font-size: 14px;
          font-weight: 300;
          color: rgba(255,255,255,0.6);
          line-height: 1.9;
        }

        .ct-contacts { display: flex; flex-direction: column; gap: 0; }
        .ct-contact-row {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 20px 0;
          border-bottom: 1px solid var(--border);
        }
        .ct-contact-row:first-child { border-top: 1px solid var(--border); }
        .ct-contact-icon {
          width: 36px; height: 36px;
          border: 1px solid rgba(249,115,22,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 15px;
          flex-shrink: 0;
          margin-top: 2px;
          border-radius: 50%;
        }
        .ct-contact-label {
          font-size: 10px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--flame);
          margin-bottom: 4px;
        }
        .ct-contact-value {
          font-size: 14px;
          font-weight: 400;
          color: rgba(255,255,255,0.7);
          line-height: 1.6;
        }

        .ct-social { display: flex; gap: 10px; }
        .ct-social-btn {
          width: 38px; height: 38px;
          border: 1px solid rgba(255,255,255,0.2);
          background: transparent;
          color: rgba(255,255,255,0.6);
          font-size: 14px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: border-color 0.3s, color 0.3s, background 0.3s;
          border-radius: 4px;
        }
        .ct-social-btn:hover {
          border-color: var(--flame);
          color: var(--flame);
          background: rgba(249,115,22,0.1);
        }

        /* RIGHT FORM PANEL */
        .ct-form-panel {
          background: var(--dark);
          padding: 60px 54px;
        }
        .ct-form-title {
          font-family: 'Playfair Display', serif;
          font-size: 22px;
          font-weight: 600;
          color: #FFFFFF;
          margin-bottom: 40px;
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .ct-form-title::after {
          content: '';
          flex: 1;
          height: 1px;
          background: var(--border);
        }

        .ct-field { margin-bottom: 32px; position: relative; }
        .ct-field-label {
          font-size: 9px;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
          margin-bottom: 10px;
          display: block;
          transition: color 0.3s;
        }
        .ct-field.focused .ct-field-label { color: var(--flame); }
        .ct-field-input {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(255,255,255,0.2);
          padding: 10px 0 12px;
          color: #FFFFFF;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 300;
          outline: none;
          transition: border-color 0.3s;
          caret-color: var(--flame);
        }
        .ct-field-input::placeholder { color: rgba(255,255,255,0.2); }
        .ct-field-input:focus { border-color: var(--flame); }
        textarea.ct-field-input { resize: none; min-height: 80px; }
        .ct-field-line {
          position: absolute;
          bottom: 0; left: 0;
          height: 1px;
          width: 0;
          background: var(--flame);
          transition: width 0.4s cubic-bezier(0.4,0,0.2,1);
        }
        .ct-field.focused .ct-field-line { width: 100%; }

        .ct-field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; }

        .ct-submit-btn {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          padding: 16px 44px;
          background: var(--flame);
          color: white;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          border: none;
          cursor: pointer;
          transition: background 0.3s, transform 0.2s;
          border-radius: 8px;
          margin-top: 8px;
        }
        .ct-submit-btn:hover:not(:disabled) { background: #EA580C; transform: translateY(-1px); }
        .ct-submit-btn:disabled { opacity: 0.6; cursor: not-allowed; }
        .ct-submit-arrow { font-size: 16px; transition: transform 0.3s; }
        .ct-submit-btn:hover .ct-submit-arrow { transform: translateX(4px); }

        /* SUCCESS */
        .ct-success {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 360px;
          text-align: center;
          gap: 20px;
        }
        .ct-success-icon {
          width: 64px; height: 64px;
          border: 1px solid var(--flame);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 26px;
          margin-bottom: 8px;
          color: var(--flame);
        }
        .ct-success-title {
          font-family: 'Playfair Display', serif;
          font-size: 28px;
          font-weight: 700;
          color: #FFFFFF;
        }
        .ct-success-title em { font-style: italic; color: var(--flame); }
        .ct-success-body {
          font-size: 14px;
          font-weight: 300;
          color: rgba(255,255,255,0.6);
          line-height: 1.8;
          max-width: 320px;
        }
        .ct-success-back {
          margin-top: 16px;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.2);
          color: rgba(255,255,255,0.6);
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          padding: 12px 32px;
          cursor: pointer;
          border-radius: 8px;
          transition: border-color 0.3s, color 0.3s, background 0.3s;
        }
        .ct-success-back:hover { 
          border-color: var(--flame); 
          color: var(--flame); 
          background: rgba(249,115,22,0.1); 
        }

        @media (max-width: 768px) {
          .ct-wrapper { padding: 100px 20px 80px; }
          .ct-grid { grid-template-columns: 1fr; }
          .ct-form-panel { padding: 44px 28px; }
          .ct-info { padding: 44px 28px; }
          .ct-field-row { grid-template-columns: 1fr; gap: 0; }
        }
      `}</style>

      <div className="ct-wrapper">

        {/* HEADER */}
        <div className="ct-label">Iran Grill</div>
        <h1 className="ct-title">
          <span className="solid">Get In</span>
          <span className="outline">Touch With Us</span>
        </h1>
        <p className="ct-subtitle">
          We welcome your queries, feedback, and reservations. Reach out — we would love to hear from you.
        </p>

        {/* MAIN PANEL */}
        <div className="ct-grid">

          {/* LEFT */}
          <div className="ct-info">
            <div className="ct-info-top">
              <div className="ct-info-tag">Find Us</div>
              <div className="ct-info-heading">
                Come Visit<br /><em>Iran Grill</em>
              </div>
              <p className="ct-info-body">
                Step into our restaurant and experience the authentic warmth of Persian hospitality. We are always happy to welcome you.
              </p>
            </div>

            <div className="ct-contacts">
              <div className="ct-contact-row">
                <div className="ct-contact-icon">📍</div>
                <div>
                  <div className="ct-contact-label">Address</div>
                  <div className="ct-contact-value">Iran Grill Restaurant<br />Rajshahi City Center<br />Rajshahi, Bangladesh</div>
                </div>
              </div>
              <div className="ct-contact-row">
                <div className="ct-contact-icon">📞</div>
                <div>
                  <div className="ct-contact-label">Phone</div>
                  <div className="ct-contact-value">+880 17XX-XXXXXX</div>
                </div>
              </div>
              <div className="ct-contact-row">
                <div className="ct-contact-icon">🕐</div>
                <div>
                  <div className="ct-contact-label">Opening Hours</div>
                  <div className="ct-contact-value">Sat – Thu: 12pm – 11pm<br />Friday: 2pm – 11pm</div>
                </div>
              </div>
            </div>

            <div>
              <div style={{ fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 12 }}>Follow Us</div>
              <div className="ct-social">
                {['f', 'in', 'ig', 'tw'].map((s) => (
                  <button key={s} className="ct-social-btn">{s}</button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="ct-form-panel">
            {submitted ? (
              <div className="ct-success">
                <div className="ct-success-icon">✦</div>
                <div className="ct-success-title">Message <em>Received</em></div>
                <p className="ct-success-body">
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
                <button className="ct-success-back" onClick={() => setSubmitted(false)}>
                  Send Another →
                </button>
              </div>
            ) : (
              <>
                <div className="ct-form-title">Send a Message</div>
                <form onSubmit={handleSubmit}>
                  <div className="ct-field-row">
                    <div className={`ct-field ${focusedField === 'name' ? 'focused' : ''}`}>
                      <label className="ct-field-label">Your Name *</label>
                      <input
                        name="name"
                        type="text"
                        className="ct-field-input"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Shafiq Suzon"
                        required
                      />
                      <div className="ct-field-line" />
                    </div>
                    <div className={`ct-field ${focusedField === 'phone' ? 'focused' : ''}`}>
                      <label className="ct-field-label">Phone *</label>
                      <input
                        name="phone"
                        type="tel"
                        className="ct-field-input"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="+880 17XX-XXXXXX"
                        required
                      />
                      <div className="ct-field-line" />
                    </div>
                  </div>

                  <div className={`ct-field ${focusedField === 'email' ? 'focused' : ''}`}>
                    <label className="ct-field-label">Email Address *</label>
                    <input
                      name="email"
                      type="email"
                      className="ct-field-input"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="your@email.com"
                      required
                    />
                    <div className="ct-field-line" />
                  </div>

                  <div className={`ct-field ${focusedField === 'message' ? 'focused' : ''}`}>
                    <label className="ct-field-label">Your Message</label>
                    <textarea
                      name="message"
                      className="ct-field-input"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Write your message here..."
                      rows={3}
                    />
                    <div className="ct-field-line" />
                  </div>

                  <button type="submit" className="ct-submit-btn" disabled={loading}>
                    {loading ? 'Sending...' : 'Send Message'}
                    {!loading && <span className="ct-submit-arrow">→</span>}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;