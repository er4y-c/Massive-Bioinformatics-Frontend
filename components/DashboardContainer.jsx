import React from 'react';
import Navbar from './Navbar';

const DashboardContainer = ({ children }) => {
  return (
    <div>
        <Navbar />
        { children }
    </div>
  );
};

export default DashboardContainer;
