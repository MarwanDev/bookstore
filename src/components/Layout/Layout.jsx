/* eslint-disable import/no-cycle */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { Categories, Books } from '../../pages';
import './Layout.scss';

function Layout() {
  return (
    <>
      <Navbar />
      <div className="layout-container">
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </>
  );
}

export default Layout;
