import { Fragment } from 'react';
import { Chart as ChartJS, BarElement, LinearScale, CategoryScale } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { barChartData, barOptions } from './userdata'

ChartJS.register(BarElement, LinearScale, CategoryScale)

const BarChart = ()=>{
    return(
        <Fragment>
            <div className='barchart'>
                <Bar 
                height={450}
                data={barChartData}
                options={barOptions}
                />
            </div>
            <style jsx>{`
            .barchart{
                width: 100%;
                height: 100%;
            }
            `}</style>
        </Fragment>
    )
}

export default BarChart