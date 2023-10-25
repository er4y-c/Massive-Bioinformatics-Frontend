import React from 'react';
import Navbar from './Navbar';

const DashboardContainer = ({ children }) => (
    <>
        <Navbar />
        <div className="">{ children }</div>
    </>
  );

export default DashboardContainer;
