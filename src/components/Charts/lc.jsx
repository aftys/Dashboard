import React from 'react';
import {Category, ColumnSeries,ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, LineSeries, DateTime, Legend, Tooltip } from '@syncfusion/ej2-react-charts';

import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis ,data} from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const LineChart = () => {
  const { currentMode } = useStateContext();
  const primaryxAxis = { valueType: 'Category' };

  return (
    <ChartComponent id="charts" primaryXAxis={primaryxAxis}>
    <Inject services={[ColumnSeries, Tooltip, LineSeries, Category]}/>
    <SeriesCollectionDirective>
      <SeriesDirective dataSource={data} xName='mois'  yName='nombre_navire' name='2022'/>
      <SeriesDirective dataSource={data} xName='mois'  yName='nombre_navire' name='2021'/>
      <SeriesDirective dataSource={data} xName='mois'  yName='nombre_navire' name='2020'/>
    </SeriesCollectionDirective>
  </ChartComponent>
  );
};

export default LineChart;