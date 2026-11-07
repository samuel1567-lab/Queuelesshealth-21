import "./appointment.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Appointmentpage() {
  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("queuelessCurrentUser") || "null"
  );

  const [formData, setFormData] = useState({
    fullName: user?.fullName || "",
    email: user?.email || "",
    hospital: "",
    specialty: "",
    doctor: "",
    date: "",
    time: "",
    reason: ""
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const appointments = JSON.parse(
      localStorage.getItem("queuelessAppointments") || "[]"
    );

    const newAppointment = {
      ...formData,
      id: Date.now(),
      status: "Pending"
    };

    appointments.push(newAppointment);

    localStorage.setItem(
      "queuelessAppointments",
      JSON.stringify(appointments)
    );

    alert("Appointment booked successfully!");
    navigate("/dashboard");
  };

  return (
    <div className="appointment-page">

      <header className="appointment-navbar">
        <Link to="/dashboard" className="appointment-brand">
          <span>♥</span> QueueLess
        </Link>

        <Link to="/dashboard" className="back-dashboard">
          ← Back to Dashboard
        </Link>
      </header>

      <main className="appointment-container">

        <div className="appointment-heading">
          <span>QUEUELESS HEALTHCARE</span>
          <h1>Book an Appointment</h1>
          <p>
            Schedule your visit with a healthcare professional.
            Your health deserves timely attention.
          </p>
        </div>

        <form className="appointment-form" onSubmit={handleSubmit}>

          <div className="form-section-title">
            <span>01</span>
            <div>
              <h2>Patient Information</h2>
              <p>Your registered details</p>
            </div>
          </div>

          <div className="appointment-fields">
            <div className="appointment-field">
              <label>Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="appointment-field">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="appointment-divider"></div>

          <div className="form-section-title">
            <span>02</span>
            <div>
              <h2>Appointment Details</h2>
              <p>Choose your preferred healthcare service</p>
            </div>
          </div>

          <div className="appointment-fields">

            <div className="appointment-field">
              <label>Select Hospital</label>
              <select
                name="hospital"
                value={formData.hospital}
                onChange={handleChange}
                required
              >
                <option value="">Choose a hospital</option>
                <option value="Lagos University Teaching Hospital">
                  Lagos University Teaching Hospital
                </option>
                <option value="Lagos State University Teaching Hospital">
                  Lagos State University Teaching Hospital
                </option>
                <option value="Reddington Hospital">
                  Reddington Hospital
                </option>
                <option value="Evercare Hospital">
                  Evercare Hospital
                </option>
              </select>
            </div>

            <div className="appointment-field">
              <label>Medical Specialty</label>
              <select
                name="specialty"
                value={formData.specialty}
                onChange={handleChange}
                required
              >
                <option value="">Choose a specialty</option>
                <option value="General Medicine">General Medicine</option>
                <option value="Cardiology">Cardiology</option>
                <option value="Dentistry">Dentistry</option>
                <option value="Dermatology">Dermatology</option>
                <option value="Paediatrics">Paediatrics</option>
                <option value="Gynaecology">Gynaecology</option>
                <option value="Orthopaedics">Orthopaedics</option>
              </select>
            </div>

            <div className="appointment-field">
              <label>Preferred Doctor</label>
              <select
                name="doctor"
                value={formData.doctor}
                onChange={handleChange}
                required
              >
                <option value="">Select a doctor</option>
                <option value="Any Available Doctor">
                  Any Available Doctor
                </option>
                <option value="Dr. Adebayo">Dr. Adebayo</option>
                <option value="Dr. Okafor">Dr. Okafor</option>
                <option value="Dr. Williams">Dr. Williams</option>
              </select>
            </div>

            <div className="appointment-field">
              <label>Appointment Date</label>
              <input
                type="date"
                name="date"
                min={new Date().toLocaleDateString("en-CA")}
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="appointment-field">
              <label>Preferred Time</label>
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              >
                <option value="">Choose a time</option>
                <option value="09:00 AM">09:00 AM</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="01:00 PM">01:00 PM</option>
                <option value="02:00 PM">02:00 PM</option>
                <option value="03:00 PM">03:00 PM</option>
              </select>
            </div>

          </div>

          <div className="appointment-field reason-field">
            <label>Reason for Visit</label>
            <textarea
              name="reason"
              placeholder="Briefly describe why you need an appointment..."
              value={formData.reason}
              onChange={handleChange}
              rows="4"
              required
            ></textarea>
          </div>

          <div className="appointment-notice">
            <span>ℹ</span>
            Your appointment request will be saved as pending until confirmed.
          </div>

          <button type="submit" className="appointment-submit">
            Confirm Appointment <span>→</span>
          </button>

        </form>
      </main>

      <footer className="appointment-footer">
        © 2026 QueueLess. Smart Healthcare. No Queue.
      </footer>

    </div>
  );
}

export default Appointmentpage;