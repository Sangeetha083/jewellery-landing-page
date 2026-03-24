import React, { useState } from 'react';
import {FiShield,
  FiTruck,
  FiRotateCcw,
  FiLock,
  FiGift,
  FiAward} from 'react-icons/fi'
import '../styles/trust.css'
import { useNavigate } from 'react-router-dom';
function Trust() {
    const navigate = useNavigate()
    const [indicators, setIndicators] = useState([
      {
        icon: FiShield,
        title: "Lifetime Guarantee",
        description:
          "Every piece comes with a lifetime warranty against manufacturing defects",
      },
      {
        icon: FiTruck,
        title: "Free Shipping",
        description: "Complimentary insured shipping on all orders worldwide",
      },
      {
        icon: FiRotateCcw,
        title: "30-Day Returns",
        description:
          "Not completely satisfied? Return within 30 days for a full refund",
      },
      {
        icon: FiLock,
        title: "Secure Payment",
        description:
          "Bank-level encryption ensures your payment information is always safe",
      },
      {
        icon: FiGift,
        title: "Luxury Packaging",
        description:
          "Beautiful presentation-ready packaging included with every order",
      },
      {
        icon: FiAward,
        title: "Certified Authentic",
        description:
          "All diamonds and gemstones come with certification of authenticity",
      },
    ]);
    return (
      <section className="trust-section">
        <div className="trust-container">
          <div className="trust-header">
            <p className="trust-label">Why Choose Us</p>
            <h2 className="trust-title">The Promise of Excellence</h2>
            <p className="trust-description">
              Your satisfaction and peace of mind are our top priorities. We
              stand behind every piece with comprehensive guarantees and
              exceptional service
            </p>
          </div>

          <div className="trust-indicators-grid">
            {indicators.map((indicator, index) => (
              <div key={index} className="indicator-card">
                <div className="indicator-icon">
                  <indicator.icon size={24} strokeWidth={1.5} />
                </div>
                <div className="indicator-content">
                  <h3 className="indicator-title">{indicator.title}</h3>
                  <p className="indicator-description">
                    {indicator.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="cta-section">
            <div className="cta-background" />
            <div className="cta-content">
              <h3 className="cta-title">Begin Your Journey with Us</h3>
              <p className="cta-description">
                Experience the difference of working with master jewellers who
                care about every detail. Book a complimentary consultation with
                our experts to find the perfect piece or create something truly
                unique
              </p>
              <div className="cta-buttons">
                <button
                  className="cta-button cta-button-primary"
                  onClick={() => navigate("/book-consultation")}
                >
                  Book Consultation
                </button>
                <button
                  className="cta-button cta-button-secondary"
                  onClick={() => navigate("/contact")}
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Trust;