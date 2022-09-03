import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, HiloSeries, Tooltip, DateTime, Zoom, Logarithmic, Crosshair } from '@syncfusion/ej2-react-charts';
import { financialChartData, FinancialPrimaryXAxis, FinancialPrimaryYAxis } from '../../data/dummy';
import { Stacked,  Button, LineCharts, SparkLine } from '../../components';
import { earningData, medicalproBranding, recentTransactions, CasaStats, dropdownData, SparklineAreaData, ecomPieChartData ,pieChartData,pieChartData4,pieChartData3} from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import product9 from '../../data/product9.jpg';

import { ChartsHeader, Pie as PieChart } from '../../components';


const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'none', color: (currentMode === 'Dark') && 'white' }} value="1" dataSource={dropdownData} popupHeight="220px" popupWidth="120px" />
  </div>
);
const date1 = new Date('2022, 1, 1');
function filterValue(value) {
  if (value.x <= date1) {
    // eslint-disable-next-line no-sequences
    return value.x, value.high, value.low;
  }
}
const returnValue = financialChartData.filter(filterValue);

const Pie = () => {
  const { currentColor, currentMode } = useStateContext();

  return (
    <div>
      <div>
        <ChartsHeader title="repartion des navires en retard en Maroc en 2021 et 2020" />
      </div>
      <div className="flex flex-wrap mt-10 bg-blue  overflow-auto justify-around  dark:border-0">
        <div className="w-1/3 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg  border-2 drop-shadow-md rounded-2xl p-3  my-3 ">
          
          <div className="flex justify-between">
            <p className="text-xl font-semibold">par destinataire</p>
            <button type="button" className="text-xl font-semibold text-gray-400">
              <IoIosMore />
            </button>
          </div>
          <PieChart id="pie-chart"  data={pieChartData3} legendVisiblity={true} height="full" with='80%' />
        </div>
        <div className="md:w-1/4 bg-white dark:text-gray-200  border-2 drop-shadow-md dark:bg-secondary-dark-bg rounded-2xl p-3  my-3 ">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">par marchandise</p>
            <button type="button" className="text-xl font-semibold text-gray-500">
              <IoIosMore />
            </button>
          </div>

          <div className="mt-10 ">
            {CasaStats.map((item) => (
              <div key={item.title} className="flex justify-between mt-4 w-full">
                <div className="flex gap-4">
                  <button
                    type="button"
                    style={{ background: item.iconBg }}
                    className="text-2xl hover:drop-shadow-xl text-white rounded-full p-3"
                  >
                    {item.icon}
                  </button>
                  <div>
                    <p className="text-md font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </div>

                <p className={`text-${item.pcColor}`}>{item.amount}</p>
              </div>
            ))}
          </div>

        </div>
        <div className=" bg-white overflow-x-auto border-2 drop-shadow-md dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-3 my-3">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">par mois en 2021 et 2022</p>
            <button type="button" className="text-xl font-semibold text-gray-400">
              <IoIosMore />
            </button>
          </div>
          {/*<PieChart id="pie-chart"  data={pieChartData3} legendVisiblity={true} height="360px" with='80%' >*/}

            <div className="w-full  flex h-200 flex-row py-4 min1/2 justify-center items-center" >
              <ChartComponent className="w-full shadow-inner  h-1/3 overflow-auto  rounded-3xl   "
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
      </div>
    </div>
  );
};

export default Pie;
