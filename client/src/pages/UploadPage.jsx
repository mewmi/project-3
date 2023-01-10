import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { soundAdd } from "../services/sounds";
import UploadForm from "../components/UploadForm";

const UploadPage = () => {
  const initalSound = {
    artist: "",
    title: "",
    category: "",
    genre: "",
    format: "",
    image: "",
  };
  const [sound, setSound] = useState(initalSound);

  const navigate = useNavigate();

  const handleSoundUpload = () => {
    soundAdd(sound).then((data) => {
      const id = data.sound._id;
      navigate(`/sounds/${id}`);
    });
  };
  return (
    <div>
      <UploadForm
        sound={sound}
        onSoundChange={setSound}
        onSoundSubmit={handleSoundUpload}
      />
    </div>
  );
};

export default UploadPage;
