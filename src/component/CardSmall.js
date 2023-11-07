import React from "react";
import { AiFillStar } from "react-icons/ai";
import "./CardSmall.css";

export default function CardSmall({ title, genre, img, size, color, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img src={img} alt="" className="photo" />
      <div className="description">
        <div>
          <p id="title">{title}</p>
          <p id="genre">{genre}</p>
        </div>
        <div>
          {[1, 2, 3, 4, 5].map((index) => (
            <AiFillStar key={index} color={color} size={size} />
          ))}
        </div>
      </div>
    </div>
  );
}
