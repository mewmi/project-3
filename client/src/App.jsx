import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import DeletePage from "./pages/DeletePage";
import EditPage from "./pages/EditPage";
import HomePage from "./pages/HomePage";
import SingleSoundPage from "./pages/SingleSoundPage";
import UploadPage from "./pages/UploadPage";
import ProfilePage from "./pages/ProfilePage";

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        {/*Home page*/}
        <Route path="/" element={<HomePage />} />
        {/*SingleSound page*/}
        <Route path="/sounds/:id" element={<SingleSoundPage />} />
        {/*Upload page*/}
        <Route path="/sounds" element={<UploadPage />} />
        {/* Edit page*/}
        <Route path="/sounds/:id/edit" element={<EditPage />} />
        {/*Delete page*/}
        <Route path="/sounds/:id/delete" element={<DeletePage />} />
        {/*Profile page*/}
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
};

export default App;
