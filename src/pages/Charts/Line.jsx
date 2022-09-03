import React from 'react';

import { ChartsHeader, LineCharts } from '../../components';

const Line = () => (
  <div className="m-4 md:m-10 mt-24 p-10 bg-white drop-shadow-xl  dark:bg-secondary-dark-bg rounded-3xl">
    <ChartsHeader title="repartion des navires en retard en Maroc en 2021 et 2020" />
    <div className="w-full">
      <LineCharts  height='400px'/>
    </div>
  </div>
);

export default Line;