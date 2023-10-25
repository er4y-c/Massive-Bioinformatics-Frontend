import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const NoReportState = () => (
    <div className="flex flex-col items-center justify-center">
        <Image src="/icons/dashboard.png" width={96} height={96} alt="Empty Dashboard" />
        <p className="text-xl font-semibold text-gray-800">It's empty here</p>
        <p className="text-xl font-semibold text-gray-800">Add new report to your dashboard</p>
        <Link href="/create" className="rounded bg-blue-700 py-2 px-4 text-white text-sm outline-none mt-4">Add Report</Link>
    </div>
  )

export default NoReportState;
