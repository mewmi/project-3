import React from "react";
import { useState, useEffect } from "react";
import { soundLoadAll } from "../services/sounds";
import SoundList from "../components/SoundList";

const AllSoundPage = () => {
  const [sounds, setSounds] = useState([]);
  useEffect(() => {
    soundLoadAll().then((data) => setSounds(data.sounds));
  });

  return (
    <div>
      <SoundList sounds={sounds} />
    </div>
  );
};

export default AllSoundPage;
