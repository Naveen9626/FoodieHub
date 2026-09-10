import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-about">
          <h2>🍔 FoodieHub</h2>
          <p>
            Delicious food, fresh ingredients and
            fast delivery — all in one place.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/cart">Cart</Link>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>📞 +91 98765 43210</p>
          <p>📧 hello@foodiehub.com</p>
          <p>📍 Chennai, Tamil Nadu</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 FoodieHub. All rights reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;