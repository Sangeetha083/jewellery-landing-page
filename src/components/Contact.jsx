import React, { useState } from "react";
import "../styles/contact.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState("");
  const [loading, setLoading] =useState(false)
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all fields");
      return;
    }
    setLoading(true)
    setSuccess("✅ Message sent successfully!");

    
    setTimeout(() => {
      setLoading(false);
      setSuccess("");

      setFormData({
      name: "",
      email: "",
      message: "",
    });
    }, 3000);
  };

  return (
    <div>
      <div className="contact-container">
        <Link to="/" className="text-decoration-none back-link">
                    <div className="fs-5">&larr; Back</div>
              </Link>
              
        <h2 className="contact-title">Contact Us</h2>

        {/* CONTACT INFO */}
        <div className="contact-info">
          <p>
            <strong>Phone:</strong> +91 XXXXX XXXXX
          </p>
          <p>
            <strong>Email:</strong> info@jewellery.com
          </p>
          <p>
            <strong>Address:</strong> Bangalore, India
          </p>
        </div>

        {/* SUCCESS MESSAGE */}
        {success && <div className="contact-success">{success}</div>}

        {/* FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
          />

          <button type="submit">Send Message</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
