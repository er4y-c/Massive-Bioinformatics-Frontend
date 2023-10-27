import React from 'react';

const Loading = () => (
    <div className="flex items-center justify-center h-screen">
      <div className="flex items-center">
        <svg className="animate-spin h-8 w-8 mr-3 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zm8 1.416V24c4.427 0 8-3.573 8-8h-4a4.978 4.978 0 01-3.414-1.572L14 18.707z" />
        </svg>
      </div>
    </div>
  );

export default Loading
