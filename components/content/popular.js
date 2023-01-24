import { Fragment, useState } from 'react';
import { labels, companies } from '../utility/data';
import Company from "./company";
import Tabs from './tabs';
import Panel from './panel';
import Button from '../utility/button'



const Popular = ()=>{
    const [activeTab, setActiveTab] = useState(labels[0].key);
    return(
        <Fragment>
            <div id="popular">
            <Tabs activeTab={activeTab} onChange={setActiveTab}
            labels={labels}
            variant='popular-tabs'
            tabClass='popular-tab-labels'
            content='popular-content'
            >
                <Panel tabKey='last_month'>
                    <Company companies={companies} />
                </Panel>
                <Panel tabKey='three_month'>
                    <Company companies={companies} />
                </Panel>
                <Panel tabKey='six_month'>
                    <Company companies={companies} />
                </Panel>
                <Panel tabKey='year'>
                    <Company companies={companies} />
                </Panel>
                <Panel tabKey='all'>
                    <Company companies={companies} />
                </Panel>
            </Tabs>
            <Button variant='more'>more</Button>
            </div>
            <style jsx> {`
            #popular{
                height: 635px;
                width: 445px;
                left: 0px;
                top: 0px;
                border-radius: 10px;
                background: #fff;
                position: relative;
                box-shadow: 0 0 2px rgba(0,0,0,.34);
            }
            `} </style>
        </Fragment>
    )
}

export default Popular 