import React from "react";

const SoundContent = ({ sound }) => {
  const { artist, title, category, file } = sound;

  return (
    <div>
      SoundContent
      <h1>{artist}</h1>
      <h3>{title}</h3>
      <h3>{category}</h3>
      <audio controls src={file}></audio>
    </div>
  );
};

export default SoundContent;
