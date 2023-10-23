import React from 'react'

const SearchFilter = ({ name = 'search-input', type = 'text', placeholder, label }) => (
    <div className="space-x-4">
      <label htmlFor="search-input" className="text-sm text-gray-500 font-semibold">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="p-2 focus:outline-none border border-gray-80 rounded text-sm"
      />
    </div>
  )

export default SearchFilter;
