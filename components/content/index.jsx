import { Fragment } from 'react'
import CashBack from './CashBack';
import Category from './category';
import Popular from './Popular';
import RecentTransactions from './recent';
import Income from './income'

const Content = ({menuopen})=>{
    return(
        <Fragment>
            <div className='dashboard-main-content'>
                <div className='content-row'>
                    <Income />
                    <CashBack />
                    <Category />
                </div>
                <div className='content-row'>
                    <RecentTransactions />
                    <Popular />
                </div>
            </div>
            <style jsx>{`
            .dashboard-main-content{
                height: 1115px;
                width: 1150px;
                left: ${menuopen ? 15 : -65}px;
                padding: 20px;
                position: relative;
                transition: all .25s linear;
            }
            .content-row{
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .content-row:last-child{
                margin-top: 30px;
            }

            @media screen and (max-width: 1200){
                dashboard-main-content{
                    width: 100%;
                }
                .content-row{
                    width: 100%;
                }
            }
            `}</style>
        </Fragment>
    )
}

export default Content
