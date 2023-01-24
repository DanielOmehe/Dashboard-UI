import { Fragment } from "react";
import Text from '../utility/text';

const IncomeAmount = ({addIcon, amount})=>{
    return(
        <Fragment>
            <div className='income'>
                <div className='add-income'>
                    <img src={addIcon} alt='add' />
                    <Text variant='income-amount'>{amount} $</Text>
                </div>
            </div>
            <style jsx> {`
            .income{
                height: 120px;
                width: 310px;
                left: 0px;
                top: 0px;
                background: #29CC391A;
                margin-bottom: 3px;
                border-radius: 10px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .add-income{
                height: 50px;
                width: 136px;
                border-radius: 50px;
                background: inherit;
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                box-shadow: 0 0 2px rgba(0, 0, 0, 0.56);
            }
            `} </style>
        </Fragment>
    )
}

export default IncomeAmount