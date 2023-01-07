import React from "react";

const soundUploadForm = ({
  soundUpload,
  onSoundUploadChange,
  onSoundUploadSubmit,
}) => {
  const handleSoundUploadFormSubmission = (event) => {
    event.preventDefault();
    onSoundUploadSubmit();
  };

  return (
    <form onSubmit={handleSoundUploadFormSubmission} className="submit">
      <label htmlFor="sound">Upload</label>
      <input
        type="text"
        name="sound"
        id="sound"
        onChange={(event) =>
          onSoundUploadChange({
            ...soundUpload,
            uploadSound: event.target.value,
          })
        }
        value={soundUpload.sound}
      />
      <label htmlFor="author">Author</label>
      <input
        type="text"
        name="author"
        id="author"
        onChange={(event) =>
          onSoundUploadChange({
            ...soundUpload,
            author: event.target.value,
          })
        }
        value={soundUpload.author}
      />
      <button className="uploadButton">Submit sound</button>
    </form>
  );
};

export default soundUploadForm;
