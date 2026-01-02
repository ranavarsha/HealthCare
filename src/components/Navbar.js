import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#000000cf" }}>
      <Link to="/" style={{ marginRight: "15px" }}>Home</Link>
      <Link to="/book" style={{ marginRight: "15px" }}>Book</Link>
      <Link to="/view">View</Link>
    </nav>
  );
}
