import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <p className="hero-tag">🔥 FRESH & DELICIOUS</p>

        <h1>
          Good Food.
          <br />
          Good Mood. ❤️
        </h1>

        <p className="hero-description">
          Enjoy delicious meals made with fresh ingredients,
          prepared with love and delivered straight to your doorstep.
        </p>

        <div className="hero-buttons">
          <Link to="/menu" className="hero-btn">
            Explore Menu 🍽️
          </Link>

          <Link to="/contact" className="hero-secondary-btn">
            Contact Us 📞
          </Link>
        </div>

        <div className="hero-features">
          <div>
            <strong>🚀 Fast Delivery</strong>
            <span>Quick & reliable</span>
          </div>

          <div>
            <strong>🥗 Fresh Food</strong>
            <span>Quality ingredients</span>
          </div>

          <div>
            <strong>❤️ Best Taste</strong>
            <span>Made with love</span>
          </div>
        </div>

      </div>

      <div className="hero-image">
        <div className="food-circle">
          🍔
        </div>
      </div>

    </section>
  );
}

export default Hero;