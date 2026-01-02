import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Book from "./pages/Book";
import "./App.css";
import View from "./pages/View";
import Navbar from "./components/Navbar";

console.log("Home:", Home);
console.log("Book:", Book);
console.log("View:", View);
console.log("Navbar:", Navbar);

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Book />} />
        <Route path="/view" element={<View />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
