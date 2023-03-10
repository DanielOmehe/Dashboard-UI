import { Fragment, useState } from "react";
import { Chart } from "react-google-charts";

const options = {
  title: "Age vs. Weight comparison",
//   hAxis: { title: "Age", viewWindow: { min: 0, max: 35 } },
  vAxis: { title: "Weight", viewWindow: { min: 0, max: 15 } },
  legend: "none"
};

const data = [
  ["Age", "Weight"],
  [8, 12],
  [4, 5.5],
  [11, 14],
  [4, 5],
  [3, 3.5],
  [6.5, 7]
];

const App = ()=>{
    return(
        <Fragment>
            <div>
            
            <Chart
              chartType="BarChart"
              data={data}
              options={options}
              width="80%"
              height="400px"
              legendToggle
            />
            </div>
        </Fragment>
    )
}

export default App