import React, { useEffect, useState } from "react";
import "../styles/jewellery.css";
import Footer from "./Footer";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
function JewelleryPage({ title, queries }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Shuffle function
  const shuffleArray = (arr) => {
    return [...arr].sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    fetchJewellery();
  }, []);

  async function fetchJewellery() {
    try {
      setLoading(true);

      const responses = await Promise.all(
        queries.map((query) =>
          fetch(
            `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
              query,
            )}&per_page=8&client_id=${import.meta.env.VITE_UNSPLASH_KEY}`,
          ),
        ),
      );

      const data = await Promise.all(responses.map((res) => res.json()));

      let startId = 1;
      let allProducts = [];

      data.forEach((dataset, i) => {
        dataset.results.forEach((img) => {
          const price = Math.floor(Math.random() * 10000) + 3000;
          const discount = Math.floor(Math.random() * 30) + 10;

          const discountedPrice = (price - (price * discount) / 100).toFixed(2);

          const rating = {
            rate: (Math.random() * 2 + 3).toFixed(1),
            count: Math.floor(Math.random() * 200) + 20,
          };

          allProducts.push({
            id: startId++,
            title: `Premium ${queries[i]}`,
            image: img.urls.small,
            price,
            discount,
            discountedPrice,
            rating,
          });
        });
      });

      setProducts(shuffleArray(allProducts));
    } catch (error) {
      console.log("Error loading jewellery");
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <h2 className="loading-text">Loading {title}...</h2>;

    return (
      <div>
        <div className="jewellery-container">
          <Link to="/" className="text-decoration-none back-link">
            <div className="fs-5">&larr; Back</div>
          </Link>
          <h2 className="jewellery-title">{title}</h2>

          <div className="jewellery-grid">
            {products.map((p) => (
              <div key={p.id} className="jewellery-card">
                <div className="image-wrapper">
                  <span className="discount-badge">-{p.discount}%</span>

                  <img
                    src={p.image}
                    alt={p.title}
                    className="jewellery-image"
                  />
                </div>

                <div className="jewellery-info">
                  <h4 className="jewellery-name">{p.title}</h4>

                  <div className="price-section">
                    <span className="discounted-price">
                      ₹{p.discountedPrice}
                    </span>

                    <span className="original-price">₹{p.price}</span>
                  </div>

                  <div className="rating-wrapper">
                    <FaStar className="fastar" />
                    <span>
                      {p.rating.rate} ({p.rating.count})
                    </span>
                  </div>

                  <button className="jewellery-btn">View</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
}

export default JewelleryPage;
