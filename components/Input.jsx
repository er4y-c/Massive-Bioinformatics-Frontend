import React from 'react'
import classNames from 'classnames'

const Input = ({ name, value, handleChange, placeholder, className }) => (
    <input
      type="text"
      name={name}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      className={classNames('min-h-[38px] px-4 bg-gray-100 focus:outline-none border border-gray-80 rounded', className)}
    />
  )

export default Input
