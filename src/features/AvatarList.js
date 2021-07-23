import React from "react";
import Avatar from "../components/Avatar";

function AvatarList({ testis, avatarIndex, setCurrent }) {
  return (
    <div className="avatar-list">
      {testis.map((element, index) => (
        <Avatar
          avatar={element}
          avatarIndex={avatarIndex}
          index={index}
          setCurrent={setCurrent}
        />
      ))}
    </div>
  );
}

export default AvatarList;
