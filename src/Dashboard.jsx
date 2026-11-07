
import "./dashboard.css";
import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
    const navigate = useNavigate();

    const user = JSON.parse(
        localStorage.getItem("queuelessCurrentUser") || "null"
    );

    const appointments = JSON.parse(
        localStorage.getItem("queuelessAppointments") || "[]"
    );

    const handleLogout = () => {
        localStorage.removeItem("queuelessCurrentUser");
        navigate("/login");
    };

    const handleComingSoon = () => {
        alert("This feature is coming soon!");
    };

    return (
        <div className="dashboard-page">

            <header className="dashboard-navbar">
                <Link to="/" className="dashboard-brand">
                    <span className="dashboard-logo">♥</span>
                    <span>Queue<span>Less</span></span>
                </Link>

                <div className="dashboard-nav-actions">
                    <span className="portal-label">Patient Portal</span>
                    <button onClick={handleLogout} className="logout-button">
                        Logout ↗
                    </button>
                </div>
            </header>

            <main className="dashboard-content">

                <section className="welcome-section">
                    <div className="welcome-text">
                        <span className="welcome-label">PATIENT DASHBOARD</span>
                        <h1>Welcome back, {user?.fullName || "Patient"}!</h1>
                        <p>
                            Your health matters. Manage your appointments,
                            queue and health information all in one place.
                        </p>
                    </div>

                    <div className="welcome-icon">♥</div>
                </section>

                {/* DASHBOARD STATISTICS */}
                <section className="dashboard-stats">

                    <div className="stat-card">
                        <div className="stat-top">
                            <span className="stat-icon">📅</span>
                            <span className="stat-tag">Appointments</span>
                        </div>
                        <h2>{appointments.length}</h2>
                        <p>Upcoming appointments</p>
                    </div>

                    <div className="stat-card">
                        <div className="stat-top">
                            <span className="stat-icon">⏳</span>
                            <span className="stat-tag">Virtual Queue</span>
                        </div>
                        <h2>--</h2>
                        <p>No active queue</p>
                    </div>

                    <div className="stat-card">
                        <div className="stat-top">
                            <span className="stat-icon">🏥</span>
                            <span className="stat-tag">Health Records</span>
                        </div>
                        <h2>0</h2>
                        <p>Saved health records</p>
                    </div>

                </section>

                {/* MY APPOINTMENTS */}
                <section className="my-appointments">

                    <div className="section-heading">
                        <span className="section-label">YOUR BOOKINGS</span>
                        <h2>My Appointments</h2>
                        <p>Keep track of your upcoming healthcare visits.</p>
                    </div>

                    {appointments.length === 0 ? (
                        <div className="empty-appointments">
                            <span>📅</span>
                            <h3>No appointments yet</h3>
                            <p>Your booked appointments will appear here.</p>
                        </div>
                    ) : (
                        <div className="appointments-list">
                            {appointments.map((appointment) => (
                                <div className="appointment-item" key={appointment.id}>

                                    <div className="appointment-date-icon">
                                        📅
                                    </div>

                                    <div className="appointment-item-details">
                                        <h3>{appointment.specialty}</h3>
                                        <p>{appointment.hospital}</p>
                                        <p>Doctor: {appointment.doctor}</p>
                                        <p>
                                            {new Date(
                                                appointment.date + "T00:00:00"
                                            ).toLocaleDateString("en-NG", {
                                                day: "numeric",
                                                month: "long",
                                                year: "numeric"
                                            })}
                                            {" · "}
                                            {appointment.time}
                                        </p>
                                    </div>

                                    <span className="appointment-status">
                                        {appointment.status}
                                    </span>

                                </div>
                            ))}
                        </div>
                    )}

                </section>

                {/* QUICK ACTIONS */}
                <section className="quick-actions">

                    <div className="section-heading">
                        <div>
                            <span className="section-label">GET STARTED</span>
                            <h2>Your Quick Actions</h2>
                            <p>What would you like to do today?</p>
                        </div>
                    </div>

                    <div className="action-grid">

                        <div className="action-card">
                            <span className="action-icon">📅</span>
                            <h3>Book an Appointment</h3>
                            <p>
                                Schedule a visit with a qualified healthcare
                                professional.
                            </p>
                            <button onClick={() => navigate("/appointments")}>
                                Book Appointment <span>→</span>
                            </button>
                        </div>

                        <div className="action-card">
                            <span className="action-icon">⏱️</span>
                            <h3>Join a Virtual Queue</h3>
                            <p>
                                Join a hospital queue remotely and reduce
                                physical waiting time.
                            </p>
                            <button onClick={() => navigate("/queue")}>
                                Join Queue <span>→</span>
                            </button>
                        </div>

                        <div className="action-card">
                            <span className="action-icon">📋</span>
                            <h3>Health Records</h3>
                            <p>
                                Keep track of your medical information
                                in one secure place.
                            </p>
                            <button onClick={handleComingSoon}>
                                View Records <span>→</span>
                            </button>
                        </div>

                        <div className="action-card">
                            <span className="action-icon">🔔</span>
                            <h3>Notifications</h3>
                            <p>
                                Stay informed about appointments and
                                queue updates.
                            </p>
                            <button onClick={handleComingSoon}>
                                View Notifications <span>→</span>
                            </button>
                        </div>

                    </div>
                </section>

            </main>

            {/* FOOTER */}
            <footer className="dashboard-footer">
                <div className="footer-content">

                    <div className="footer-brand">
                        <h2>♥ QueueLess</h2>
                        <p>Smart Healthcare. No Queue.</p>
                        <span>
                            Making healthcare access easier, faster, and more convenient.
                        </span>
                    </div>

                    <div className="footer-links">
                        <h3>Quick Links</h3>
                        <Link to="/">Home</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Sign Up</Link>
                    </div>

                    <div className="footer-links">
                        <h3>Our Services</h3>
                        <a href="#appointments">Appointments</a>
                        <a href="#virtual-queue">Virtual Queue</a>
                        <a href="#health-records">Health Records</a>
                    </div>

                    <div className="footer-contact">
                        <h3>Contact Us</h3>
                        <p>Email: support@queueless.com</p>
                        <p>Phone: +234 800 000 0000</p>
                        <p>Nigeria</p>
                    </div>

                </div>

                <div className="footer-bottom">
                    <p>© 2026 QueueLess. All rights reserved.</p>
                    <p>Designed to make healthcare better.</p>
                </div>
            </footer>

        </div>
    );
}

export default Dashboard;
