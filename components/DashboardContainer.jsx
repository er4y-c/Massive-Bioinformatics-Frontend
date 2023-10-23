import React from 'react';
import Navbar from './Navbar';

const DashboardContainer = ({ children }) => (
    <>
        <Navbar />
        <div className="mx-8">{ children }</div>
    </>
  );

export default DashboardContainer;
