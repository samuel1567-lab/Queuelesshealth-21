
import "./registration.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Registrationpage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const existingUser = JSON.parse(
      localStorage.getItem("queuelessUser")
    );

    if (
      existingUser &&
      existingUser.email === formData.email.toLowerCase()
    ) {
      alert("This email is already registered. Please log in.");
      return;
    }

    const user = {
      fullName: formData.fullName,
      email: formData.email.toLowerCase(),
      phone: formData.phone,
      password: formData.password
    };

    localStorage.setItem("queuelessUser", JSON.stringify(user));

    alert("Registration successful! Please log in.");
    navigate("/login");
  };

  return (
    <div className="register-page">
      <div className="register-card">

        <Link to="/" className="register-brand">
          <span className="register-icon">♥</span>
          <span>
            <strong>Queue<span>Less</span></strong>
            <small>Smart Healthcare. No Queue.</small>
          </span>
        </Link>

        <div className="register-heading">
          <h1>Create Your Account</h1>
          <p>Join QueueLess and enjoy smarter healthcare.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Create a password"
            value={formData.password}
            onChange={handleChange}
            minLength={8}
            required
          />

          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange}
            minLength={8}
            required
          />

          <button type="submit" className="register-button">
            Create Account
          </button>
        </form>

        <p className="register-login">
          Already have an account?
          <Link to="/login"> Log in</Link>
        </p>

        <Link to="/" className="register-home">
          ← Back to Home
        </Link>

      </div>
    </div>
  );
}

export default Registrationpage;
