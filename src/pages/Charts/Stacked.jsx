import React from 'react';

import { ChartsHeader, Stacked as StackedChart } from '../../components';

const Stacked = () => (
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <ChartsHeader  title="Reparttion des navires en retard en 2022 par mois" />
    <div className="w-full">
      <StackedChart />
    </div>
  </div>
);

export default Stacked;
