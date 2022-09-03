import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { Stacked, Pie , Button, LineCharts, SparkLine } from '../components';
import {financialChartData, FinancialPrimaryXAxis, FinancialPrimaryYAxis , earningData, medicalproBranding, recentTransactions, CasaStats, dropdownData, areaCustomSeries2, areaPrimaryXAxis, areaPrimaryYAxis, SparklineAreaData, ecomPieChartData ,pieChartData3,pieChartData4,barCustomSeries2021,barCustomSeries2022, barPrimaryXAxis, barPrimaryYAxis } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import anp from '../data/anp.svg';
import {Legend, Category, ColumnSeries, DataLabel , ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, HiloSeries, Tooltip, DateTime, Zoom, Logarithmic, Crosshair ,SplineAreaSeries} from '@syncfusion/ej2-react-charts';


const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'none', color: (currentMode === 'Dark') && 'white' }} value="1" dataSource={dropdownData} popupHeight="220px" popupWidth="120px" />
  </div>
);
const date1 = new Date('2022, 1, 1');


// eslint-disable-next-line consistent-return
function filterValue(value) {
  if (value.x <= date1) {
    // eslint-disable-next-line no-sequences
    return value.x, value.high, value.low;
  }
}
const returnValue = financialChartData.filter(filterValue);

const Dashboard = () => {
  const { currentColor, currentMode } = useStateContext();

  return (
    <div className="mt-24 bg overflow-auto flex-wrap  ">
      <div className=" bg-blue rounded-md border-2 drop-shadow-md overflow-auto  flex-wrap justify-center mb-20 dark:border-0 ">
        <div className=" my-5  justify-center">
          <p className="text-center dark:text-teal-300 text-xl mb-2 mt-3">repartion des navires en retard en Maroc </p>
        </div>
        <div className="flex justify-center">
          <div className="bg-white border-2 dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-1/4 lg:w-1/4 p-8 pt-9 m-3 ">
            <div className="flex justify-between  items-center dark:bg-secondary-dark-bg">
              <div>

                <p className="text-2xl">Agence Nationale des ports</p>
              </div>
              <button
                type="button"
            
                className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
              >
                 <img src={anp} className=" bg-white dark:bg-secondary-dark-bg"/>
              </button>
            </div>
          </div>
          <div className="flex m-3  w-3/5 flex-wrap justify-around  items-center">
            {earningData.map((item) => (
              <div key={item.title} className="bg-white h-44  border-2 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
                <button
                  type="button"
                  style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                  className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
                >
                  {item.icon}
                </button>
                <p className="mt-3">
                  <span className="text-lg font-semibold">{item.amount}</span>
                  <span className={`text-sm text-${item.pcColor} ml-2`}>
                    {item.percentage}
                  </span>
                </p>
                <p className="text-sm text-gray-400  mt-1">{item.title}</p>
              </div>
            ))}
          </div> 
        </div>
      </div>
      <div className=" bg-blue rounded-md border-2 drop-shadow-md overflow-auto  flex-wrap justify-center mb-20 dark:border-0 ">
        <div className=" my-5  justify-center">
          <p className="text-center dark:text-teal-300 text-xl mb-2 mt-3">repartion des navires en retard par marchandise en 2021 et 2022</p>
        </div>
        <div className="flex justify-center">
          <div className="bg-white overflow w-3/4 border-2  dark:text-gray-200 dark:bg-secondary-dark-bg m-5 p-4 rounded-2xl md:w-780  ">
            <div className="flex  mb-0 justify-between overflow-auto">
              <p className="font-semibold text-xl">ceriales et conteneurs</p>
            </div>
            <div className="mt-0 mb-5 flex  flex-wrap justify-center">      
                  <ChartComponent
                    id="charts"
                    height="400px"
                    primaryXAxis={barPrimaryXAxis}
                    primaryYAxis={barPrimaryYAxis}
                    chartArea={{ border: { width: 0 } }}
                    tooltip={{ enable: true }}
                    background={currentMode === 'Dark' ? '#33373E' : '#fff'}
                    legendSettings={{ background: 'white' }}
                  >
                  <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]} />
                  <SeriesCollectionDirective>
                    {barCustomSeries2021.map((item, index) => <SeriesDirective key={index} {...item} />)}
                    {barCustomSeries2022.map((item, index) => <SeriesDirective key={index} {...item} />)}
                  </SeriesCollectionDirective>
                </ChartComponent>
            </div>
          </div>
          <div className="w-1/4 mt-5 overflow-visible  ">
          {earningData.map((item) => (
            <div key={item.title} className="bg-white flex h-40 border-2 ml-5 mt-0 w-full dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full   p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <div className=" ml-4">
                <p className="mt-3">
                  <span className="text-lg font-semibold">{item.amount}</span>
                  <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                  </span>
                </p>
                <p className="text-sm text-gray-400  mt-1">{item.title}</p>
              </div>
            </div>
          ))}
           
          </div>
        </div>
      </div>
      <div className=" bg-blue rounded-md border-2 drop-shadow-md overflow-auto  flex-wrap justify-center mb-20 dark:border-0 ">
        <div className=" my-5  justify-center">
          <p className="text-center dark:text-teal-300 text-xl mb-2 mt-3">repartion des navires en retard  à Casablanca en 2021 et 2020</p>
        </div>
        <div className="flex justify-center">
        <div className="w-1/3 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg  border-2 drop-shadow-md rounded-2xl p-3  my-3 mr-5 ">
          
          <div className="flex justify-between">
            <p className="text-xl font-semibold">par destinataire</p>
            <button type="button" className="text-xl font-semibold text-gray-400">
              <IoIosMore />
            </button>
          </div>
          <Pie id="pie-chart"  data={pieChartData3} legendVisiblity={true} height="full" with='80%' />
        </div>
        <div className="md:w-1/4 bg-white dark:text-gray-200   mr-5 border-2 drop-shadow-md dark:bg-secondary-dark-bg rounded-2xl p-3  my-3 ">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">par marchandiese</p>
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
        <div className=" bg-white  w-1/3 overflow-x-auto border-2 drop-shadow-md dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-3 my-3">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">par mois en 2020 et 2021</p>
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
    </div>
  );
};

export default Dashboard;
