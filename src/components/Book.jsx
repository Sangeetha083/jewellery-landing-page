import React, { useState } from "react";
import "../styles/consultation.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";
function Book() {


  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    jewelleryType: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // FORM VALIDATION
  const validateForm = () => {
    if (!formData.name) return alert("Please enter your name");
    if (!formData.phone) return alert("Please enter phone number");
    if (formData.phone.length < 10) return alert("Phone must be 10 digits");
    if (!formData.email.includes("@")) return alert("Enter valid email");
    if (!formData.date) return alert("Select appointment date");
    if (!formData.time) return alert("Select appointment time");
    if (!formData.jewelleryType) return alert("Select jewellery type");

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const valid = validateForm();
    if (!valid) return;

    setLoading(true);
    setSuccess("✅ Appointment booked successfully!");
    // simulate API request
    setTimeout(() => {
      setLoading(false);
      setSuccess("");

      setFormData({
        name: "",
        phone: "",
        email: "",
        date: "",
        time: "",
        jewelleryType: "",
        message: ""
      });
    }, 3000);
  };

  return (
    <div>
      <div className="consultation-container">
        <Link to="/" className="text-decoration-none back-link">
                    <div className="fs-5">&larr; Back</div>
                  </Link>
        <h2 className="consultation-title">Book Consultation</h2>

        {/* SUCCESS MESSAGE */}
        {success && <div className="success-message">{success}</div>}

        <form className="consultation-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />

          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
          />

          <select
            name="jewelleryType"
            value={formData.jewelleryType}
            onChange={handleChange}
          >
            <option value="">Select Jewellery Type</option>
            <option>Ring</option>
            <option>Necklace</option>
            <option>Bangles</option>
            <option>Bracelets</option>
            <option>Earrings</option>
          </select>

          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
          />

          {/* LOADING BUTTON */}
          <button type="submit" disabled={loading}>
            {loading ? "Booking Appointment..." : "Book Appointment"}
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Book;