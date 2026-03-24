import React, { useState } from 'react';
import '../styles/testimonials.css'
import {FaStar, FaRegStar, FaStarHalfAlt} from 'react-icons/fa'
function Testimonials() {
    const [testimonials, setTestimonials] = useState([
      {
        id: 1,
        name: "Sarah Mitchell",
        location: "New Delhi, India",
        rating: 5,
        text: "The engagement ring I purchased exceeded all expectations. The craftsmanship is impeccable, and the customer service was exceptional throughout the entire process.",
        image:
          "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      },
      {
        id: 2,
        name: "Michael Chen",
        location: "Banglore, Ka",
        rating: 5,
        text: "I have purchased multiple pieces from this collection for my wife, and each one has been stunning. The attention to detail is remarkable, and the quality is unmatched.",
        image:
          "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      },
      {
        id: 3,
        name: "Emma Thompson",
        location: "London, UK",
        rating: 5,
        text: "A truly exceptional experience from start to finish. The pearl earrings I ordered are absolutely gorgeous and arrived beautifully packaged. This is luxury at its finest.",
        image:
          "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      },
    ]);
    const Rating = ({ value }) => {
      return (
        <div style={{ color: "gold", display: "flex", gap: "4px" }}>
          {[...Array(5)].map((ele, index) => {
            if (index + 1 <= value) {
              return <FaStar key={index} />;
            } else if (index + 0.5 <= value) {
              return <FaStarHalfAlt key={index} />;
            } else {
              return <FaRegStar key={index} />;
            }
          })}
        </div>
      );
    };
    return (
      <section className="testimonials-section">
        <div className="testimonials-container">
          <div className="testimonials-header">
            <p className="testimonials-label">Customer Stories</p>
            <h2 className="testimonials-title">Loved by Thousands</h2>
            <p className="testimonials-description">
              Don't just take our word for it. Hear from our delighted customers
              who have experienced the magic of our jewellery
            </p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-stars ">
                  <Rating value={testimonial.rating}/>
                </div>

                <p className="testimonial-text">"{testimonial.text}"</p>

                <div className="testimonial-author">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="testimonial-author-image"
                  />
                  <div className="testimonial-author-info">
                    <p className="testimonial-author-name">
                      {testimonial.name}
                    </p>
                    <p className="testimonial-author-location">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonials-stats">
            <div className="stats-container">
              <div className="stat-item">
                <p className="stat-number">4.9</p>
                <div className="stat-stars">
                    <Rating value={4.9}/>
                </div>
                <p className="stat-label">Average Rating</p>
              </div>
              <div className="stat-item">
                <p className="stat-number">12K+</p>
                <p className="stat-label">Happy Customers</p>
              </div>
              <div className="stat-item">
                <p className="stat-number">98%</p>
                <p className="stat-label">Would Recommend</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Testimonials;