import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/allproducts.css";
import { FaStar} from "react-icons/fa";
import Footer from "./Footer";
function Allproducts() {
  const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null);
    const [selectedFilter, setSelectedFilter] = useState("All");
  async function fetchAllData() {
    try {
      setLoading(true);

      const requests = [
        // GOLD
        "gold ring",
        "gold necklace",
        "gold earrings",
        "gold bangle",
        "gold bracelet",

        // DIAMOND
        "diamond ring",
        "diamond necklace",
        "diamond earrings",
        "diamond bangle",
        "diamond bracelet",

        // PEARL
        "pearl ring",
        "pearl necklace",
        "pearl earrings",
        "pearl bangle",
        "pearl bracelet",

        // SILVER
        "silver ring",
        "silver necklace",
        "silver earrings",
        "silver bangle",
        "silver bracelet",
      ];

      const responses = await Promise.all(
        requests.map((query) =>
          fetch(
            `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=6&client_id=${import.meta.env.VITE_UNSPLASH_KEY}`,
          ),
        ),
      );

      const data = await Promise.all(responses.map((res) => res.json()));

      // 🔥 GENERATOR FUNCTION
      const generateProducts = (images, type, startId, category) => {
        return images.map((img, index) => {
          let basePrice = 0;

          // Pricing logic by category
          switch (category) {
            case "Gold":
              basePrice = Math.floor(Math.random() * 5000) + 3000;
              break;
            case "Diamond":
              basePrice = Math.floor(Math.random() * 20000) + 15000;
              break;
            case "Pearl":
              basePrice = Math.floor(Math.random() * 10000) + 7000;
              break;
            case "Silver":
              basePrice = Math.floor(Math.random() * 3000) + 1500;
              break;
            default:
              basePrice = 3000;
          }

          const discount = Math.floor(Math.random() * 30) + 10;

          return {
            id: startId + index,
            category,
            title: `Premium ${type}`,
            image: img.urls.small,
            price: basePrice,
            discount,
            discountedPrice: (basePrice - (basePrice * discount) / 100).toFixed(
              2,
            ),
            rating: {
              rate: (Math.random() * 2 + 3).toFixed(1),
              count: Math.floor(Math.random() * 200) + 20,
            },
          };
        });
      };

      let startId = 1;
      const categories = [
        // GOLD
        ["Gold Ring", "Gold"],
        ["Gold Necklace", "Gold"],
        ["Gold Earrings", "Gold"],
        ["Gold Bangle", "Gold"],
        ["Gold Bracelet", "Gold"],

        // DIAMOND
        ["Diamond Ring", "Diamond"],
        ["Diamond Necklace", "Diamond"],
        ["Diamond Earrings", "Diamond"],
        ["Diamond Bangle", "Diamond"],
        ["Diamond Bracelet", "Diamond"],

        // PEARL
        ["Pearl Ring", "Pearl"],
        ["Pearl Necklace", "Pearl"],
        ["Pearl Earrings", "Pearl"],
        ["Pearl Bangle", "Pearl"],
        ["Pearl Bracelet", "Pearl"],

        // SILVER
        ["Silver Ring", "Silver"],
        ["Silver Necklace", "Silver"],
        ["Silver Earrings", "Silver"],
        ["Silver Bracelet", "Silver"],
      ];

      let allProducts = [];

      data.forEach((dataset, i) => {
        const [type, category] = categories[i];
        const products = generateProducts(
          dataset.results,
          type,
          startId,
          category,
        );
        allProducts = [...allProducts, ...products];
        startId += 100;
      });

      // Shuffle
      const shuffledProducts = allProducts.sort(() => Math.random() - 0.5);

      setProducts(shuffledProducts);
    } catch (error) {
      setError("Failed to load jewellery data");
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchAllData();
  }, []);
    
    const filters = [
      "All",
      "Gold Ring",
      "Diamond Ring",
      "Pearl Ring",
      "Silver Ring",
      "Gold Necklace",
      "Diamond Necklace",
      "Pearl Necklace",
      "Silver Necklace",
      "Gold Bracelet",
      "Diamond Bracelet",
      "Pearl Bracelet",
      "Silver Bracelet",
      "Gold Earrings",
      "Diamond Earrings",
      "Pearl Earrings",
      "Silver Earrings",
      "Gold Bangle",
      "Diamond Bangle",
      "Pearl Bangle",
    ];
    const filteredProducts =
      selectedFilter === "All"
        ? products
        : products.filter((product) => product.title.includes(selectedFilter));
  if (loading) return <h2 style={{ textAlign: "center" }}>Loading Jewellery...</h2>;
  if (error) return <h2 style={{ textAlign: "center", color: "red" }}>{error}</h2>;
    return (
      <div>
        <div
          style={{
            display: "flex",
            overflowX: "auto", // enables horizontal scroll
            whiteSpace: "nowrap", // keeps everything in one line
            gap: "10px",
            padding: "10px 30px",
          }}
        >
          <Link
            to="/"
            className="text-decoration-none back-link"
            style={{
              flex: "0 0 auto", // prevents shrinking
              padding: "8px 2px",
              borderRadius: "20px",
              border: "none",
              cursor: "pointer",
            
              whiteSpace: "nowrap", // keeps button text in one line
            }}
          >
            <div style={{fontSize:'17px'}}>&larr; Back</div>
          </Link>
          {filters.map((filter, index) => (
            <button
              key={index}
              onClick={() => setSelectedFilter(filter)}
              style={{
                flex: "0 0 auto", // prevents shrinking
                padding: "8px 16px",
                borderRadius: "20px",
                border: "none",
                cursor: "pointer",
                background: selectedFilter === filter ? "gold" : "#eee",
                whiteSpace: "nowrap", // keeps button text in one line
              }}
            >
              {filter}
            </button>
          ))}
        </div>
        <section></section>
        <section className="product-grid">
          {filteredProducts.map((ele) => (
            <div key={ele.id} className="product-card">
              <Link to={`/allproducts/${ele.id}`} state={{ product: ele }}>
                <div className="image-wrapper">
                  <span className="discount-badge">-{ele.discount}%</span>
                  <img
                    src={ele.image}
                    alt={ele.title}
                    className="products-image"
                  />
                </div>
              </Link>

              <div className="product-info">
                <h3 className="product-title">{ele.title}</h3>

                <div className="price-section">
                  <span className="discounted-price">
                    ${ele.discountedPrice}
                  </span>
                  <span className="original-price">${ele.price}</span>
                </div>
                <div className="rating-wrapper">
                  <FaStar className="fastar" />
                  <span>
                    {ele.rating.rate} ({ele.rating.count})
                  </span>
                </div>

                <button className="view-btn">View</button>
              </div>
            </div>
          ))}
        </section>
        <Footer />
      </div>
    );
}

export default Allproducts;
