import React from "react";
import { AiFillStar } from "react-icons/ai";
import "./CardBig.css";

export function Profile() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <h1 style={{ color: "white" }}>Profile</h1>
    </div>
  );
}

export function CardBig(props) {
  return (
    <div className="containerBig">
      <img src={props.img} alt="" className="posterBig" />
      <div className="descriptionBig">
        <div>
          <p id="title">{props.title}</p>
          <p id="genre">{props.genre}</p>
        </div>
        <div>
          <AiFillStar color={props.color} size={props.size} />
          <AiFillStar color={props.color} size={props.size} />
          <AiFillStar color={props.color} size={props.size} />
          <AiFillStar color={props.color} size={props.size} />
          <AiFillStar color={props.color} size={props.size} />
        </div>
      </div>
    </div>
  );
}
