import React from "react";
import AwesomeSlider from "react-awesome-slider";

export default function Carousel({ data }) {
  return (
    <AwesomeSlider>
      {data.map((d) => (
        <div className="item" style={{ color: "white" }}>
          <h2>{d.title}</h2>
          <img src={d.img} style={{ width: "30%", height: "30%" }} />
          <p>{d.desc} </p>
        </div>
      ))}
    </AwesomeSlider>
  );
}
