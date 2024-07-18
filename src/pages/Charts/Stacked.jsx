import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  Tooltip,
  DataLabel,
  StackingColumnSeries,
} from "@syncfusion/ej2-react-charts";

import {
  stackedCustomSeries,
  stackedPrimaryXAxis,
  stackedPrimaryYAxis,
} from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";
import { Header } from "../../components";

const Stacked = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Stacked" title="Revenue Breakdown" />

      <ChartComponent
        id="charts"
        primaryXAxis={stackedPrimaryXAxis}
        primaryYAxis={stackedPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={currentMode === "Dark" ? "#33373E" : "#FFF"}
        legendSettings={{ background: "white" }}
      >
        <Inject
          services={[
            StackingColumnSeries,
            Legend,
            Tooltip,
            DataLabel,
            Category,
          ]}
        />
        <SeriesCollectionDirective>
          {stackedCustomSeries.map((item, idx) => (
            <SeriesDirective key={idx} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Stacked;
