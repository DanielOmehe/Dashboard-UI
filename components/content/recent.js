import { Fragment, useState } from 'react';
import Text from "../utility/text";
import Tabs from './tabs';
import Panel from './panel';
import { labels } from "../utility/data";
import BarChart from '../charts/bar'

const RecentTransactions = ({tabs})=>{
    const [activeTab, setActiveTab] = useState(labels[0].key);
    return(
        <Fragment>
            <div id="recent-container">
            <Tabs 
            activeTab={activeTab} 
            onChange={setActiveTab}
            labels={labels}
            variant='recent-tabs'
            tabClass='recent-tab-labels'
            content='recent-transactions-content'
            >
                <Panel tabKey='last_month'>
                    <div className='recent-transactions'>
                        <BarChart />
                    </div>
                </Panel>
                <Panel tabKey='three_month'>
                    <BarChart />
                </Panel>
                <Panel tabKey='six_month'>
                    <BarChart />
                </Panel>
                <Panel tabKey='year'>
                    <BarChart />
                </Panel>
                <Panel tabKey='all'>
                    <BarChart />
                </Panel>
            </Tabs>
            </div>
            <style jsx>{`
            #recent-container{
                height: 635px;
                width: 635px;                                
                left: 0px;
                border-radius: 10px;
                background: #fff;
                position: relative;
                box-shadow: 0 0 2px rgba(0,0,0,.34);
            }
            .recent-transactions{
                height: 100%;
                width: 550px;
            }
            `}</style>
        </Fragment>
    )
}

export default RecentTransactions