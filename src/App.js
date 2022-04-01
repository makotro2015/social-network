import React from "react";
import { Route, Routes } from "react-router-dom";
import Dialogs from "./components/dialogs/Dialogs";
import Profile from "./components/profile/Profile.jsx";
import Layout from "./Layout.jsx";

function App(props) {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <Profile
              profilePage={props.state.profilePage}
              dispatch={props.dispatch}
            />
          }
        />
        <Route
          path="dialogs/*"
          element={
            <Dialogs
              state={props.state.dialogsPage}
              dispatch={props.dispatch}
            />
          }
        >
          <Route path=":id" element={<p>message</p>} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
