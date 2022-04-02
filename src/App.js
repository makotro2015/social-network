import React from "react";
import { Route, Routes } from "react-router-dom";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import Profile from "./components/profile/Profile.jsx";
import Layout from "./Layout.jsx";

function App(props) {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Profile />} />
        <Route path="dialogs/*" element={<DialogsContainer />}>
          <Route path=":id" element={<p>message</p>} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
