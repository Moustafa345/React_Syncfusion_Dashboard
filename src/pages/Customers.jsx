import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective, 
  Page,
  Selection,
  Inject,
  Edit,
  Toolbar,
  Filter,
  Sort,
} from "@syncfusion/ej2-react-grids";
import { customersData, customersGrid } from "../data/dummy";
import { Header } from "../components";
const Customers = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
       <Header category="Page" title="Customers" />
       <GridComponent
        dataSource={customersData}
        allowPaging
        allowSorting
        allowFiltering
        allowSelection 
        pageSettings={{ pageSize: 10 }}
        selectionSettings={{ type: "Multiple" }}
        toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel']}
        editSettings={{ allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' }}
        filterSettings={{ type: 'Menu' }} 
       >
          <ColumnsDirective>
            {customersGrid.map((item, idx) => (
              <ColumnDirective key={idx} {...item} />
            ))}
          </ColumnsDirective>
          <Inject services={[Page, Selection, Edit, Toolbar, Filter, Sort]} />
       </GridComponent>
    </div>
  )
  
};

export default Customers;
