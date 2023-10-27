import React from 'react'

import DashboardContainer from '../components/DashboardContainer'
import FilterSection from '../components/CreatePage/FilterSection'
import ColumnsSection from '../components/CreatePage/ColumnsSection'
import OrderingSection from '../components/CreatePage/OrderingSection'
import OverviewSection from '../components/CreatePage/OverviewSection'

const Dashboard = () => (
    <DashboardContainer>
      <div className="bg-gray-100 w-full h-full p-8">
        <h1 className="text-2xl text-gray-700">Data Table</h1>
        <p className="text-sm text-gray-500">Design your table using filters and sort parameters</p>
      </div>
      <div className="border-y border-gray-200 p-8 space-y-4">
        <h3 className="text-xl text-gray-700">COLUMNS</h3>
        <ColumnsSection />
        <h3 className="text-xl text-gray-700">FILTERS</h3>
        <FilterSection />
        <h3 className="text-xl text-gray-700">ORDERING</h3>
        <OrderingSection />

        <OverviewSection />
      </div>
    </DashboardContainer>
  )

export default Dashboard
