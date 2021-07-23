import React, { useState, useEffect } from "react";
import "../styles.css";
import Testimonial from "../components/Testimonial";
import AvatarList from "../features/AvatarList";
import arrows from "../arrows.svg";

function TestiList() {
  const [current, setCurrent] = useState(0);
  const [testis, setTestis] = useState([]);
  const [avatarIndex, setAvatarIndex] = useState(0);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await fetch("https://testimonialapi.toolcarton.com/api");
      const response = await result.json();
      console.log(response);
      setTestis(response);
    };
    fetchItems();
  }, []);

  const nextSlide = () => {
    setCurrent(current === testis.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? testis.length - 1 : current - 1);
    console.log(current);
  };

  return (
    <div className="testi-list">
      <h1>TESTIMONIALS</h1>

      {testis.length > 0 &&
        testis.map((element, index) => (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <Testimonial data={element} key={element.id} />
            )}
          </div>
        ))}

      <div className="avtar-cont">
        <AvatarList
          testis={testis}
          avatarIndex={current}
          setCurrent={setCurrent}
        />
        <div className="buttons">
          <div className="right-div">
            <img
              src={arrows}
              id="left-icon"
              alt="arrow-btn"
              onClick={prevSlide}
            />
          </div>
          <div className="right-div">
            <img
              src={arrows}
              id="right-icon"
              alt="arrow-btn"
              onClick={nextSlide}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default TestiList;
