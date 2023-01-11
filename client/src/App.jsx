import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import DeletePage from "./pages/DeletePage";
import EditPage from "./pages/EditPage";
import HomePage from "./pages/HomePage";
import SingleSoundPage from "./pages/SingleSoundPage";
import UploadPage from "./pages/UploadPage";
import ProfilePage from "./pages/ProfilePage";
import AllSoundPage from "./pages/AllSoundPage";
import LogIn from "./pages/LogIn";

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        {/*Home page*/}
        <Route path="/" element={<HomePage />} />
        {/*SingleSound page*/}
        <Route path="/sounds/:id" element={<SingleSoundPage />} />
        {/*AllSounds page*/}
        <Route path="/sounds" element={<AllSoundPage />} />
        {/*Upload page*/}
        <Route path="/new-upload" element={<UploadPage />} />
        {/* Edit page*/}
        <Route path="/sounds/:id/edit" element={<EditPage />} />
        {/*Delete page*/}
        <Route path="/sounds/:id/delete" element={<DeletePage />} />
        {/*Profile page*/}
        <Route path="/profile" element={<ProfilePage />} />
        {/*Login page*/}
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </div>
  );
};

export default App;
