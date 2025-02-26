import React from "react";
import {ChartsHeader} from "../../components";
import PieChart from "../../components/Charts/PieChart";
import {pieChartData} from "../../data/dummy"

const Pie = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Pie" title="Project Cost Breakdown" />
      <div className="w-full">
        <PieChart data={pieChartData} legendVisiblity height="full"/>
      </div>
    </div>
  );
};

export default Pie;
