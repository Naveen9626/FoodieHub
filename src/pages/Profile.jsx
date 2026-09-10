import { Link, useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  const savedUser = JSON.parse(
    localStorage.getItem("foodieUser")
  );

  const isLoggedIn =
    localStorage.getItem("isLoggedIn") === "true";

  if (!isLoggedIn || !savedUser) {
    return (
      <section className="profile-empty">
        <h2>Please Login 🔐</h2>
        <p>You need to login to view your profile.</p>

        <Link to="/login">
          Login Now
        </Link>
      </section>
    );
  }

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    alert("Logged out successfully! 👋");
    navigate("/login");
  };

  return (
    <section className="profile-section">

      <div className="profile-heading">
        <p>MY ACCOUNT</p>
        <h1>My Profile 👤</h1>
      </div>

      <div className="profile-card">

        <div className="profile-avatar">
          {savedUser.name.charAt(0).toUpperCase()}
        </div>

        <h2>{savedUser.name}</h2>

        <p className="profile-email">
          📧 {savedUser.email}
        </p>

        <div className="profile-info">
          <div>
            <span>Name</span>
            <strong>{savedUser.name}</strong>
          </div>

          <div>
            <span>Email</span>
            <strong>{savedUser.email}</strong>
          </div>
        </div>

        <div className="profile-actions">

          <Link to="/menu">
            🍽️ Browse Menu
          </Link>

          <button onClick={handleLogout}>
            Logout 🚪
          </button>

        </div>

      </div>

    </section>
  );
}

export default Profile;