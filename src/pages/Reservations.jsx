import React from 'react';

const Reservations = () => {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: '#0A0F1A', color: '#FFFFFF', overflowX: 'hidden', minHeight: '100vh' }}>
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=DM+Sans:wght@300;400;500&display=swap');

        .res-container {
          padding: 120px 20px 80px;
          max-width: 800px;
          margin: 0 auto;
        }

        .res-header { text-align: center; margin-bottom: 60px; }
        
        .res-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(36px, 5vw, 52px);
          font-weight: 900;
          color: #FFFFFF;
          margin-bottom: 16px;
        }
        .res-title span { color: #F97316; }
        
        .res-subtitle {
          font-size: 15px;
          color: rgba(255,255,255,0.6);
        }

        .res-card {
          background: #111827;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 16px;
          padding: 40px;
        }

        .res-form-group { display: flex; flex-direction: column; gap: 8px; margin-bottom: 24px; }
        .res-label { color: rgba(255,255,255,0.7); font-size: 13px; margin-left: 4px; }
        
        .res-input {
          background: #0A0F1A;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px;
          padding: 14px 16px;
          color: #FFFFFF;
          width: 100%;
          outline: none;
          transition: border-color 0.3s;
        }
        .res-input:focus { border-color: #F97316; }

        .res-btn {
          width: 100%;
          padding: 16px;
          background: #F97316;
          color: white;
          font-weight: 700;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.3s, transform 0.2s;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-top: 20px;
        }
        .res-btn:hover { background: #EA580C; transform: translateY(-2px); }

        @media (max-width: 768px) {
          .res-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="res-container">
        {/* Header */}
        <div className="res-header">
          <h2 className="res-title">
            Book Your <span>Table</span>
          </h2>
          <p className="res-subtitle">Experience the finest grilling environment. Reserve your spot today.</p>
        </div>

        {/* Reservation Form Card */}
        <div className="res-card">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="res-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              
              {/* Full Name */}
              <div className="res-form-group">
                <label className="res-label">Full Name</label>
                <input type="text" placeholder="Your Name" className="res-input" />
              </div>

              {/* Phone */}
              <div className="res-form-group">
                <label className="res-label">Phone Number</label>
                <input type="tel" placeholder="017xxxxxxxx" className="res-input" />
              </div>

              {/* Date */}
              <div className="res-form-group">
                <label className="res-label">Reservation Date</label>
                <input type="date" className="res-input" />
              </div>

              {/* Time */}
              <div className="res-form-group">
                <label className="res-label">Time Slot</label>
                <select className="res-input" style={{ appearance: 'none' }}>
                  <option className="bg-[#111827]">Lunch (12:00 PM - 03:00 PM)</option>
                  <option className="bg-[#111827]">Evening (05:00 PM - 07:00 PM)</option>
                  <option className="bg-[#111827]">Dinner (08:00 PM - 11:00 PM)</option>
                </select>
              </div>

              {/* Guests */}
              <div className="res-form-group">
                <label className="res-label">Number of Guests</label>
                <input type="number" min="1" placeholder="2" className="res-input" />
              </div>

              {/* Table Preference */}
              <div className="res-form-group">
                <label className="res-label">Table Preference</label>
                <select className="res-input" style={{ appearance: 'none' }}>
                  <option className="bg-[#111827]">Standard Table</option>
                  <option className="bg-[#111827]">Window Side</option>
                  <option className="bg-[#111827]">Outdoor/Terrace</option>
                  <option className="bg-[#111827]">Private Cabin</option>
                </select>
              </div>
            </div>

            {/* Special Request */}
            <div className="res-form-group">
              <label className="res-label">Special Requests (Optional)</label>
              <textarea rows="3" placeholder="Any dietary restrictions or special occasion notes?" className="res-input"></textarea>
            </div>

            {/* Submit Button */}
            <button className="res-btn">Confirm Reservation</button>
          </form>
        </div>

        {/* Footer Note */}
        <p className="text-center" style={{ color: 'rgba(255,255,255,0.4)', marginTop: '30px', fontSize: '13px' }}>
          * You will receive a confirmation call shortly after booking.
        </p>
      </div>
    </div>
  );
};

export default Reservations;