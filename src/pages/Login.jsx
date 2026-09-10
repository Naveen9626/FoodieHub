import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(
      localStorage.getItem("foodieUser")
    );

    if (!savedUser) {
      setError("Account not found. Please signup first.");
      return;
    }

    if (
      email === savedUser.email &&
      password === savedUser.password
    ) {
      localStorage.setItem("isLoggedIn", "true");

      alert("Login successful! 🎉");

      navigate("/");
    } else {
      setError("Invalid email or password ❌");
    }
  };

  return (
    <section className="auth-section">
      <div className="auth-card">

        <div className="auth-logo">🍔</div>

        <h1>Welcome Back!</h1>

        <p>Login to your FoodieHub account</p>

        {error && (
          <div className="auth-error">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>

          <div className="auth-group">
            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
              required
            />
          </div>

          <div className="auth-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              required
            />
          </div>

          <button type="submit">
            Login 🔐
          </button>

        </form>

        <div className="auth-footer">
          <span>Don't have an account?</span>

          <Link to="/signup">
            Create Account
          </Link>
        </div>

      </div>
    </section>
  );
}

export default Login;