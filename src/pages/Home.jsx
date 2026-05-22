import React, { useState, useEffect, useRef } from 'react';

const menuItems = [
  { name: "Signature Beef Steak", price: "$25.99", desc: "Premium beef steak grilled to perfection with our secret spices.", img: "https://images.unsplash.com/photo-1546964124-0cce460f38ef?w=600&auto=format&fit=crop" },
  { name: "Spicy Grilled Chicken", price: "$18.50", desc: "Tender chicken breasts marinated in fiery spices and grilled.", img: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?w=600&auto=format&fit=crop" },
  { name: "BBQ Lamb Chops", price: "$30.00", desc: "Juicy lamb chops slow-cooked over a wood fire with BBQ glaze.", img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop" },
  { name: "Shish Kebab Platter", price: "$19.99", desc: "Seasoned minced meat skewers grilled over charcoal fire.", img: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&auto=format&fit=crop" },
];

const galleryImages = [
  { img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&auto=format&fit=crop", label: "Fine Dining" },
  { img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&auto=format&fit=crop", label: "Our Ambiance" },
  { img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop", label: "Open Kitchen" },
  { img: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=600&auto=format&fit=crop", label: "Private Dining" },
];

const testimonials = [
  { name: "Sarah M.", review: "Best grilled food I've ever tasted! The lamb chops were absolutely divine.", stars: 5 },
  { name: "James K.", review: "Amazing atmosphere and even better food. The mixed grill combo is a must-try!", stars: 5 },
  { name: "Priya R.", review: "Fantastic service and incredible flavors. Iran Grill is now our go-to restaurant.", stars: 5 },
];

const whyUs = [
  { icon: "🔥", title: "Charcoal Grilled", desc: "Authentic charcoal grilling for unbeatable smoky depth." },
  { icon: "🌿", title: "Fresh Ingredients", desc: "Only the finest, freshest ingredients sourced daily." },
  { icon: "👨‍🍳", title: "Expert Chefs", desc: "20+ seasoned chefs with decades of Persian culinary mastery." },
  { icon: "⭐", title: "5-Star Experience", desc: "Award-winning service and an unforgettable atmosphere." },
];

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState({});
  const sectionRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => ({ ...prev, [entry.target.dataset.section]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );
    Object.values(sectionRefs.current).forEach(ref => { if (ref) observer.observe(ref); });
    return () => observer.disconnect();
  }, []);

  const addRef = (key) => (el) => { if (el) { el.dataset.section = key; sectionRefs.current[key] = el; } };

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

        /* REVEAL ANIMATIONS */
        .reveal { opacity: 0; transform: translateY(40px); transition: opacity 0.9s ease, transform 0.9s ease; }
        .reveal.visible { opacity: 1; transform: translateY(0); }
        .reveal-left { opacity: 0; transform: translateX(-40px); transition: opacity 0.9s ease, transform 0.9s ease; }
        .reveal-left.visible { opacity: 1; transform: translateX(0); }
        .reveal-right { opacity: 0; transform: translateX(40px); transition: opacity 0.9s ease, transform 0.9s ease; }
        .reveal-right.visible { opacity: 1; transform: translateX(0); }

        /* HERO */
        .hm-hero {
          position: relative;
          height: 100vh;
          min-height: 700px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .hm-hero-bg {
          position: absolute;
          inset: 0;
          background-image: url('https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1920&auto=format&fit=crop');
          background-size: cover;
          background-position: center;
          filter: brightness(0.5) contrast(1.1);
          transform-origin: center;
        }
        .hm-hero-overlay {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 70% 60% at 50% 0%, rgba(249,115,22,0.15) 0%, transparent 65%),
            linear-gradient(to bottom, transparent 40%, #0A0F1A 100%);
        }
        .hm-hero-content {
          position: relative;
          z-index: 10;
          text-align: center;
          padding: 0 24px;
          max-width: 900px;
        }
        .hm-hero-tag {
          font-size: 10px;
          letter-spacing: 0.5em;
          text-transform: uppercase;
          color: #F97316;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin-bottom: 30px;
          animation: fadeInDown 1s ease 0.2s both;
        }
        .hm-hero-tag::before, .hm-hero-tag::after {
          content: '';
          width: 50px;
          height: 1px;
          background: rgba(249,115,22,0.5);
        }
        @keyframes fadeInDown { from { opacity:0; transform:translateY(-20px); } to { opacity:1; transform:translateY(0); } }
        @keyframes fadeInUp { from { opacity:0; transform:translateY(30px); } to { opacity:1; transform:translateY(0); } }

        .hm-hero-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(56px, 10vw, 120px);
          font-weight: 900;
          line-height: 0.9;
          letter-spacing: -0.03em;
          margin-bottom: 30px;
          animation: fadeInUp 1s ease 0.4s both;
        }
        .hm-hero-title .t1 { color: #FFFFFF; display: block; }
        .hm-hero-title .t2 {
          color: transparent;
          -webkit-text-stroke: 2px #F97316;
          font-style: italic;
          display: block;
        }
        .hm-hero-sub {
          font-size: 16px;
          font-weight: 300;
          color: rgba(255,255,255,0.6);
          max-width: 480px;
          margin: 0 auto 44px;
          line-height: 1.85;
          animation: fadeInUp 1s ease 0.6s both;
        }
        .hm-hero-btns {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
          animation: fadeInUp 1s ease 0.8s both;
        }
        .hm-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 16px 40px;
          background: #F97316;
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
          text-decoration: none;
        }
        .hm-btn-primary:hover { background: #EA580C; transform: translateY(-2px); }
        .hm-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 15px 40px;
          background: transparent;
          color: #FFFFFF;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          border: 1px solid rgba(255,255,255,0.25);
          cursor: pointer;
          transition: border-color 0.3s, background 0.3s, transform 0.2s;
          border-radius: 8px;
          text-decoration: none;
        }
        .hm-btn-secondary:hover { border-color: #F97316; background: rgba(249,115,22,0.1); transform: translateY(-2px); }

        .hm-hero-scroll {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          z-index: 10;
          animation: bounceY 2.5s ease-in-out infinite;
        }
        .hm-hero-scroll span {
          font-size: 9px;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: rgba(249,115,22,0.6);
        }
        .hm-scroll-arrow {
          width: 18px; height: 18px;
          border-right: 1px solid rgba(249,115,22,0.6);
          border-bottom: 1px solid rgba(249,115,22,0.6);
          transform: rotate(45deg);
        }
        @keyframes bounceY { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(8px)} }

        /* STATS */
        .hm-stats {
          background: #F97316;
          position: relative;
          overflow: hidden;
        }
        .hm-stats::before {
          content: '';
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            90deg,
            transparent,
            transparent 120px,
            rgba(255,255,255,0.08) 120px,
            rgba(255,255,255,0.08) 121px
          );
        }
        .hm-stats-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 40px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: rgba(255,255,255,0.15);
          border-left: 1px solid rgba(255,255,255,0.15);
          border-right: 1px solid rgba(255,255,255,0.15);
        }
        .hm-stat {
          padding: 44px 20px;
          text-align: center;
          background: #F97316;
          position: relative;
        }
        .hm-stat-val {
          font-family: 'Playfair Display', serif;
          font-size: 48px;
          font-weight: 700;
          color: white;
          line-height: 1;
          margin-bottom: 8px;
        }
        .hm-stat-label {
          font-size: 10px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.8);
        }

        /* SECTION SHARED */
        .hm-section {
          max-width: 1100px;
          margin: 0 auto;
          padding: 110px 40px;
        }
        .hm-section-header { text-align: center; margin-bottom: 70px; }
        .hm-section-label {
          font-size: 10px;
          letter-spacing: 0.45em;
          text-transform: uppercase;
          color: #F97316;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin-bottom: 18px;
        }
        .hm-section-label::before, .hm-section-label::after {
          content: '';
          width: 36px;
          height: 1px;
          background: rgba(249,115,22,0.4);
        }
        .hm-section-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(38px, 5vw, 64px);
          font-weight: 900;
          line-height: 0.95;
          letter-spacing: -0.02em;
        }
        .hm-section-title .solid { color: #FFFFFF; }
        .hm-section-title .gold { color: #F97316; font-style: italic; }
        .hm-section-sub {
          margin-top: 18px;
          font-size: 15px;
          font-weight: 300;
          color: rgba(255,255,255,0.6);
          max-width: 440px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.85;
        }

        /* MENU CARDS */
        .hm-menu-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px;
          overflow: hidden;
        }
        .hm-menu-card {
          background: #111827;
          position: relative;
          overflow: hidden;
          cursor: default;
          transition: background 0.4s;
        }
        .hm-menu-card:hover { background: #1E293B; }
        .hm-menu-card-img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          filter: contrast(1.05) brightness(0.85);
          transition: transform 0.6s ease, filter 0.4s;
        }
        .hm-menu-card:hover .hm-menu-card-img {
          transform: scale(1.05);
          filter: contrast(1.1) brightness(1);
        }
        .hm-menu-card-body { padding: 28px 26px 32px; }
        .hm-menu-card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 10px;
        }
        .hm-menu-card-name {
          font-family: 'Playfair Display', serif;
          font-size: 18px;
          font-weight: 700;
          color: #FFFFFF;
          line-height: 1.2;
          transition: color 0.3s;
        }
        .hm-menu-card:hover .hm-menu-card-name { color: #F97316; }
        .hm-menu-card-price {
          font-family: 'Playfair Display', serif;
          font-size: 17px;
          font-weight: 700;
          color: #F97316;
          white-space: nowrap;
          margin-left: 10px;
        }
        .hm-menu-card-desc {
          font-size: 13px;
          font-weight: 300;
          color: rgba(255,255,255,0.5);
          line-height: 1.75;
          margin-bottom: 20px;
        }
        .hm-menu-card-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 10px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.6);
          background: transparent;
          border: 1px solid rgba(255,255,255,0.2);
          padding: 9px 18px;
          cursor: pointer;
          border-radius: 4px;
          transition: border-color 0.3s, color 0.3s, background 0.3s;
          font-family: 'DM Sans', sans-serif;
        }
        .hm-menu-card:hover .hm-menu-card-btn {
          border-color: #F97316;
          color: #FFFFFF;
          background: #F97316;
        }
        .hm-menu-card-line {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 2px;
          background: #F97316;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.5s cubic-bezier(0.4,0,0.2,1);
        }
        .hm-menu-card:hover .hm-menu-card-line { transform: scaleX(1); }

        /* WHY CHOOSE US */
        .hm-why-section {
          background: #111827;
          border-top: 1px solid rgba(255,255,255,0.1);
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .hm-why-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .hm-why-img {
          position: relative;
          height: 500px;
        }
        .hm-why-img-main {
          position: absolute;
          top: 0; left: 0;
          width: 78%; height: 80%;
          object-fit: cover;
          border-radius: 8px;
          filter: contrast(1.05);
          border: 1px solid rgba(255,255,255,0.1);
        }
        .hm-why-img-sub {
          position: absolute;
          bottom: 0; right: 0;
          width: 52%; height: 52%;
          object-fit: cover;
          border-radius: 8px;
          filter: contrast(1.05);
          border: 1px solid rgba(249,115,22,0.3);
          box-shadow: -6px -6px 0 rgba(255,255,255,0.05);
        }
        .hm-why-features { display: flex; flex-direction: column; gap: 0; }
        .hm-why-feature {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          padding: 22px 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          cursor: default;
          transition: padding-left 0.3s;
        }
        .hm-why-feature:first-child { border-top: 1px solid rgba(255,255,255,0.05); }
        .hm-why-feature:hover { padding-left: 8px; }
        .hm-why-feature-icon {
          font-size: 28px;
          flex-shrink: 0;
          line-height: 1;
          margin-top: 2px;
          transition: transform 0.3s;
        }
        .hm-why-feature:hover .hm-why-feature-icon { transform: scale(1.2); }
        .hm-why-feature-title {
          font-family: 'Playfair Display', serif;
          font-size: 18px;
          font-weight: 600;
          color: #FFFFFF;
          margin-bottom: 5px;
          transition: color 0.3s;
        }
        .hm-why-feature:hover .hm-why-feature-title { color: #F97316; }
        .hm-why-feature-desc {
          font-size: 13px;
          font-weight: 300;
          color: rgba(255,255,255,0.5);
          line-height: 1.75;
        }

        /* GALLERY */
        .hm-gallery-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px;
          overflow: hidden;
        }
        .hm-gallery-item {
          position: relative;
          overflow: hidden;
          height: 240px;
          cursor: default;
        }
        .hm-gallery-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.75);
          transition: transform 0.6s ease, filter 0.4s;
        }
        .hm-gallery-item:hover .hm-gallery-img {
          transform: scale(1.08);
          filter: brightness(0.9);
        }
        .hm-gallery-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10,15,26,0.9) 0%, transparent 55%);
          opacity: 0;
          transition: opacity 0.4s;
          display: flex;
          align-items: flex-end;
          padding: 20px 22px;
        }
        .hm-gallery-item:hover .hm-gallery-overlay { opacity: 1; }
        .hm-gallery-label {
          font-family: 'Playfair Display', serif;
          font-size: 16px;
          font-weight: 600;
          color: #FFFFFF;
        }
        .hm-gallery-label-line {
          width: 0;
          height: 1px;
          background: #F97316;
          margin-top: 6px;
          transition: width 0.4s;
        }
        .hm-gallery-item:hover .hm-gallery-label-line { width: 30px; }

        /* TESTIMONIALS */
        .hm-testi-section {
          background: #111827;
          border-top: 1px solid rgba(255,255,255,0.1);
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .hm-testi-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px;
          overflow: hidden;
        }
        .hm-testi-card {
          background: #111827;
          padding: 44px 36px;
          position: relative;
          transition: background 0.3s;
        }
        .hm-testi-card:hover { background: #1E293B; }
        .hm-testi-quote {
          font-family: 'Playfair Display', serif;
          font-size: 56px;
          font-weight: 900;
          color: rgba(249,115,22,0.2);
          line-height: 0.8;
          margin-bottom: 18px;
          font-style: italic;
        }
        .hm-testi-stars {
          display: flex;
          gap: 3px;
          margin-bottom: 16px;
        }
        .hm-testi-star { color: #F97316; font-size: 14px; }
        .hm-testi-text {
          font-size: 14px;
          font-weight: 300;
          color: rgba(255,255,255,0.6);
          line-height: 1.85;
          margin-bottom: 24px;
          font-style: italic;
        }
        .hm-testi-divider {
          width: 30px; height: 1px;
          background: rgba(249,115,22,0.5);
          margin-bottom: 14px;
        }
        .hm-testi-name {
          font-family: 'Playfair Display', serif;
          font-size: 15px;
          font-weight: 600;
          color: #FFFFFF;
        }
        .hm-testi-line {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: #F97316;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.5s cubic-bezier(0.4,0,0.2,1);
        }
        .hm-testi-card:hover .hm-testi-line { transform: scaleX(1); }

        /* CTA */
        .hm-cta {
          position: relative;
          overflow: hidden;
          text-align: center;
          padding: 130px 40px;
        }
        .hm-cta-bg {
          position: absolute;
          inset: 0;
          background-image: url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&auto=format&fit=crop');
          background-size: cover;
          background-position: center;
          filter: brightness(0.2) contrast(1.1);
        }
        .hm-cta-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 60% 60% at 50% 50%, rgba(249,115,22,0.15) 0%, transparent 70%);
        }
        .hm-cta-content { position: relative; z-index: 2; max-width: 700px; margin: 0 auto; }
        .hm-cta-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(40px, 6vw, 72px);
          font-weight: 900;
          line-height: 0.95;
          letter-spacing: -0.02em;
          margin-bottom: 22px;
        }
        .hm-cta-title .solid { color: #FFFFFF; display: block; }
        .hm-cta-title .outline {
          color: transparent;
          -webkit-text-stroke: 1.5px #F97316;
          font-style: italic;
          display: block;
        }
        .hm-cta-sub {
          font-size: 15px;
          font-weight: 300;
          color: rgba(255,255,255,0.6);
          margin-bottom: 44px;
          line-height: 1.85;
        }

        @media (max-width: 900px) {
          .hm-stats-inner { grid-template-columns: repeat(2, 1fr); }
          .hm-menu-grid { grid-template-columns: repeat(2, 1fr); }
          .hm-why-grid { grid-template-columns: 1fr; gap: 50px; }
          .hm-gallery-grid { grid-template-columns: repeat(2, 1fr); }
          .hm-testi-grid { grid-template-columns: 1fr; }
          .hm-section { padding: 80px 24px; }
        }
        @media (max-width: 600px) {
          .hm-menu-grid { grid-template-columns: 1fr; }
          .hm-gallery-grid { grid-template-columns: repeat(2, 1fr); }
          .hm-hero-btns { flex-direction: column; align-items: stretch; }
          .hm-btn-primary, .hm-btn-secondary { justify-content: center; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section className="hm-hero">
        <div className="hm-hero-bg" style={{ transform: `scale(1.08) translateY(${scrollY * 0.25}px)` }} />
        <div className="hm-hero-overlay" />
        {/* মেনুর নিচের বর্ডারটি (hm-flame-top) এখান থেকে রিমুভ করা হয়েছে */}
        <div className="hm-hero-content">
          <div className="hm-hero-tag">Iran Grill · Est. 2009 · Rajshahi</div>
          <h1 className="hm-hero-title">
            <span className="t1">Taste the</span>
            <span className="t2">Persian Fire</span>
          </h1>
          <p className="hm-hero-sub">
            24-hour marinated meats. Real charcoal flame. Ancient Persian recipes — served with modern elegance.
          </p>
          <div className="hm-hero-btns">
            <a href="#menu" className="hm-btn-primary">View Our Menu →</a>
            <a href="#reserve" className="hm-btn-secondary">Reserve a Table</a>
          </div>
        </div>
        <div className="hm-hero-scroll">
          <span>Scroll</span>
          <div className="hm-scroll-arrow" />
        </div>
      </section>

      {/* ── STATS ── */}
      <div className="hm-stats">
        <div className="hm-stats-inner">
          {[["500+","Menu Items"],["15K+","Happy Guests"],["20+","Expert Chefs"],["10+","Years of Excellence"]].map(([v, l]) => (
            <div className="hm-stat" key={l}>
              <div className="hm-stat-val">{v}</div>
              <div className="hm-stat-label">{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── MENU ── */}
      <div id="menu">
        <section className="hm-section">
          <div
            className={`hm-section-header reveal ${visibleSections['menu'] ? 'visible' : ''}`}
            ref={addRef('menu')}
          >
            <div className="hm-section-label">Signature Dishes</div>
            <h2 className="hm-section-title">
              <span className="solid">Our Special </span>
              <span className="gold">Menu</span>
            </h2>
            <p className="hm-section-sub">Crafted with passion, grilled with fire — our most beloved dishes await.</p>
          </div>
          <div className="hm-menu-grid">
            {menuItems.map((item, i) => (
              <div className="hm-menu-card" key={item.name}>
                <img className="hm-menu-card-img" src={item.img} alt={item.name} />
                <div className="hm-menu-card-body">
                  <div className="hm-menu-card-top">
                    <div className="hm-menu-card-name">{item.name}</div>
                    <div className="hm-menu-card-price">{item.price}</div>
                  </div>
                  <p className="hm-menu-card-desc">{item.desc}</p>
                  <button className="hm-menu-card-btn">Order Now →</button>
                </div>
                <div className="hm-menu-card-line" />
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ── WHY CHOOSE US ── */}
      <div className="hm-why-section">
        <section className="hm-section">
          <div className="hm-why-grid">
            <div
              className={`hm-why-img reveal-left ${visibleSections['why'] ? 'visible' : ''}`}
              ref={addRef('why')}
            >
              <img className="hm-why-img-main"
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop"
                alt="Chef grilling" />
              <img className="hm-why-img-sub"
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop"
                alt="Restaurant interior" />
            </div>
            <div className={`reveal-right ${visibleSections['why'] ? 'visible' : ''}`}>
              <div className="hm-section-label" style={{ justifyContent: 'flex-start' }}>
                <span style={{ width: 36, height: 1, background: 'rgba(249,115,22,0.4)', display: 'inline-block' }} />
                Our Promise
                <span style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.1)', display: 'inline-block' }} />
              </div>
              <h2 className="hm-section-title" style={{ textAlign: 'left', marginBottom: 32 }}>
                <span className="solid">Why Choose </span>
                <span className="gold">Iran Grill?</span>
              </h2>
              <div className="hm-why-features">
                {whyUs.map((w) => (
                  <div className="hm-why-feature" key={w.title}>
                    <span className="hm-why-feature-icon">{w.icon}</span>
                    <div>
                      <div className="hm-why-feature-title">{w.title}</div>
                      <div className="hm-why-feature-desc">{w.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ── GALLERY ── */}
      <section className="hm-section">
        <div
          className={`hm-section-header reveal ${visibleSections['gallery'] ? 'visible' : ''}`}
          ref={addRef('gallery')}
        >
          <div className="hm-section-label">Visual Story</div>
          <h2 className="hm-section-title">
            <span className="solid">Our </span>
            <span className="gold">Gallery</span>
          </h2>
          <p className="hm-section-sub">A glimpse into our world of flavour, fire, and fine dining.</p>
        </div>
        <div className="hm-gallery-grid">
          {galleryImages.map((g) => (
            <div className="hm-gallery-item" key={g.label}>
              <img className="hm-gallery-img" src={g.img} alt={g.label} />
              <div className="hm-gallery-overlay">
                <div>
                  <div className="hm-gallery-label">{g.label}</div>
                  <div className="hm-gallery-label-line" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <div className="hm-testi-section">
        <section className="hm-section">
          <div
            className={`hm-section-header reveal ${visibleSections['testi'] ? 'visible' : ''}`}
            ref={addRef('testi')}
          >
            <div className="hm-section-label">Guest Reviews</div>
            <h2 className="hm-section-title">
              <span className="solid">What Our </span>
              <span className="gold">Guests Say</span>
            </h2>
          </div>
          <div className="hm-testi-grid">
            {testimonials.map((t) => (
              <div className="hm-testi-card" key={t.name}>
                <div className="hm-testi-line" />
                <div className="hm-testi-quote">"</div>
                <div className="hm-testi-stars">
                  {Array(t.stars).fill(0).map((_, i) => (
                    <span className="hm-testi-star" key={i}>★</span>
                  ))}
                </div>
                <p className="hm-testi-text">{t.review}</p>
                <div className="hm-testi-divider" />
                <div className="hm-testi-name">— {t.name}</div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ── CTA ── */}
      <div id="reserve" className="hm-cta">
        <div className="hm-cta-bg" />
        <div className="hm-cta-overlay" />
        <div
          className={`hm-cta-content reveal ${visibleSections['cta'] ? 'visible' : ''}`}
          ref={addRef('cta')}
        >
          <h2 className="hm-cta-title">
            <span className="solid">Reserve Your</span>
            <span className="outline">Table Today</span>
          </h2>
          <p className="hm-cta-sub">
            Join us for an unforgettable dining experience. Book your table and taste the finest Persian grilled cuisine in Rajshahi.
          </p>
          <a href="#" className="hm-btn-primary" style={{ margin: '0 auto' }}>
            Book a Table →
          </a>
        </div>
      </div>

    </div>
  );
}