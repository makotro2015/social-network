import React from 'react';
import { Outlet } from 'react-router-dom';
import './Layout.scss';
import Navbar from './components/navbar/Navbar.jsx';
import HeaderContainer from './components/header/HeaderContainer';

function Layout(props) {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="content-wrapper">
        <Outlet /> 
      </div>
    </div>
  );
}

export default Layout;
