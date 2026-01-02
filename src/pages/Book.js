import { useState } from "react";
import {  useNavigate } from "react-router-dom";
function Book() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [problem, setProblem] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Validation
    if (!name || !age || !problem || !date || !time) {
      alert("Please fill all fields");
      return;
    }

    if (age <= 0) {
      alert("Age must be greater than 0");
      return;
    }

    const appointment = {
      name,
      age,
      problem,
      date,
      time,
    };

    localStorage.setItem("appointment", JSON.stringify(appointment));
    alert("Appointment booked successfully!");
    navigate("/view");

    // Clear form
    setName("");
    setAge("");
    setProblem("");
    setDate("");
    setTime("");
  };

  return (
    <div className="container">
      <h2>Book Appointment</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Patient Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <textarea
          placeholder="Problem description"
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />

        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
}

export default Book;