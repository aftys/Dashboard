import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, HiloSeries, Tooltip, DateTime, Zoom, Logarithmic, Crosshair } from '@syncfusion/ej2-react-charts';

import { financialChartData, FinancialPrimaryXAxis, FinancialPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import { ChartsHeader } from '../../components';

const date1 = new Date('2022, 1, 1');


// eslint-disable-next-line consistent-return
function filterValue(value) {
  if (value.x <= date1) {
    // eslint-disable-next-line no-sequences
    return value.x, value.high, value.low;
  }
}
const returnValue = financialChartData.filter(filterValue);

const Financial = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10  shadow-inner drop-shadow-xl justify-center bg-#cbd5e1 dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader  title=" repartion des navires en retard à Casablanca en 2021 et 2022 par mois" />
      <div className="w-full flex flex-row min1/2 justify-center items-center" >
        <ChartComponent className="w-3/4 shadow-inner  overflow-auto  rounded-3xl  "
          id="charts"
          primaryXAxis={FinancialPrimaryXAxis}
          primaryYAxis={FinancialPrimaryYAxis}
          chartArea={{ border: { width: 0,  } }}
          tooltip={{ enable: true, shared: true }}
          crosshair={{ enable: true, lineType: 'Vertical', line: { width: 5 } }}
          background={currentMode === 'Dark' ? '#33373E' : '#a5f3fc'}
        >
          <Inject services={[HiloSeries, Tooltip, DateTime, Logarithmic, Crosshair, Zoom]} />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={returnValue}
              xName="x"
              yName="low"
              name="navire"
              type="Hilo"
              low="low"
              high="high"
            />
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Financial;
