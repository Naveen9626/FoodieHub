import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem(
      "foodieUser",
      JSON.stringify(formData)
    );

    alert("Account created successfully! 🎉");

    navigate("/login");
  };

  return (
    <section className="auth-section">
      <div className="auth-card">

        <div className="auth-logo">🍔</div>

        <h1>Create Account</h1>
        <p>Join FoodieHub today ❤️</p>

        <form onSubmit={handleSubmit}>

          <div className="auth-group">
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

          <div className="auth-group">
            <label>Email Address</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="auth-group">
            <label>Password</label>

            <input
              type="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">
            Create Account 🚀
          </button>

        </form>

        <div className="auth-footer">
          <span>Already have an account?</span>

          <Link to="/login">
            Login
          </Link>
        </div>

      </div>
    </section>
  );
}

export default Signup;