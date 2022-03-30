import React from "react";
import { Outlet } from "react-router-dom";
import "./Layout.scss";
import Header from "./components/header/Header.jsx";
import Navbar from "./components/navbar/Navbar.jsx";

function Layout(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="content-wrapper">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
