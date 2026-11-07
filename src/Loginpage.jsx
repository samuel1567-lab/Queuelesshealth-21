
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Loginpage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
  event.preventDefault();

  const savedUser = JSON.parse(
    localStorage.getItem("queuelessUser")
  );

  if (!savedUser) {
    alert("No account found. Please register first.");
    return;
  }

  if (
    savedUser.email === email.toLowerCase() &&
    savedUser.password === password
  ) {
    localStorage.setItem(
      "queuelessCurrentUser",
      JSON.stringify(savedUser)
    );

    alert(`Welcome back, ${savedUser.fullName}!`);
    navigate("/dashboard");
  } else {
    alert("Incorrect email or password.");
  }
};

  return (
    <div className="login-page">
      <div className="login-card">

        <Link to="/" className="login-brand">
          <span className="login-icon">♥</span>
          <span>
            <strong>Queue<span>Less</span></strong>
            <small>Smart Healthcare. No Queue.</small>
          </span>
        </Link>

        <div className="login-heading">
          <h1>Welcome Back!</h1>
          <p>Log in to continue your healthcare journey.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="login-button">
            Log In
          </button>
        </form>

        <p className="login-register">
          Don't have an account?
          <Link to="/register"> Sign Up</Link>
        </p>

        <Link to="/" className="login-home">
          ← Back to Home
        </Link>

      </div>
    </div>
  );
}

export default Loginpage;
