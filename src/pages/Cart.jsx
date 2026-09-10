import { Link } from "react-router-dom";

function Cart({ cart, setCart }) {

  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <section className="cart-page">

      <div className="cart-heading">
        <p>YOUR ORDER</p>
        <h1>Your Cart 🛒</h1>
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <div>🛒</div>
          <h2>Your cart is empty</h2>
          <p>Add some delicious food to get started.</p>

          <Link to="/menu">
            Browse Menu 🍽️
          </Link>
        </div>
      ) : (
        <div className="cart-container">

          <div className="cart-items">

            {cart.map((item) => (
              <div className="cart-product" key={item.id}>

                <div className="cart-product-image">
                  {item.emoji}
                </div>

                <div className="cart-product-info">
                  <h3>{item.name}</h3>
                  <p>{item.category}</p>
                  <strong>₹{item.price}</strong>
                </div>

                <div className="quantity-control">

                  <button
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => increaseQuantity(item.id)}
                  >
                    +
                  </button>

                </div>

                <div className="cart-product-total">
                  <strong>
                    ₹{item.price * item.quantity}
                  </strong>

                  <button
                    className="remove-btn"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>

              </div>
            ))}

          </div>

          <div className="cart-summary">

            <h2>Order Summary</h2>

            <div className="summary-row">
              <span>Items</span>
              <span>{cart.length}</span>
            </div>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{totalPrice}</span>
            </div>

            <div className="summary-row">
              <span>Delivery</span>
              <span>FREE</span>
            </div>

            <hr />

            <div className="summary-total">
              <span>Total</span>
              <strong>₹{totalPrice}</strong>
            </div>

            <Link to="/checkout" className="checkout-btn">
              Proceed to Checkout 💳
            </Link>

          </div>

        </div>
      )}

    </section>
  );
}

export default Cart;