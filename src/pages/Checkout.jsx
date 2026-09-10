import { useState } from "react";
import { Link } from "react-router-dom";

function Checkout({ cart, setCart }) {
  const [orderPlaced, setOrderPlaced] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setOrderPlaced(true);
    setCart([]);
  };

  if (cart.length === 0 && !orderPlaced) {
    return (
      <section className="checkout-empty">
        <div className="checkout-empty-icon">🛒</div>
        <h2>Your cart is empty</h2>
        <p>Add some delicious food before checkout.</p>

        <Link to="/menu">
          Browse Menu 🍽️
        </Link>
      </section>
    );
  }

  if (orderPlaced) {
    return (
      <section className="order-success">
        <div className="success-icon">✓</div>

        <h1>Order Placed Successfully! 🎉</h1>

        <p>
          Thank you, <strong>{formData.name}</strong> ❤️
        </p>

        <p>Your delicious food is being prepared.</p>

        <Link to="/menu">
          Continue Shopping 🍽️
        </Link>
      </section>
    );
  }

  return (
    <section className="checkout-section">

      <div className="checkout-heading">
        <p>ORDER NOW</p>
        <h1>Checkout 💳</h1>
        <span>Complete your order and enjoy your meal ❤️</span>
      </div>

      <div className="checkout-container">

        {/* Customer Details */}

        <div className="checkout-form">

          <h2>Delivery Details 📍</h2>

          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label>Full Name</label>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>

              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Delivery Address</label>

              <textarea
                name="address"
                placeholder="Enter your complete delivery address"
                value={formData.address}
                onChange={handleChange}
                rows="5"
                required
              />
            </div>

            <button type="submit" className="place-order-btn">
              Place Order 🍽️
            </button>

          </form>
        </div>


        {/* Order Summary */}

        <div className="order-summary">

          <h2>Your Order 🛒</h2>

          <div className="checkout-items">

            {cart.map((item) => (
              <div className="checkout-item" key={item.id}>

                <div className="checkout-item-image">
                  {item.emoji}
                </div>

                <div className="checkout-item-info">
                  <h3>{item.name}</h3>

                  <p>
                    ₹{item.price} × {item.quantity}
                  </p>
                </div>

                <strong>
                  ₹{item.price * item.quantity}
                </strong>

              </div>
            ))}

          </div>

          <hr />

          <div className="checkout-total">
            <span>Total Amount</span>

            <strong>₹{totalPrice}</strong>
          </div>

          <div className="secure-payment">
            🔒 Secure & Safe Checkout
          </div>

        </div>

      </div>

    </section>
  );
}

export default Checkout;