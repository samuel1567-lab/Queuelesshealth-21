
import "./queue.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Queuepage() {
  const user = JSON.parse(
    localStorage.getItem("queuelessCurrentUser") || "null"
  );

  const [hospital, setHospital] = useState("");
  const [department, setDepartment] = useState("");

  const [activeQueue, setActiveQueue] = useState(() => {
    const queues = JSON.parse(
      localStorage.getItem("queuelessQueues") || "[]"
    );

    return queues.find(
      (queue) =>
        queue.email === user?.email &&
        queue.status === "Waiting"
    ) || null;
  });

  const handleJoinQueue = (event) => {
    event.preventDefault();

    if (!user) {
      alert("Please log in before joining a queue.");
      return;
    }

    if (activeQueue) {
      alert("You already have an active queue.");
      return;
    }

    const queues = JSON.parse(
      localStorage.getItem("queuelessQueues") || "[]"
    );

    const sameDepartment = queues.filter(
      (queue) =>
        queue.hospital === hospital &&
        queue.department === department &&
        queue.status === "Waiting"
    );

    const newQueue = {
      id: Date.now(),
      fullName: user.fullName,
      email: user.email,
      hospital,
      department,
      queueNumber: sameDepartment.length + 1,
      peopleAhead: sameDepartment.length,
      status: "Waiting",
      joinedAt: new Date().toLocaleString()
    };

    queues.push(newQueue);

    localStorage.setItem(
      "queuelessQueues",
      JSON.stringify(queues)
    );

    setActiveQueue(newQueue);
  };

  const handleLeaveQueue = () => {
    const queues = JSON.parse(
      localStorage.getItem("queuelessQueues") || "[]"
    );

    const updatedQueues = queues.map((queue) =>
      queue.id === activeQueue.id
        ? { ...queue, status: "Left Queue" }
        : queue
    );

    localStorage.setItem(
      "queuelessQueues",
      JSON.stringify(updatedQueues)
    );

    setActiveQueue(null);
    setHospital("");
    setDepartment("");
    alert("You have left the queue.");
  };

  return (
    <div className="queue-page">

      <header className="queue-navbar">
        <Link to="/dashboard" className="queue-brand">
          <span>♥</span> QueueLess
        </Link>

        <Link to="/dashboard" className="queue-back">
          ← Back to Dashboard
        </Link>
      </header>

      <main className="queue-container">

        <div className="queue-heading">
          <span>SMART VIRTUAL QUEUE</span>
          <h1>Join a Hospital Queue</h1>
          <p>
            Join remotely, avoid crowded waiting rooms,
            and keep track of your place in line.
          </p>
        </div>

        {activeQueue ? (
          <section className="queue-ticket">

            <div className="ticket-top">
              <span className="ticket-check">✓</span>
              <span className="ticket-status">YOU ARE IN THE QUEUE</span>
            </div>

            <h2>Your Queue Ticket</h2>

            <div className="queue-number">
              {String(activeQueue.queueNumber).padStart(3, "0")}
            </div>

            <p className="queue-number-label">YOUR QUEUE NUMBER</p>

            <div className="ticket-details">
              <div>
                <span>Hospital</span>
                <strong>{activeQueue.hospital}</strong>
              </div>

              <div>
                <span>Department</span>
                <strong>{activeQueue.department}</strong>
              </div>

              <div>
                <span>People ahead of you</span>
                <strong>{activeQueue.peopleAhead}</strong>
              </div>

              <div>
                <span>Status</span>
                <strong className="waiting-status">
                  {activeQueue.status}
                </strong>
              </div>
            </div>

            <p className="ticket-note">
              Your queue ticket is saved in this browser.
              Please keep it available when you arrive.
            </p>

            <button
              className="leave-queue-button"
              onClick={handleLeaveQueue}
            >
              Leave Queue
            </button>

          </section>
        ) : (
          <form className="queue-form" onSubmit={handleJoinQueue}>

            <div className="queue-form-heading">
              <span>01</span>
              <div>
                <h2>Choose Your Hospital</h2>
                <p>Select where you want to receive care.</p>
              </div>
            </div>

            <label htmlFor="hospital">Hospital</label>
            <select
              id="hospital"
              value={hospital}
              onChange={(event) => setHospital(event.target.value)}
              required
            >
              <option value="">Select a hospital</option>
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

            <div className="queue-form-heading department-heading">
              <span>02</span>
              <div>
                <h2>Choose a Department</h2>
                <p>Select the service you need.</p>
              </div>
            </div>

            <label htmlFor="department">Department</label>
            <select
              id="department"
              value={department}
              onChange={(event) => setDepartment(event.target.value)}
              required
            >
              <option value="">Select a department</option>
              <option value="General Medicine">General Medicine</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Dentistry">Dentistry</option>
              <option value="Dermatology">Dermatology</option>
              <option value="Paediatrics">Paediatrics</option>
              <option value="Gynaecology">Gynaecology</option>
              <option value="Orthopaedics">Orthopaedics</option>
            </select>

            <div className="queue-information">
              <span>ℹ</span>
              Joining creates a queue ticket in this browser.
              The displayed queue number is a demonstration,
              not a live hospital queue position.
            </div>

            <button type="submit" className="join-queue-submit">
              Join Virtual Queue <span>→</span>
            </button>

          </form>
        )}

      </main>

      <footer className="queue-footer">
        © 2026 QueueLess. Smart Healthcare. No Queue.
      </footer>

    </div>
  );
}

export default Queuepage;
