import { Fragment, useState } from 'react';
import Tabs from './tabs'
import Panel from './panel'
import { labels } from "../utility/data"
import LineChart from '../charts/line'

const Cashback = ()=>{
    const [activeTab, setActiveTab] = useState(labels[0].key);
    return(
        <Fragment>
            <div id="cashback">
            <Tabs 
            activeTab={activeTab} 
            onChange={setActiveTab}
            labels={labels}
            variant='tabs'
            tabClass='tab-labels'
            content='cashbackContent'
            >
                <Panel tabKey='last_month'>
                    <div className='cashback'>
                        <LineChart />
                    </div>
                </Panel>
                <Panel tabKey='three_month'>
                    <div className='cashback'>
                        <LineChart />
                    </div>
                </Panel>
                <Panel tabKey='six_month'>
                    <div className='cashback'>
                        <LineChart />
                    </div>
                </Panel>
                <Panel tabKey='year'>
                    <div className='cashback'>
                        <LineChart />
                    </div>
                </Panel>
                <Panel tabKey='all'>
                    <div className='cashback'>
                        <LineChart />
                    </div>
                </Panel>
            </Tabs>
            </div>
            <style jsx> {`
            #cashback{
                width: 350px;
                height: 350px;
                background: #fff;
                border-radius: 10px;
                position: relative;
                box-shadow: 0 0 2px rgba(0,0,0,.34);
            }
            .cashback{
                height: 255px;
                width: 261px;
                left: 44px;
                top: 45px;
                position: absolute;
                border-radius: 0px;
            }
            `} </style>
        </Fragment>
    )
}

export default Cashback