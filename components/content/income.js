import { Fragment, useState } from 'react';
import IncomeAmount from './incomeAmount';
import ExpensesAmount from './expensesAmount';
import Panel from './panel';
import Tabs from './tabs';
import { labels } from "../utility/data";

const Income =()=>{
    const [activeTab, setActiveTab] = useState(labels[0].key);
    return(
        <Fragment>
            <div id='income'>
            <Tabs activeTab={activeTab} onChange={setActiveTab}
            labels={labels}
            variant='tabs'
            tabClass='tab-labels'
            content='content'
            >
                <Panel tabKey='last_month'>
                        <IncomeAmount addIcon='/images/add.png' amount='5500' />
                        <ExpensesAmount minusIcon='/images/minus.png' amount='2150'/>
                </Panel>
                <Panel tabKey='three_month'>
                        <IncomeAmount addIcon='/images/add.png' amount='16500' />
                        <ExpensesAmount minusIcon='/images/minus.png' amount='6450' />
                </Panel>
                <Panel tabKey='six_month'>
                        <IncomeAmount addIcon='/images/add.png' amount='33000' />
                        <ExpensesAmount minusIcon='/images/minus.png' amount='12900' />
                </Panel>
                <Panel tabKey='year'>
                        <IncomeAmount addIcon='/images/add.png' amount='66000' />
                        <ExpensesAmount minusIcon='/images/minus.png' amount='25800' />
                </Panel>
                <Panel tabKey='all'>
                        <IncomeAmount addIcon='/images/add.png' amount='132000' />
                        <ExpensesAmount minusIcon='/images/minus.png' amount='51600' />
                </Panel>
            </Tabs>
            </div>
            <style jsx> {`
            #income{
                height: 350px;
                width: 350px;
                background: #fff;
                border-radius: 10px;
                box-shadow: 0 0 2px rgba(0,0,0,.34);
                position: relative;
                transition: all .5s linear;
            }
            .income-content{
                height: 245px;
                width: 310px;
                left: 20px;
                top: 65px;
                border-radius: 0px;
                position: absolute;
            }
            `} </style>
        </Fragment>   
    )
}

export default Income