import React from "react";

const SoundUploadForm = ({ sound, onSoundChange, onSoundSubmit }) => {
  console.log("the soundUpload props received", sound);
  const handleSoundUploadFormSubmission = (event) => {
    event.preventDefault();
    onSoundSubmit();
  };

  return (
    <form onSubmit={handleSoundUploadFormSubmission} className="submit">
      <label htmlFor="sound">Upload</label>
      <input
        type="text"
        name="sound"
        id="sound"
        onChange={(event) =>
          onSoundChange({
            ...sound,
            uploadSound: event.target.value,
          })
        }
        value={sound.sound}
      />
      <label htmlFor="author">Author</label>
      <input
        type="text"
        name="author"
        id="author"
        onChange={(event) =>
          onSoundChange({
            ...sound,
            author: event.target.value,
          })
        }
        value={sound.author}
      />
      <button className="uploadButton">Submit sound</button>
    </form>
  );
};

export default SoundUploadForm;
