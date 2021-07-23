import React from "react";

function Testimonial({ data, key }) {
  return (
    <div className="testi" key={key}>
      <h2>{data.message}</h2>
      <h3>{data.lorem}</h3>
      <div className="testi-desi">
        <span>{data.location}</span>
        <p>{data.designation}</p>
      </div>
    </div>
  );
}

export default Testimonial;
