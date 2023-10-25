import React, { useMemo } from 'react';

import DashboardContainer from '../components/DashboardContainer';
import Header from '../components/Header';
// import DataTable from '../components/DataTable';
import { columns, mockData } from '../utils';
import DataTable from '../components/DataTable';
import ChartBox from '../components/ChartBox';
import NoReportState from '../components/Errors/NoReportState';

const Home = () => {
  const finalData = useMemo(() => mockData, []);
  const finalColumnDef = useMemo(() => columns, []);

  return (
    <DashboardContainer>
      <Header name="Eray Aynacı" />
      { /* <ChartBox>
        <DataTable columns={finalColumnDef} data={finalData} />
      </ChartBox> */}
      <NoReportState />
    </DashboardContainer>
  );
};

export default Home;
