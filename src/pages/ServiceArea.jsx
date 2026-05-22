import React, { useState } from 'react';

const divisions = [
  "Barisal", "Chittagong", "Dhaka", "Khulna",
  "Mymensingh", "Rajshahi", "Rangpur", "Sylhet"
];

const services = [
  {
    id: 1,
    title: "Fine Dining",
    description: "Enjoy your meal in a premium and cozy environment with your family.",
    icon: "🍽️",
    num: "01",
  },
  {
    id: 2,
    title: "Fast Delivery",
    description: "Get your favorite grilled dishes delivered right to your doorstep, fresh and hot.",
    icon: "🛵",
    num: "02",
  },
  {
    id: 3,
    title: "Takeaway",
    description: "Order online and pick up your meal at your convenience from our outlet.",
    icon: "🥡",
    num: "03",
  },
  {
    id: 4,
    title: "Event Catering",
    description: "We provide professional catering services for your special parties and events.",
    icon: "🎉",
    num: "04",
  },
];

const ServiceArea = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDivision, setSelectedDivision] = useState('Rajshahi');

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: '#0A0F1A', color: '#FFFFFF', overflowX: 'hidden' }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=DM+Sans:wght@300;400;500&display=swap');

        :root {
          --flame: #F97316;
          --gold: #FB923C;
          --gold-light: #FDBA74;
          --cream: #FFFFFF;
          --dark: #0A0F1A;
          --dark2: #111827;
          --dark3: #1E293B;
          --border: rgba(255,255,255,0.1);
        }

        .sa-wrapper {
          min-height: 100vh;
          padding: 120px 40px 100px;
          max-width: 1100px;
          margin: 0 auto;
        }

        /* HEADER */
        .sa-header {
          text-align: center;
          margin-bottom: 80px;
          position: relative;
        }
        .sa-label {
          font-size: 10px;
          letter-spacing: 0.45em;
          text-transform: uppercase;
          color: #F97316;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin-bottom: 22px;
        }
        .sa-label::before, .sa-label::after {
          content: '';
          width: 40px;
          height: 1px;
          background: rgba(249,115,22,0.4);
        }
        .sa-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(44px, 7vw, 80px);
          font-weight: 900;
          line-height: 0.95;
          letter-spacing: -0.02em;
          margin-bottom: 24px;
        }
        .sa-title .solid { color: #FFFFFF; display: block; }
        .sa-title .outline {
          color: transparent;
          -webkit-text-stroke: 1.5px #F97316;
          font-style: italic;
          display: block;
        }
        .sa-subtitle {
          font-size: 15px;
          font-weight: 300;
          color: rgba(255,255,255,0.6);
          max-width: 460px;
          margin: 0 auto;
          line-height: 1.85;
        }

        /* SERVICES GRID */
        .sa-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1px;
          background: rgba(255,255,255,0.05);
          border: 1px solid var(--border);
          margin-bottom: 80px;
          border-radius: 8px;
          overflow: hidden;
        }
        .sa-card {
          background: #111827;
          padding: 50px 40px;
          position: relative;
          overflow: hidden;
          cursor: default;
          transition: background 0.4s;
        }
        .sa-card:hover { background: #1E293B; }
        .sa-card-num {
          font-family: 'Playfair Display', serif;
          font-size: 80px;
          font-weight: 900;
          color: transparent;
          -webkit-text-stroke: 1px rgba(255,255,255,0.1);
          position: absolute;
          top: 10px; right: 20px;
          line-height: 1;
          pointer-events: none;
          transition: -webkit-text-stroke 0.4s;
        }
        .sa-card:hover .sa-card-num {
          -webkit-text-stroke: 1px rgba(249,115,22,0.3);
        }
        .sa-card-top {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 20px;
        }
        .sa-card-icon {
          font-size: 34px;
          line-height: 1;
          transition: transform 0.3s;
        }
        .sa-card:hover .sa-card-icon { transform: scale(1.15); }
        .sa-card-seq {
          font-size: 10px;
          letter-spacing: 0.3em;
          color: #F97316;
        }
        .sa-card-title {
          font-family: 'Playfair Display', serif;
          font-size: 26px;
          font-weight: 700;
          color: #FFFFFF;
          margin-bottom: 14px;
          transition: color 0.3s;
          position: relative;
          z-index: 1;
        }
        .sa-card:hover .sa-card-title { color: #F97316; }
        .sa-card-desc {
          font-size: 14px;
          font-weight: 300;
          color: rgba(255,255,255,0.6);
          line-height: 1.85;
          position: relative;
          z-index: 1;
        }
        .sa-card-line {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 2px;
          background: #F97316;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.5s cubic-bezier(0.4,0,0.2,1);
        }
        .sa-card:hover .sa-card-line { transform: scaleX(1); }
        .sa-card-left-accent {
          position: absolute;
          top: 0; left: 0; bottom: 0;
          width: 2px;
          background: linear-gradient(180deg, transparent, #F97316, transparent);
          opacity: 0;
          transition: opacity 0.4s;
        }
        .sa-card:hover .sa-card-left-accent { opacity: 1; }

        /* DELIVERY SECTION */
        .sa-delivery {
          border: 1px solid var(--border);
          background: #111827;
          padding: 70px 60px;
          position: relative;
          overflow: hidden;
          border-radius: 8px;
        }
        .sa-delivery::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #F97316, #FB923C, #F97316, transparent);
        }
        .sa-delivery-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        .sa-delivery-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(30px, 3.5vw, 46px);
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 16px;
          letter-spacing: -0.02em;
        }
        .sa-delivery-title em { font-style: italic; color: #F97316; }
        .sa-delivery-body {
          font-size: 14px;
          font-weight: 300;
          color: rgba(255,255,255,0.6);
          line-height: 1.9;
          margin-bottom: 0;
        }

        /* DROPDOWN */
        .sa-dropdown-wrap { position: relative; }
        .sa-dropdown-label {
          font-size: 10px;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: #F97316;
          margin-bottom: 14px;
        }
        .sa-dropdown-btn {
          width: 100%;
          padding: 18px 24px;
          background: #0A0F1A;
          border: 1px solid rgba(255,255,255,0.2);
          color: #FFFFFF;
          font-family: 'Playfair Display', serif;
          font-size: 18px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: border-color 0.3s, background 0.3s;
          text-align: left;
          border-radius: 8px;
        }
        .sa-dropdown-btn:hover {
          border-color: rgba(249,115,22,0.5);
          background: #0F172A;
        }
        .sa-dropdown-arrow {
          width: 10px; height: 10px;
          border-right: 1.5px solid #F97316;
          border-bottom: 1.5px solid #F97316;
          transform: rotate(45deg);
          transition: transform 0.3s;
          flex-shrink: 0;
          margin-top: -4px;
        }
        .sa-dropdown-arrow.open {
          transform: rotate(-135deg);
          margin-top: 4px;
        }
        .sa-dropdown-menu {
          position: absolute;
          top: calc(100% + 8px);
          left: 0; right: 0;
          background: #0F172A;
          border: 1px solid rgba(255,255,255,0.1);
          border-top: 2px solid #F97316;
          border-radius: 8px;
          z-index: 50;
          max-height: 220px;
          overflow-y: auto;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }
        .sa-dropdown-menu::-webkit-scrollbar { width: 3px; }
        .sa-dropdown-menu::-webkit-scrollbar-track { background: transparent; }
        .sa-dropdown-menu::-webkit-scrollbar-thumb { background: #F97316; }
        .sa-dropdown-option {
          width: 100%;
          padding: 14px 24px;
          background: transparent;
          border: none;
          color: rgba(255,255,255,0.6);
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 400;
          cursor: pointer;
          text-align: left;
          transition: background 0.2s, color 0.2s;
          display: flex;
          align-items: center;
          gap: 10px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .sa-dropdown-option:hover {
          background: rgba(249,115,22,0.1);
          color: #FFFFFF;
        }
        .sa-dropdown-option.active {
          color: #F97316;
          background: rgba(249,115,22,0.1);
          font-weight: 500;
        }
        .sa-dropdown-option.active::before {
          content: '';
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #F97316;
          flex-shrink: 0;
        }

        /* STATUS */
        .sa-status {
          margin-top: 22px;
          padding: 18px 24px;
          border-left: 2px solid;
          transition: all 0.4s;
          border-radius: 4px;
        }
        .sa-status.available {
          border-color: #F97316;
          background: rgba(249,115,22,0.1);
        }
        .sa-status.unavailable {
          border-color: rgba(255,255,255,0.2);
          background: rgba(255,255,255,0.05);
        }
        .sa-status-title {
          font-family: 'Playfair Display', serif;
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 4px;
        }
        .sa-status.available .sa-status-title { color: #F97316; }
        .sa-status.unavailable .sa-status-title { color: rgba(255,255,255,0.5); }
        .sa-status-body {
          font-size: 13px;
          font-weight: 300;
          color: rgba(255,255,255,0.5);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .sa-wrapper { padding: 100px 20px 80px; }
          .sa-grid { grid-template-columns: 1fr; }
          .sa-delivery { padding: 50px 28px; }
          .sa-delivery-inner { grid-template-columns: 1fr; gap: 40px; }
        }
      `}</style>

      <div className="sa-wrapper">

        {/* HEADER */}
        <div className="sa-header">
          <div className="sa-label">Iran Grill</div>
          <h1 className="sa-title">
            <span className="solid">Where We</span>
            <span className="outline">Serve You</span>
          </h1>
          <p className="sa-subtitle">
            From our grill to your table — we deliver the authentic taste of Persia wherever you are.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="sa-grid">
          {services.map((s) => (
            <div
              key={s.id}
              className="sa-card"
            >
              <div className="sa-card-num">{s.num}</div>
              <div className="sa-card-left-accent" />
              <div className="sa-card-top">
                <span className="sa-card-icon">{s.icon}</span>
                <span className="sa-card-seq">{s.num}</span>
              </div>
              <div className="sa-card-title">{s.title}</div>
              <p className="sa-card-desc">{s.description}</p>
              <div className="sa-card-line" />
            </div>
          ))}
        </div>

        {/* DELIVERY SECTION */}
        <div className="sa-delivery">
          <div className="sa-delivery-inner">

            {/* Left text */}
            <div>
              <div className="sa-label" style={{ justifyContent: 'flex-start' }}>
                Delivery Zone
              </div>
              <h2 className="sa-delivery-title">
                Check Your<br />
                <em>Area Coverage</em>
              </h2>
              <p className="sa-delivery-body">
                Select your division below to check if fast delivery is available near you. We are expanding our coverage across all of Bangladesh.
              </p>
            </div>

            {/* Right dropdown */}
            <div>
              <div className="sa-dropdown-label">Your Division</div>
              <div className="sa-dropdown-wrap">
                <button className="sa-dropdown-btn" onClick={() => setIsOpen(!isOpen)}>
                  {selectedDivision}
                  <span className={`sa-dropdown-arrow ${isOpen ? 'open' : ''}`} />
                </button>

                {isOpen && (
                  <div className="sa-dropdown-menu">
                    {divisions.map((d, i) => (
                      <button
                        key={i}
                        className={`sa-dropdown-option ${selectedDivision === d ? 'active' : ''}`}
                        onClick={() => { setSelectedDivision(d); setIsOpen(false); }}
                      >
                        {selectedDivision !== d && (
                          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', flexShrink: 0, display: 'inline-block' }} />
                        )}
                        {d}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className={`sa-status ${selectedDivision === 'Rajshahi' ? 'available' : 'unavailable'}`}>
                <div className="sa-status-title">
                  {selectedDivision === 'Rajshahi' ? '✦ Fast Delivery Available' : '◦ Limited Coverage'}
                </div>
                <div className="sa-status-body">
                  {selectedDivision === 'Rajshahi'
                    ? 'You are in our primary delivery zone. Expect fresh, hot delivery within 30–45 minutes.'
                    : `We are working on expanding to ${selectedDivision}. Delivery times may vary in this region.`}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default ServiceArea;