import React from "react";
import { Route, Routes } from "react-router-dom";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import ProfileContainer from "./components/profile/ProfileContainer.jsx";
import Layout from "./Layout.jsx";
import UsersContainer from "./components/users/UsersContainer";
import Login from "./components/login/Login";

function App(props) {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="profile/" element={<ProfileContainer />}>
          <Route path=":userId" element={<ProfileContainer />} />
        </Route>
        <Route path="dialogs/*" element={<DialogsContainer />}>
          <Route path=":id" element={<p>message</p>} />
        </Route>
        <Route path="users/" element={<UsersContainer />} />
        <Route path="login/" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
