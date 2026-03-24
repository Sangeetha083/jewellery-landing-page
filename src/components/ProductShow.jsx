import React, { useState } from "react";
import '../styles/productshow.css'
import { useNavigate } from "react-router-dom";
function ProductShow() {
  const navigate = useNavigate()
  const [products, setProducts] = useState([
    {
      id: 1,
      category: "Necklaces",
      route: "/necklaces",
      image:
        "https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmVja2xhY2V8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 2,
      category: "Rings",
      route: "/rings",
      image:
        "https://images.unsplash.com/photo-1512163143273-bde0e3cc7407?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJpbmd8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 3,
      category: "Earrings",
      route: "/earrings",
      image:
        "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWFycmluZ3N8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 4,
      category: "Bracelets",
      route: "/bracelets",
      image:
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnJhY2VsZXR8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 5,
      category: "Bangles",
      route: "/bangles",
      image:
        "https://images.unsplash.com/photo-1692249444938-1d39b550a441?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmFuZ2xlfGVufDB8fDB8fHww",
    },
    {
      id: 6,
      category: "Other",
      route: "/allproducts",
      image:
        "https://plus.unsplash.com/premium_photo-1661657759493-f21eb0d67e27?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amV3ZWxsZXJ5JTIwYWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D",
    },
  ]);
  // const [hovered, setHovered] = useState(null);
  return (
    <section id="productShow" className="products-section">
      <div className="products-container">
        {/* title,description */}
        <div className="products-header">
          <p className="products-label">Our Collection</p>
          <h2 className="products-title">Featured Pieces</h2>
          <p className="products-description">
            Each piece in our collection is meticulously crafted to perfection,
            combining timeless design with exceptional quality
          </p>
        </div>

        <div className="products-grid">
          {products.map((ele) => (
            <div
              key={ele.id}
              className="product-card"
              onClick={() => navigate(ele.route)}
              style={{ cursor: "pointer" }}
              // onMouseEnter={() => setHovered(ele.id)}
              // onMouseLeave={() => setHovered(null)}
            >
              <div className="product-image-wrapper">
                <img
                  src={ele.image}
                  alt={ele.category}
                  className="product-image"
                />
                <div className="product-overlay"></div>
                <div className="product-button-container">
                  <button
                    className="product-view-button"
                    onClick={() => navigate(ele.route)}
                  >
                    View More
                  </button>
                </div>
              </div>
              <div className="product-info">
                <p className="product-category">{ele.category}</p>
                <h3 className="product-name">{ele.category}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* footer */}
        <div className="products-footer">
          <button
            className="products-footer-button"
            onClick={() => navigate("/allproducts")}
          >
            View All Collection
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProductShow;
