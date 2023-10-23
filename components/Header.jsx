import React from 'react';
import Image from 'next/image';

const Header = ({ name }) => (
      <div className="flex items-center gap-x-4">
        <Image src="/icons/header-icon.png" width={45} height={45} alt="Welcome icon" />
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-semibold">Welcome to <span className="text-blue-600">{ name }</span></h1>
          <p className="text-sm">Here you can see your reports and metrics</p>
        </div>
      </div>
  );

export default Header;
