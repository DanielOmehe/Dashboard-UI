import { Fragment, useState } from 'react';
import Text from '../utility/text';
import Tabs from './tabs';
import Panel from  './panel';
import { labels, categories } from '../utility/data';
import Categories from './categories';

const Category = ({})=>{
    const [activeTab, setActiveTab] = useState(labels[0].key);
    return(
        <Fragment>
            <div id="categories">
            <Tabs activeTab={activeTab} onChange={setActiveTab}
            labels={labels}
            variant='tabs'
            tabClass='tab-labels'
            content='content'
            >
                <Panel tabKey="last_month">
                    <Categories categories={categories} />
                </Panel>
                <Panel tabKey="three_month">
                    <Categories categories={categories} />
                </Panel>
                <Panel tabKey="six_month">
                    <Categories categories={categories} />
                </Panel>
                <Panel tabKey="year">
                    <Categories categories={categories} />
                </Panel>
                <Panel tabKey="all">
                    <Categories categories={categories} />
                </Panel>
            </Tabs>
            </div>
            <style jsx>{`
            #categories{
                height: 350px;
                width: 350px;
                background: #fff;
                position: relative;
                border-radius: 10px;
                box-shadow: 0 0 2px rgba(0,0,0,.34);
            }
            `}</style>
        </Fragment>
    )
}

export default Category