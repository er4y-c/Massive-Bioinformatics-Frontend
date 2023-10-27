import React from 'react'
import Image from 'next/image'

const NoDataState = () => (
    <div className="flex flex-col items-center justify-center gap-y-4 mt-16">
        <Image src="/icons/no-data.png" width={96} height={96} alt="Data not found" />
        <p className="text-xl font-semibold text-gray-800">No data to display</p>
    </div>
  )

export default NoDataState;
