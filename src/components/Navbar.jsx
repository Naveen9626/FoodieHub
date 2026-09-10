import { Link, NavLink, useNavigate } from "react-router-dom";

function Navbar({ cartCount }) {
  const navigate = useNavigate();

  const isLoggedIn =
    localStorage.getItem("isLoggedIn") === "true";

  const savedUser = JSON.parse(
    localStorage.getItem("foodieUser")
  );

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");

    alert("Logged out successfully! 👋");

    navigate("/login");
  };

  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        🍔 FoodieHub
      </Link>

      <div className="nav-links">

        <NavLink to="/">
          Home
        </NavLink>

        <NavLink to="/menu">
          Menu
        </NavLink>

        <NavLink to="/contact">
          Contact
        </NavLink>

        {isLoggedIn && savedUser ? (
          <>
            <NavLink to="/profile">
              👤 Profile
            </NavLink>

            <span className="user-name">
              👋 Hi, {savedUser.name}
            </span>

            <button
              className="logout-btn"
              onClick={handleLogout}
            >
              Logout 🚪
            </button>
          </>
        ) : (
          <NavLink to="/login">
            🔐 Login
          </NavLink>
        )}

        <NavLink to="/cart" className="cart-link">
          🛒 Cart
          <span>{cartCount}</span>
        </NavLink>

      </div>

    </nav>
  );
}

export default Navbar;