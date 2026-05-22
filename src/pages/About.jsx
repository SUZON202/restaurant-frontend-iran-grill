import React, { useRef } from 'react';

const stats = [
  { value: "24h", label: "Marination Time" },
  { value: "100%", label: "Real Charcoal" },
  { value: "15+", label: "Years Heritage" },
  { value: "50+", label: "Spice Varieties" },
];

const pillars = [
  {
    glyph: "I",
    num: "01",
    title: "Premium Quality",
    desc: "Only the highest grade beef, lamb, and chicken — every cut carefully selected for tenderness, marbling, and pure flavour.",
  },
  {
    glyph: "II",
    num: "02",
    title: "Artisan Recipe",
    desc: "Recipes passed through generations of Persian culinary heritage — preserving the soul and integrity of ancient tradition.",
  },
  {
    glyph: "III",
    num: "03",
    title: "Royal Ambiance",
    desc: "Modern luxury meets timeless heritage. Every visit is designed to feel like a dining experience worthy of royalty.",
  },
];

const manifestoBlocks = [
  {
    title: "The Charcoal Ritual",
    body: "We use only natural lump charcoal — never gas, never shortcuts. The fire is built by hand each morning and tended through service. The result is an authentic smokiness that modern kitchens simply cannot fake.",
  },
  {
    title: "The Marinade Secret",
    body: "Our marinade recipe has been refined over 15 years. Saffron, caramelised onion, lemon, and a proprietary blend of over 12 hand-ground spices — applied 24 hours before the meat ever meets the flame.",
  },
  {
    title: "The Sourcing Standard",
    body: "We do not compromise on ingredients. Every spice is sourced from verified suppliers in Iran, Turkey, and the wider Middle East. Freshness and provenance are non-negotiable at Iran Grill.",
  },
  {
    title: "The Dining Experience",
    body: "From the moment you arrive, every detail — the warm lighting, the aromas from the grill, the attentive service — is curated to transport you. Not just to a restaurant, but to a place of memory and meaning.",
  },
];

const About = () => {
  const pillarRefs = useRef([]);

  const handlePillarEnter = (i) => {
    if (pillarRefs.current[i]) {
      pillarRefs.current[i].style.background = '#1E293B'; 
      const line = pillarRefs.current[i].querySelector('.pillar-line');
      if (line) line.style.transform = 'scaleX(1)';
      const glyph = pillarRefs.current[i].querySelector('.pillar-glyph');
      if (glyph) glyph.style.WebkitTextStroke = '1px rgba(249,115,22,0.5)'; 
    }
  };

  const handlePillarLeave = (i) => {
    if (pillarRefs.current[i]) {
      pillarRefs.current[i].style.background = '#111827'; 
      const line = pillarRefs.current[i].querySelector('.pillar-line');
      if (line) line.style.transform = 'scaleX(0)';
      const glyph = pillarRefs.current[i].querySelector('.pillar-glyph');
      if (glyph) glyph.style.WebkitTextStroke = '1px rgba(255,255,255,0.15)'; 
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
          --cream: #FFFFFF;
          --dark2: #111827;
          --border: rgba(255,255,255,0.1);
        }

        .ig-hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding: 80px 40px;
        }
        .ig-hero-bg {
          position: absolute;
          inset: 0;
          background-image: url('https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?q=80&w=1920&auto=format&fit=crop');
          background-size: cover;
          background-position: center;
          /* ছবিটা আরেকটু লাইট করা হয়েছে */
          filter: brightness(0.85) contrast(1.1); 
        }
        .ig-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(10,15,26,0.3) 0%, #0A0F1A 100%);
        }
        
        .ig-hero-tag {
          font-size: 11px;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: #F97316;
          margin-bottom: 28px;
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .ig-hero-tag::before, .ig-hero-tag::after {
          content: '';
          width: 40px;
          height: 1px;
          background: #F97316;
          opacity: 0.6;
        }
        .ig-hero-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(52px, 8vw, 100px);
          font-weight: 900;
          line-height: 0.92;
          text-align: center;
          position: relative;
          z-index: 2;
          letter-spacing: -0.02em;
        }
        .ig-hero-title .line1 { color: #FFFFFF; display: block; }
        .ig-hero-title .line2 {
          color: transparent;
          -webkit-text-stroke: 1.5px #F97316;
          display: block;
          font-style: italic;
        }
        .ig-hero-title .line3 { color: #FFFFFF; display: block; }
        .ig-hero-sub {
          margin-top: 36px;
          font-size: 15px;
          font-weight: 300;
          color: rgba(255,255,255,0.6);
          text-align: center;
          max-width: 480px;
          line-height: 1.85;
          position: relative;
          z-index: 2;
        }
        .ig-scroll-hint {
          position: absolute;
          bottom: 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          z-index: 2;
          animation: igBounce 2.5s ease-in-out infinite;
        }
        .ig-scroll-hint span {
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(249,115,22,0.7);
        }
        .ig-scroll-arrow {
          width: 20px; height: 20px;
          border-right: 1px solid rgba(249,115,22,0.5);
          border-bottom: 1px solid rgba(249,115,22,0.5);
          transform: rotate(45deg);
        }
        @keyframes igBounce {
          0%,100%{transform:translateY(0)} 50%{transform:translateY(8px)}
        }

        .ig-stats-section { padding: 0 40px 100px; max-width: 1100px; margin: 0 auto; }
        .ig-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px;
          overflow: hidden;
        }
        .ig-stat-item {
          padding: 44px 24px;
          text-align: center;
          border-right: 1px solid rgba(255,255,255,0.1);
          position: relative;
          background: #111827;
          transition: background 0.3s;
          cursor: default;
        }
        .ig-stat-item:last-child { border-right: none; }
        .ig-stat-item:hover { background: rgba(249,115,22,0.05); }
        .ig-stat-item::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #F97316, transparent);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .ig-stat-item:hover::before { opacity: 1; }
        .ig-stat-val {
          font-family: 'Playfair Display', serif;
          font-size: 52px;
          font-weight: 700;
          color: #F97316;
          line-height: 1;
          margin-bottom: 10px;
        }
        .ig-stat-label {
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
        }

        .ig-section { max-width: 1100px; margin: 0 auto; padding: 100px 40px; }
        .ig-story-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .ig-section-label {
          font-size: 10px;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: #F97316;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .ig-section-label::after {
          content: '';
          flex: 1;
          height: 1px;
          background: rgba(249,115,22,0.3);
        }
        .ig-section-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(36px, 5vw, 58px);
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 28px;
          letter-spacing: -0.02em;
          color: #FFFFFF;
        }
        .ig-section-title em { font-style: italic; color: #F97316; }
        .ig-section-body {
          font-size: 15px;
          font-weight: 300;
          color: rgba(255,255,255,0.6);
          line-height: 1.95;
          margin-bottom: 20px;
        }

        .ig-image-stack { position: relative; height: 520px; }
        .ig-img-main {
          position: absolute;
          top: 0; left: 0;
          width: 75%; height: 82%;
          object-fit: cover;
          border-radius: 8px;
          filter: contrast(1.05);
          border: 1px solid rgba(255,255,255,0.1);
        }
        .ig-img-accent {
          position: absolute;
          bottom: 0; right: 0;
          width: 55%; height: 55%;
          object-fit: cover;
          border-radius: 8px;
          filter: contrast(1.05);
          border: 1px solid rgba(249,115,22,0.3);
          box-shadow: -8px -8px 0 rgba(255,255,255,0.05);
        }
        .ig-img-badge {
          position: absolute;
          top: 50%; right: -20px;
          transform: translateY(-50%);
          background: #0F172A;
          border: 1px solid rgba(249,115,22,0.3);
          border-radius: 8px;
          padding: 18px 20px;
          text-align: center;
          z-index: 10;
          min-width: 110px;
        }
        .ig-img-badge-val { font-size: 30px; line-height: 1; }
        .ig-img-badge-label {
          font-size: 9px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
          margin-top: 6px;
          display: block;
        }

        .ig-founder-block {
          margin-top: 36px;
          padding-top: 28px;
          border-top: 1px solid rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          gap: 18px;
        }
        .ig-founder-avatar {
          width: 50px; height: 50px;
          border-radius: 50%;
          background: #F97316;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Playfair Display', serif;
          font-size: 16px;
          font-weight: 700;
          color: white;
          flex-shrink: 0;
          border: 2px solid rgba(249,115,22,0.4);
        }
        .ig-founder-name {
          font-family: 'Playfair Display', serif;
          font-size: 17px;
          font-weight: 600;
          color: #FFFFFF;
        }
        .ig-founder-role { font-size: 12px; color: #F97316; margin-top: 3px; letter-spacing: 0.05em; }

        .ig-philosophy-section {
          background: #111827;
          border-top: 1px solid rgba(255,255,255,0.1);
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .ig-philosophy-inner { max-width: 1100px; margin: 0 auto; padding: 100px 40px; }
        .ig-philosophy-header { text-align: center; margin-bottom: 70px; }
        .ig-pillars-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px;
          overflow: hidden;
        }
        .ig-pillar {
          background: #111827;
          padding: 50px 36px;
          position: relative;
          overflow: hidden;
          transition: background 0.4s;
          cursor: default;
        }
        .pillar-glyph {
          font-family: 'Playfair Display', serif;
          font-size: 72px;
          font-weight: 900;
          color: transparent;
          -webkit-text-stroke: 1px rgba(255,255,255,0.15);
          position: absolute;
          top: 20px; right: 20px;
          line-height: 1;
          pointer-events: none;
          transition: -webkit-text-stroke 0.4s;
        }
        .ig-pillar-num { font-size: 11px; letter-spacing: 0.3em; color: #F97316; margin-bottom: 24px; display: block; }
        .ig-pillar-title {
          font-family: 'Playfair Display', serif;
          font-size: 24px; font-weight: 700;
          color: #FFFFFF; margin-bottom: 16px; line-height: 1.2;
        }
        .ig-pillar-desc { font-size: 14px; font-weight: 300; color: rgba(255,255,255,0.6); line-height: 1.8; }
        .pillar-line {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 2px;
          background: #F97316;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.5s cubic-bezier(0.4,0,0.2,1);
        }

        .ig-manifesto-section {
          max-width: 1100px;
          margin: 0 auto;
          padding: 120px 40px;
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 80px;
          align-items: start;
        }
        .ig-manifesto-left { position: sticky; top: 40px; }
        .ig-manifesto-quote {
          font-family: 'Playfair Display', serif;
          font-size: clamp(36px, 4vw, 52px);
          font-style: italic;
          line-height: 1.2;
          color: #FFFFFF;
          letter-spacing: -0.01em;
        }
        .ig-manifesto-quote span { color: #F97316; }
        .ig-manifesto-attr {
          margin-top: 24px;
          font-size: 12px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
        }
        .ig-manifesto-block {
          padding: 32px 0;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .ig-manifesto-block:first-child { border-top: 1px solid rgba(255,255,255,0.1); }
        .ig-manifesto-block-title {
          font-family: 'Playfair Display', serif;
          font-size: 20px; font-weight: 600;
          color: #FFFFFF; margin-bottom: 12px;
          display: flex; align-items: center; gap: 14px;
        }
        .ig-manifesto-block-title::before {
          content: '';
          width: 24px; height: 1px;
          background: #F97316;
          flex-shrink: 0;
        }
        .ig-manifesto-block-body {
          font-size: 14px; font-weight: 300;
          color: rgba(255,255,255,0.6);
          line-height: 1.85;
          padding-left: 38px;
        }

        .ig-cta-section {
          background: #111827;
          border-top: 1px solid rgba(255,255,255,0.1);
          padding: 100px 40px;
          text-align: center;
        }
        .ig-cta-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(36px, 5vw, 60px);
          font-weight: 900;
          color: #FFFFFF;
          margin-bottom: 16px;
          line-height: 1;
          letter-spacing: -0.02em;
        }
        .ig-cta-title em { color: #F97316; font-style: italic; }
        .ig-cta-sub {
          font-size: 14px; font-weight: 300;
          color: rgba(255,255,255,0.6);
          margin-bottom: 40px;
          letter-spacing: 0.05em;
        }
        .ig-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          padding: 16px 44px;
          background: #F97316;
          color: white;
          font-size: 13px; font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          border: none;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.3s, transform 0.2s;
          border-radius: 8px;
        }
        .ig-cta-btn:hover { background: #EA580C; transform: translateY(-1px); }

        @media (max-width: 768px) {
          .ig-stats-grid { grid-template-columns: repeat(2,1fr); }
          .ig-story-grid { grid-template-columns: 1fr; gap: 60px; }
          .ig-pillars-grid { grid-template-columns: 1fr; }
          .ig-manifesto-section { grid-template-columns: 1fr; gap: 50px; }
          .ig-manifesto-left { position: static; }
          .ig-img-badge { right: 10px; }
        }
      `}</style>

      {/* HERO */}
      <section className="ig-hero">
        <div className="ig-hero-bg" />
        <div className="ig-hero-overlay" />
        {/* মেনুর নিচের বর্ডারটি এখান থেকে পুরোপুরি রিমুভ করা হয়েছে */}
        <div className="ig-hero-tag">Iran Grill · Est. 2009</div>
        <h1 className="ig-hero-title">
          <span className="line1">Where Fire</span>
          <span className="line2">Meets Soul</span>
          <span className="line3">&amp; Heritage</span>
        </h1>
        <p className="ig-hero-sub">
          A story of ancient Persian traditions, 24-hour marinades, and real charcoal flame — told through every bite.
        </p>
        <div className="ig-scroll-hint">
          <span>Discover</span>
          <div className="ig-scroll-arrow" />
        </div>
      </section>

      {/* STATS */}
      <div className="ig-stats-section">
        <div className="ig-stats-grid">
          {stats.map((s, i) => (
            <div className="ig-stat-item" key={i}>
              <div className="ig-stat-val">{s.value}</div>
              <div className="ig-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* STORY */}
      <section className="ig-section">
        <div className="ig-story-grid">
          <div className="ig-image-stack">
            <img className="ig-img-main"
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=900&auto=format&fit=crop"
              alt="Iran Grill ambiance"
            />
            <img className="ig-img-accent"
              src="https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=900&auto=format&fit=crop"
              alt="Charcoal grilling"
            />
            <div className="ig-img-badge">
              <div className="ig-img-badge-val">🔥</div>
              <span className="ig-img-badge-label">Charcoal<br />Grilled</span>
            </div>
          </div>
          <div>
            <div className="ig-section-label">Our Story</div>
            <h2 className="ig-section-title">
              The secret lives in<br />
              <em>Spices &amp; Fire</em>
            </h2>
            <p className="ig-section-body">
              Our journey began with a singular vision — to bring the true, unadulterated taste of Persia to your table. Every cut of meat is marinated for a full 24 hours in hand-ground saffron, caramelised onions, and spices sourced directly from the Middle East.
            </p>
            <p className="ig-section-body">
              When premium marinated meat meets real charcoal flame, something magical happens. That smoky depth, that signature crust — it is a labour of love that cannot be replicated. It is felt in every single bite.
            </p>
            <div className="ig-founder-block">
              <div className="ig-founder-avatar">SS</div>
              <div>
                <div className="ig-founder-name">Shafiq Suzon</div>
                <div className="ig-founder-role">Head Chef &amp; Founder</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <div className="ig-philosophy-section">
        <div className="ig-philosophy-inner">
          <div className="ig-philosophy-header">
            <div className="ig-section-label" style={{ justifyContent: 'center' }}>
              <span style={{ width: 40, height: 1, background: 'rgba(249,115,22,0.3)', display: 'inline-block' }} />
              Our Philosophy
              <span style={{ width: 40, height: 1, background: 'rgba(249,115,22,0.3)', display: 'inline-block' }} />
            </div>
            <h2 className="ig-section-title" style={{ textAlign: 'center' }}>
              Three Pillars of<br /><em>Iran Grill</em>
            </h2>
          </div>
          <div className="ig-pillars-grid">
            {pillars.map((p, i) => (
              <div
                key={i}
                className="ig-pillar"
                ref={(el) => (pillarRefs.current[i] = el)}
                onMouseEnter={() => handlePillarEnter(i)}
                onMouseLeave={() => handlePillarLeave(i)}
              >
                <span className="pillar-glyph">{p.glyph}</span>
                <span className="ig-pillar-num">{p.num}</span>
                <h3 className="ig-pillar-title">{p.title}</h3>
                <p className="ig-pillar-desc">{p.desc}</p>
                <div className="pillar-line" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MANIFESTO */}
      <section className="ig-manifesto-section">
        <div className="ig-manifesto-left">
          <div className="ig-manifesto-quote">
            "Food is not<br />merely fuel —<br />it is <span>living memory.</span>"
          </div>
          <div className="ig-manifesto-attr">— The Iran Grill Ethos</div>
        </div>
        <div>
          {manifestoBlocks.map((b, i) => (
            <div className="ig-manifesto-block" key={i}>
              <div className="ig-manifesto-block-title">{b.title}</div>
              <p className="ig-manifesto-block-body">{b.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="ig-cta-section">
        <div className="ig-cta-title">Come. <em>Taste</em> History.</div>
        <p className="ig-cta-sub">Reserve your table and experience the art of Persian grilling</p>
        <a href="#" className="ig-cta-btn">Reserve a Table →</a>
      </div>

    </div>
  );
};

export default About;