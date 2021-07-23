import React from "react";

function Avatar({ avatar, avatarIndex, index, setCurrent }) {
  return (
    <div className="avatar-div">
      <img
        onClick={() => setCurrent(index)}
        className={avatarIndex === index ? "img" : "primary"}
        src={avatar.avatar}
        alt="avatar"
        index={index}
      />
    </div>
  );
}

export default Avatar;
