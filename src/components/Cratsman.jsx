import React, { useState } from 'react';
import { FiAward, FiHeart } from "react-icons/fi";
import { LuGem, LuSparkles } from "react-icons/lu";
import '../styles/craftman.css'
function Cratsman() {
    const [features, setFeatures] = useState ([
      {
        icon: LuGem,
        title: "Premium Materials",
        description:
          "Only the finest diamonds, precious metals, and gemstones sourced from ethical suppliers worldwide",
      },
      {
        icon: LuSparkles,
        title: "Handcrafted Excellence",
        description:
          "Each piece is meticulously crafted by master artisans with decades of experience",
      },
      {
        icon: FiAward,
        title: "Certified Quality",
        description:
          "All our jewellery comes with authenticity certificates and quality guarantees",
      },
      {
        icon: FiHeart,
        title: "Timeless Design",
        description:
          "Classic designs that transcend trends, perfect for heirloom pieces passed through generations",
      },
    ]);
    return (
      <section className="craftsmanship-section">
        <div className="craftsmanship-container">
          <div className="craftsmanship-grid">
            <div className="craftsmanship-text">
              <p className="craftsmanship-label">Our Philosophy</p>
              <h2 className="craftsmanship-title">
                Artistry Meets
                <br />
                <span className="craftsmanship-title-italic">Perfection</span>
              </h2>
              <p className="craftsmanship-paragraph">
                Every piece in our collection is a testament to the art of fine
                jewellery making. Our master craftsmen combine traditional
                techniques passed down through generations with modern precision
                to create pieces that are truly extraordinary.
              </p>
              <p className="craftsmanship-paragraph">
                We believe that jewellery is more than just adornment. It's a
                symbol of love, achievement, and the precious moments that
                define our lives. That's why we pour our hearts into every
                creation.
              </p>
              {/* <button className="craftsmanship-button">
                Learn About Our Process
                <span className="craftsmanship-button-arrow">→</span>
              </button> */}
            </div>

            <div className="craftsmanship-image">
              <div className="craftsmanship-image-wrapper">
                <img
                  src="https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Craftsmanship"
                  className="craftsmanship-image-img"
                />
                <div className="craftsmanship-image-overlay" />
              </div>
              <div className="craftsmanship-stat-box">
                <p className="craftsmanship-stat-number">25+</p>
                <p className="craftsmanship-stat-text">
                  Years of Master Craftsmanship
                </p>
              </div>
            </div>
          </div>

          <div className="craftsmanship-features">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  <feature.icon size={28}  />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}

export default Cratsman;