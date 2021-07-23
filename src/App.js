import "./styles.css";
import React from "react";
// import Testimonial from "./components/Testimonial";
import TestiList from "./features/TestiList";

export default function App() {
  return (
    <div className="App">
      <h1 id="h1">TESTIMONIALS</h1>
      <div className="testi-container">
        <TestiList />
      </div>
    </div>
  );
}
