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
  console.log("the sound", sound);

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

/* import React, { useState } from "react";
/* import Head from "next/head"; */
/* import styles from "../styles/Home.module.scss";
import { useNavigate } from "react-router-dom";
import { soundAdd } from "../services/sounds";
import UploadForm from "../components/UploadForm";

export default function Home() {
  /*  const [imageSrc, setImageSrc] = useState(); */
/*   const [sound, setSound] = useState(initalSound);
  const [uploadData, setUploadData] = useState(); */

/**
 * handleOnChange
 * @description Triggers when the file input changes (ex: when a file is selected)
 */

/* function handleOnChange(changeEvent) {
  const reader = new FileReader();

  reader.onload = function (onLoadEvent) {
    setSound(onLoadEvent.target.result);
    setUploadData(undefined);
  };

  reader.readAsDataURL(changeEvent.target.files[0]);
} */

/**
 * handleOnSubmit
 * @description Triggers when the main form is submitted
 */

/* async function handleOnSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const fileInput = Array.from(form.elements).find(
    ({ name }) => name === "file"
  );

  const formData = new FormData();

  for (const file of fileInput.files) {
    formData.append("file", file);
  }

  formData.append("upload_preset", "my-uploads");

  const data = await fetch(
    "https://api.cloudinary.com/v1_1/[Your Cloudinary Cloud Name]/image/upload",
    {
      method: "POST",
      body: formData,
    }
  ).then((r) => r.json());

  setSound(data.secure_url);
  setUploadData(data);
} */

/* return (
  <div className={styles.container}>
    <Head>
      <title>Image Uploader</title>
      <meta name="description" content="Upload your image to Cloudinary!" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
      <h1 className={styles.title}>Image Uploader</h1>

      <p className={styles.description}>Upload your image to Cloudinary!</p>

      <form
        className={styles.form}
        method="post"
        onChange={handleOnChange}
        onSubmit={handleOnSubmit}
      >
        <p>
          <input type="file" name="file" />
        </p>

        <img src={sound} />

        {sound && !uploadData && (
          <p>
            <button>Upload Files</button>
          </p>
        )}

        {uploadData && (
          <code>
            <pre>{JSON.stringify(uploadData, null, 2)}</pre>
          </code>
        )}
      </form>
    </main>

    <footer className={styles.footer}>
      <p>
        Find the tutorial on{" "}
        <a href="https://spacejelly.dev/">spacejelly.dev</a>!
      </p>
    </footer>
  </div>
); */
