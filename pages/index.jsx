import React, { useMemo } from 'react';

import DashboardContainer from '../components/DashboardContainer';
import Header from '../components/Header';
// import DataTable from '../components/DataTable';
import { columns, mockData } from '../utils';
import DataTableV2 from '../components/DataTable/DataTableV2';

const Home = () => {
  const finalData = useMemo(() => mockData, []);
  const finalColumnDef = useMemo(() => columns, []);

  return (
    <DashboardContainer>
      <Header name="Eray Aynacı" />
      <DataTableV2 columns={finalColumnDef} data={finalData} />
    </DashboardContainer>
  );
};

export default Home;
