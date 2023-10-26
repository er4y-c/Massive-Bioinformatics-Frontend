import React from 'react'
import Image from 'next/image'
import classNames from 'classnames'

const IconButton = ({
    src,
    width = 20,
    height = 20,
    alt, label,
    className,
    isDisable,
    ...props }) => (

    <button
      type="button"
      className={classNames('bg-blue', className)}
      disabled={isDisable}
      {...props}
    >
        <span>{label}</span>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
        />
    </button>
  )

export default IconButton;
