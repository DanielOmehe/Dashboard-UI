import { Fragment } from 'react';
import { lineChartData, lineOptions } from './userdata';
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale);
const LineChart = ()=>{
    return(
        <Fragment>
        <div className='line-chart'>
            <Line data={lineChartData} height={295} options={lineOptions} />
        </div>
        <style jsx>{`
        .line-chart{
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
        }
        `}</style>
        </Fragment>
    )
}

export default LineChart