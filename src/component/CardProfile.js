import React from "react";
import "./CardProfile.css";

export default function CardProfile({
  name,
  nim,
  profilePicture,
  genrefav = "",
}) {
  return (
    <div className="card-profile">
      <img src={profilePicture} alt={name} className="card-profile-picture" />
      <div className="card-profile-content">
        <h3>{name}</h3>
        <p>{nim}</p>
        <p>{genrefav}</p>
      </div>
    </div>
  );
}