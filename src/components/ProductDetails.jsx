import { FaTimes, FaWhatsapp, FaEnvelope, FaCertificate, FaGem, FaShieldAlt, FaGift } from 'react-icons/fa';
import '../styles/productdetails.css';


function ProductDetails({ product, isOpen, onClose }) {
  if (!isOpen || !product) return null;

  const whatsappNumber = "919876543210";
  const email = "jewellery098@gmail.com";

  const handleWhatsApp = () => {
    const message = `Hi, I'm interested in ${product.title} (₹${product.discountedPrice})`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleEmail = () => {
    const subject = `Inquiry about ${product.title}`;
    const body = `Hi,\n\nI'm interested in learning more about:\n\nProduct: ${product.title}\nPrice: ₹${product.discountedPrice}\n\nPlease provide more details.\n\nThank you!`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const benefits = [
    { icon: <FaGem />, text: "Handcrafted Excellence" },
    { icon: <FaCertificate />, text: "Certified Authentic" },
    { icon: <FaShieldAlt />, text: "Lifetime Warranty" },
    { icon: <FaGift />, text: "Luxury Packaging" }
  ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <FaTimes />
        </button>

        <div className="modal-grid">
          {/* Left: Image */}
          <div className="modal-image-section">
            <img src={product.image} alt={product.title} className="modal-product-image" />
            {product.discount && (
              <span className="modal-discount-badge">-{product.discount}% OFF</span>
            )}
          </div>

          {/* Right: Details */}
          <div className="modal-details-section">
            <div className="modal-category-badge">{product.category}</div>
            <h2 className="modal-product-title">{product.title}</h2>
            
            <div className="modal-price-section">
              <span className="modal-discounted-price">₹{product.discountedPrice}</span>
              <span className="modal-original-price">₹{product.price}</span>
            </div>

            <p className="modal-description">
              A stunning piece from our exclusive collection, crafted with precision and care. 
              This exquisite {product.category.toLowerCase()} jewelry represents the perfect blend 
              of traditional artistry and contemporary design.
            </p>

            {/* Key Benefits */}
            <div className="modal-benefits">
              <h3 className="modal-benefits-title">Premium Features</h3>
              <div className="modal-benefits-grid">
                {benefits.map((benefit, index) => (
                  <div key={index} className="modal-benefit-item">
                    <span className="modal-benefit-icon">{benefit.icon}</span>
                    <span className="modal-benefit-text">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing Note */}
            <div className="modal-pricing-note">
              <p>💎 <strong>Note:</strong> Contact us for detailed pricing, customization options, and exclusive offers.</p>
            </div>

            {/* Contact Buttons */}
            <div className="modal-contact-buttons">
              <button className="modal-whatsapp-btn" onClick={handleWhatsApp}>
                <FaWhatsapp /> WhatsApp Us
              </button>
              <button className="modal-email-btn" onClick={handleEmail}>
                <FaEnvelope /> Email Inquiry
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
