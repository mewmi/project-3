import React from "react";
import { Routes, Route } from "react-router-dom";
import DeletePage from "./pages/DeletePage";
import EditPage from "./pages/EditPage";
import HomePage from "./pages/HomePage";
import SingleSoundPage from "./pages/SingleSoundPage";
import UploadPage from "./pages/UploadPage";

const App = () => {
  return (
    <div>
      <Routes>
        {/*SingleSound page*/}
        <Route path="/sounds/:id" element={<SingleSoundPage />} />
        {/* Edit page*/}
        <Route path="/sounds/:id/edit" element={<EditPage />} />
        {/*Delete page*/}
        <Route path="/sounds/:id/delete" element={<DeletePage />} />
        {/*Home page*/}
        <Route path="/" element={<HomePage />} />
        {/*Upload page*/}
        <Route path="/sounds" element={<UploadPage />} />
      </Routes>
    </div>
  );
};

export default App;
