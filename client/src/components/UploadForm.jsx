import React from "react";

const UploadForm = ({ upload, onUploadChange, onUploadSubmit }) => {
  const handleUploadFormSubmission = (event) => {
    event.preventDefault();
    onUploadSubmit();
  };

  return (
    <form onSubmit={handleUploadFormSubmission} className="submit">
      <label htmlFor="uploadSound">Upload</label>
      <input
        type="text"
        name="uploadSound"
        id="uploadSound"
        onChange={(event) =>
          onUploadChange({
            ...upload,
            uploadSound: event.target.value,
          })
        }
        value={upload.uploadSound}
      />
      <label htmlFor="author">Author</label>
      <input
        type="text"
        name="author"
        id="author"
        onChange={(event) =>
          onUploadChange({
            ...upload,
            author: event.target.value,
          })
        }
        value={upload.author}
      />
      <button className="uploadButton">Submit sound</button>
    </form>
  );
};

export default UploadForm;
