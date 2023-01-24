import { Fragment } from "react";
import Text from '../utility/text';

const ExpensesAmount = ({minusIcon, amount})=>{
    return(
        <Fragment>
            <div className='expense'>
                <div className='add-expense'>
                    <img src={minusIcon} alt='add' />
                    <Text variant='expense-amount'>{amount} $</Text>
                </div>
            </div>
            <style jsx>{`
            .expense{
                height: 120px;
                width: 310px;
                left: 0px;
                top: 0px;
                border-radius: 10px;
                background: rgba(230, 46, 46, 0.1);
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .add-expense{
                height: 50px;
                width: 136px;
                border-radius: 50px;
                background: inherit;
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                box-shadow: 0 0 2px rgba(0, 0, 0, 0.56);
            }
            `}</style>
        </Fragment>
    )
}

export default ExpensesAmount