import React from 'react';
import Image from 'next/image';

const Navbar = () => (
    <nav className="bg-blue-600 px-4 flex justify-between items-center mb-12">
      <div>
        <Image src="/logo.png" width={90} height={90} alt="Massive Bioinformatics icon" />
      </div>
      <div className="relative">
        <input
          type="text"
          placeholder="Ara..."
          className="bg-white text-blue-500 border-2 border-blue-500 p-2 rounded-md pl-10 w-2/3 lg:w-full"
        />
        <div className="absolute top-2 left-2 text-gray-400">
          <Image src="/icons/search.png" width={25} height={25} alt="Search icon" />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div>
          <Image src="/icons/user-icon.png" width={25} height={25} alt="Profile icon" />
        </div>
        <div>
          <Image src="/icons/notification.png" width={25} height={25} alt="Notification icon" />
        </div>
        <div>
          <Image src="/icons/settings.png" width={25} height={25} alt="Settings icon" />
        </div>
      </div>
    </nav>
  );

export default Navbar;
