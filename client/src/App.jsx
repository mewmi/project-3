import React from "react";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        {/*SingleSound page*/}
        <Route path="/sounds/:id" element={<SingleSoundPage />} />
        {/* Edit page*/}
        <Route path="/sounds/:id/edit" element={<EditPage />} />
        {/*Delete page*/}
        <Route path="/sounds/id/delete" element={<DeletePage />} />
      </Routes>
    </div>
  );
};

export default App;
