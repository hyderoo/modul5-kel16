import React from "react";
import CardProfile from "../component/CardProfile";
import "./Profile.css";

export default function Profile() {
  const members = [
    {
      name: "Hafiz Hamdani",
      nim: "21120121140106",
      genrefav: "Mystery, History",
      profilePicture: "https://i.pinimg.com/564x/a4/9f/97/a49f971489400228a504506696af3b01.jpg",
    },
    {
      name: "Dhea Anandita Putri",
      nim: "21120121120017",
      genrefav: "Horror",
      profilePicture: "https://i.pinimg.com/564x/7a/5f/fc/7a5ffc9acd618348fe3d9bbeeb8cb0dc.jpg",
    },
    {
      name: "Gregorius Davin",
      nim: "21120121130068",
      genrefav: "Action",
      profilePicture: "https://i.pinimg.com/564x/1a/14/92/1a1492dae31629f7373820b081792dca.jpg",
    },
    {
      name: "Yosafat Dewangga",
      nim: "21120121130070",
      genrefav: "Action",
      profilePicture: "https://i.pinimg.com/564x/da/44/c8/da44c8dfb6b267ccb8e3b415fd8d8e67.jpg",
    },
  ];

  return (
    <div>
      <h1 className="profile-title">Profile Anggota Kelompok</h1>
      <div className="profile-container">
        {members.map((member, index) => (
          <CardProfile
            key={index}
            name={member.name}
            nim={member.nim}
            genrefav={member.genrefav}
            profilePicture={member.profilePicture}
          />
        ))}
      </div>
    </div>
  );
}
