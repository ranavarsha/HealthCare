import { useState, useEffect } from "react";

function View() {
  const [appointment, setAppointment] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("appointment");
    if (data) {
      setAppointment(JSON.parse(data));
    }
  }, []);

  const handleDelete = () => {
    localStorage.removeItem("appointment");
    setAppointment(null); // React way
    alert("Appointment deleted successfully!");
  };

  return (
    <div className="container">
      <h2>View Appointment</h2>

      {appointment ? (
        <div>
          <p><b>Name:</b> {appointment.name || "N/A"}</p>
          <p><b>Age:</b> {appointment.age || "N/A"}</p>
          <p><b>Problem:</b> {appointment.problem || "N/A"}</p>
          <p><b>Date:</b> {appointment.date}</p>
          <p><b>Time:</b> {appointment.time}</p>

          <button
            className="delete-btn"
            onClick={handleDelete}
            style={{ marginTop: "10px", background: "red", color: "white" }}
          >
            Delete Appointment
          </button>
        </div>
      ) : (
        <p>No appointment found.</p>
      )}
    </div>
  );
}

export default View;