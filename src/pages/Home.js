function Home() {
  return (
    <div className="home-card">
      <h1>HealthCare Appointment Portal</h1>

      <p className="home-desc">
        Welcome to our HealthCare Appointment Portal. You can easily manage and book appointments online. This portal helps patients schedule appointments quickly and securely.
      </p>

      <ul className="feature-list">
        <li> Book an appointment with doctor</li>
        <li> View appointment details</li>
        <li> Delete appointment if needed</li>
      </ul>

      <p className="cta-text">
        👉 Click on <b>Book</b> to schedule your appointment.
      </p>
    </div>
  );
}

export default Home;