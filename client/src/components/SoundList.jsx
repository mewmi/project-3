import React from "react";
import { Link } from "react-router-dom";

const SoundList = ({ sounds }) => {
  return (
    <div>
      {sounds.map((eachSound) => {
        return (
          <div key={eachSound._id}>
            <Link to={`/sounds/${eachSound._id}`}>
              <h1>
                {eachSound.title} ({eachSound.artist})
              </h1>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default SoundList;
