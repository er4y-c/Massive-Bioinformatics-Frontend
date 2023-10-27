import React from 'react'

import IconButton from '../IconButton'

const BoxHeader = ({ title, description }) => (
    <div className="mb-8 flex justify-between">
        <div>
          <h1 className="text-xl text-gray-800">{title}</h1>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
        <div className="">
            <IconButton
              src="/icons/edit.png"
              className="rounded-full w-8 h-8"
              alt="Edit Button"
            />
            <IconButton
              src="/icons/delete.png"
              className="rounded-full w-8 h-8"
              alt="Delete Button"
            />
            <IconButton
              src="/icons/question.png"
              className="rounded-full w-8 h-8"
              alt="Help Button"
            />
        </div>
    </div>
  )

export default BoxHeader
