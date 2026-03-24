import {
  FaPhone,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import {Link} from 'react-router-dom'
import { MdEmail } from "react-icons/md";
import '../styles/footer.css'
function Footer() {
  return (
    <footer className="bg-dark text-light pt-5">
      <div className="container">
        <div className="row mb-4">
          {/* Column 1 */}
          <div className="col-md-3 mb-4 me-5">
            <Link to="/" className="footer-link">
              <h4 className="mb-3">Exquisite Craftsmanship</h4>
            </Link>
            <p className="text-secondary small">
              Crafting timeless elegance since 1985. Each piece tells a story of
              passion, precision, and perfection.
            </p>
          </div>

          {/* Column 2 */}
          <div className="col-md-3 mb-4 ms-5">
            <h5 className="mb-3">SHOP</h5>
            <ul className="list-unstyled text-secondary small">
              <Link to="/rings" className="mb-2 footer-link">
                <li className="mb-2">Rings</li>
              </Link>
              <Link to="/necklaces" className="mb-2 footer-link">
                <li className="mb-2">Necklaces</li>
              </Link>
              <Link to="/earrings" className="mb-2 footer-link">
                <li className="mb-2">Earrings</li>
              </Link>
              <Link to="/bracelets" className="mb-2 footer-link">
                <li className="mb-2">Bracelets</li>
              </Link>
              <Link to="/allproducts" className="mb-2 footer-link">
                <li className="mb-2">All</li>
              </Link>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-md-3 mb-4">
            <h5 className="mb-3">CONTACT</h5>
            <ul className="list-unstyled text-secondary small">
              <li className="d-flex align-items-center mb-2">
                <FaPhone className="me-2" />
                +91 1234567890
              </li>
              <li className="d-flex align-items-center mb-2">
                <MdEmail className="me-2" />
                info@exquisite.com
              </li>
              <li className="d-flex align-items-start">
                <FaMapMarkerAlt className="me-2 mt-1" />
                <span>
                  123 Diamond Avenue <br />
                  New Delhi, India 560060
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-top border-secondary pt-3 pb-3 d-flex flex-column flex-md-row justify-content-between align-items-center">
          <p className="mb-2 mb-md-0 text-secondary small">
            © 2026 Exquisite Craftsmanship. All rights reserved.
          </p>

          <div>
            <Link
              to="www.instagram.com"
              className="text-light me-3 social-icon"
            >
              <FaInstagram size={20} />
            </Link>
            <Link
              to="www.facebook.com"
              className="text-light me-3 social-icon"
            >
              <FaFacebook size={20} />
            </Link>
            <Link to="www.twitter.com" className="text-light social-icon">
              <FaTwitter size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
