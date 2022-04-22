import React from 'react';
import preloader from './../../../assets/images/loading.svg';

function Preloader (props) {
  return (
    <img src={preloader}  alt="Идет получение данных"/>
  );
}

export default Preloader;