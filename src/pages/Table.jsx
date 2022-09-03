import React from 'react';
import { GridComponent, Inject, ColumnsDirective, ColumnDirective,Sort, Search, Page , Filter, Group} from '@syncfusion/ej2-react-grids';
import { mardata } from '../data/dummy';
import { Header } from '../components';

const Table = () => {
  const toolbarOptions = ['Search','Delete','Select'];

  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div className="m-2 md:m-10 mt-24  drop-shadow-xl p-2 dark:bg-secondary-dark-bg dark:text-sky-200  md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="table" />
      <GridComponent
        dataSource={mardata}
        width="auto"
        allowPaging
        allowSorting
        pageSettings={{ pageCount: 5 }}
        editSettings={editing}
        toolbar={toolbarOptions}
        >
        <ColumnsDirective className=" dark:bg-secondary-dark-bg dark:text-sky-200">
            <ColumnDirective className=" dark:bg-secondary-dark-bg dark:text-sky-200" field='port' width='100' textAlign="Right"/>
            <ColumnDirective className=" dark:bg-secondary-dark-bg dark:text-sky-200" field='destinataire' width='100'/>
            <ColumnDirective className=" dark:bg-secondary-dark-bg dark:text-sky-200" field='marchabdise' width='100' textAlign="Right"/>
            <ColumnDirective className=" dark:bg-secondary-dark-bg dark:text-sky-200" field='annee' width='100' format="C2" textAlign="Right"/>
            <ColumnDirective vclassName=" dark:bg-secondary-dark-bg dark:text-sky-200" field='mois' width='100'/>
        </ColumnsDirective>
        <Inject services={[Page, Sort, Filter,Search, Group]}/>
      </GridComponent>
    </div>
  );
};
export default Table;
