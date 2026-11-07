import "./index.css";

import { Link } from "react-router-dom";

const services = [
  ["🩺", "Find Doctors", "Connect with qualified healthcare professionals."],
  ["📅", "Appointments", "Book and manage your appointments easily."],
  ["👥", "Virtual Queue", "Skip the physical queue with our smart queue system."],
  ["🏥", "Hospitals", "Access trusted hospitals near you."],
  ["🔔", "Notifications", "Get instant updates on your queue and appointments."],
  ["📋", "Health Records", "View your medical history securely."],
];

function Landingpage() {
  return (
    <div className="app">
      <header className="navbar">
        <a className="brand" href="#home">
          <span className="brand-icon">♥</span>
          <span>
            <strong>Queue<span>Less</span></strong>
            <small>Smart Healthcare. No Queue.</small>
          </span>
        </a>

        <nav>
          <a className="active" href="#home">Home</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
<div className="nav-actions">
  <Link to="/login" className="btn btn-outline">
    Login
  </Link>

  <Link to="/register" className="btn btn-primary">
    Sign Up
  </Link>
</div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">SMARTER HEALTHCARE, LESS WAITING</p>
            <h1>Healthcare<br />Without the <span>Waiting.</span></h1>
            <p className="hero-text">
              Book appointments, join virtual queues, and receive real-time
              updates so you can spend less time waiting and more time getting care.
            </p>

            <div className="hero-actions">
              <button className="btn btn-primary btn-large">Book an Appointment <span>→</span></button>
              <button className="btn btn-outline btn-large">Join a Queue</button>
            </div>

            <div className="trust-row">
              <span>✓ Secure & Reliable</span>
              <span>⚡ Fast & Convenient</span>
              <span>♥ Better Care for You</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="image-wrap">
              <img src="/benson.jpg" alt="Healthcare professional" />
            </div>
            <div className="queue-card">
              <div className="queue-check">✓</div>
              <p>Your Queue Status</p>
              <strong>#12</strong>
              <small>Est. Wait Time</small>
              <b>≈ 15 mins</b>
              <button className="notify-btn">🔔 Get Notified</button>
            </div>
          </div>
        </section>

        <section className="how" id="how-it-works">
          <div className="section-heading">
            <p className="eyebrow">SIMPLE & CONVENIENT</p>
            <h2>How <span>QueueLess</span> Works</h2>
            <p>Getting quality healthcare has never been easier.</p>
          </div>

          <div className="steps">
            <div className="step">
              <div className="step-icon">🏥</div>
              <span>01</span>
              <h3>Find a Hospital</h3>
              <p>Locate a hospital or healthcare provider.</p>
            </div>
            <div className="arrow">→</div>
            <div className="step">
              <div className="step-icon">📅</div>
              <span>02</span>
              <h3>Book Appointment</h3>
              <p>Schedule your visit at your convenience.</p>
            </div>
            <div className="arrow">→</div>
            <div className="step">
              <div className="step-icon">📱</div>
              <span>03</span>
              <h3>Join Virtual Queue</h3>
              <p>Get in line digitally and receive updates.</p>
            </div>
          </div>
        </section>

        <section className="services" id="services">
          <div className="section-heading">
            <p className="eyebrow">EVERYTHING IN ONE PLACE</p>
            <h2>Our <span>Services</span></h2>
            <p>Everything you need for a smarter healthcare experience.</p>
          </div>

          <div className="service-grid">
            {services.map(([icon, title, text]) => (
              <article className="service-card" key={title}>
                <div className="service-icon">{icon}</div>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="benefits" id="about">
          <div className="benefit-image">
            <img src="/hero.png" alt="QueueLess healthcare" />
          </div>
          <div className="benefit-copy">
            <p className="eyebrow">A BETTER HEALTHCARE EXPERIENCE</p>
            <h2>Your Time <span>Matters.</span></h2>
            <p>
              Healthcare shouldn't mean spending hours in a waiting room.
              QueueLess helps patients and healthcare providers manage
              appointments and queues more efficiently.
            </p>

            <ul>
              <li>Virtual queue management</li>
              <li>Real-time updates</li>
              <li>Convenient access from anywhere</li>
              <li>A more efficient healthcare system</li>
            </ul>

            <button className="btn btn-primary btn-large">Get Started <span>→</span></button>
          </div>
        </section>

        <section className="cta" id="contact">
          <p className="eyebrow">READY TO GET STARTED?</p>
          <h2>Spend Less Time Waiting.<br /><span>Get More Time for Life.</span></h2>
          <p>Join QueueLess and experience a smarter way to access healthcare.</p>
          <button className="btn btn-light btn-large">Create Your Account →</button>
        </section>
      </main>

      <footer>
        <div className="footer-main">
          <a className="brand footer-brand" href="#home">
            <span className="brand-icon">♥</span>
            <span>
              <strong>Queue<span>Less</span></strong>
              <small>Smart Healthcare. No Queue.</small>
            </span>
          </a>

          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
        <div className="footer-bottom">© 2026 QueueLess. All rights reserved.</div>
      </footer>
    </div>
  );
}

export default Landingpage;
