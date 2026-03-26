import React from 'react';
import { FaChevronDown } from 'react-icons/fa'
import '../styles/home.css'

function Home() {
    return (
      <section className="hero">
        {/* background Image */}
        <div
          className="hero-background"
          style={{
            backgroundImage:
              "url(https://www.vummidi.com/blog/wp-content/uploads/2024/08/Divine-Temple-Jewellery-Set.jpg)",
            filter: "brightness(1.5) contrast(1.1)",
          }}
        ></div>
        {/* overlay */}
        <div className="hero-overlay"></div>
        {/* hero content */}
        <div className="hero-content">
          <div className="hero-text-group">
            <p className="hero-label">Timeless Elegance</p>
            <h1 className="hero-title">
              Exquisite
              <br />
              <span className="hero-title-italic">Craftsmanship</span>
            </h1>
            <p className="hero-description">
              Discover our curated collection of handcrafted jewellery, where
              every piece tells a story of artistry and perfection
            </p>
            <button
              className="hero-button"
              onClick={() => {
                document.getElementById("productShow").scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Explore Collection
            </button>
          </div>
          <button
            className="hero-scroll-button"
            onClick={() => {
              document.getElementById("productShow").scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <FaChevronDown className="hero-scroll-icon" size={32} />
          </button>
        </div>
      </section>
    );
}

export default Home;