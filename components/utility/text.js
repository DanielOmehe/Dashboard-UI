import { Fragment } from "react";

const Text = ({variant, onClickHandler, children})=>{
    return(
        <Fragment>
            <p onClick={onClickHandler} className={variant}>{children}</p>
            <style jsx> {`
            .logo{
                color: #4D5E80;
                font-size: 18px;
                font-weight: 700;
                margin-right: 84px;
                margin-left: 10px;
            }
            .user-name{
                font-size: 13px;
                margin-left: 20px;
                font-weight: 700;
            }
            .income-text{
                color: green;
            }
            .cost-text{
                color: red;
            }
            .category-name{
                font-size: 12px;
                margin-left: 20px;
                color: #6B7A99;
                font-weight: 700;
            }
            .category-price{
                font-size: 12px;
                margin-left: 20px;
                color: #7D8FB3;
                font-weight: 700;
            }
            .company-name{
                color: #6B7A99;
                font-size: 13px;
                font-weight: 700;
                margin-left: 25px;
            }
            .income{
                height: 30px;
                width: 44px;
                left: 268px;
                top: 10px;
                background: #F7F8FA;
                font-size: 12px;
                font-weight: 900;
                border-radius: 15px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #6B7A99;
            }
            .cost{
                height: 30px;
                width: 65px;
                left: 322px;
                top: 10px;
                border-radius: 15px;
                padding: 8px 15px;
                background: #F7F8FA;
                font-size: 12px;
                font-weight: 900;
                color: #6B7A99;
            }
            .username{
                font-size: 16px;
                font-weight: 700;
                color: #6B7A99;
                width: 120px;
                margin: 40px 80px 33px 71px;
            }
            .header{
                font-weight: 700;
                font-size: 12px;
                line-height: 20px;
                color: #6B7A99;
            }
            .card-name{
                font-size: 12px;
                font-weight: 700;
                color: #7D8FB3;
            }
            .cash{
                margin-top: 4px;
                font-size: 12px;
                font-weight: 700;
                color: #7D8FB3;
            }
            .heading{
                font-size: 12px;
                font-weight: 700;
                color: #7D8FB3;
            }
            .settings-name{
                color: #6B7A99;
                font-size: 12px;
                font-weight: 700;
                margin-left: 20px;
            }
            .help{
                color: #FF6633;
                font-size: 12px;
                font-weight: 700;
                margin: 24.07px auto 10px;
            }
            .number{
                margin: 0 auto 28px;
                color: #8833FF;
                font-size: 12px;
                font-weight: 900;
            }
            .user{
                font-size: 20px;
                font-weight: 300;
            }
            .bio{
                font-size: 16px;
                font-weight: 400;
            }
            .income-amount{
                color: #29CC39;
                font-weight: 700;
                font-size: 18px;
            }
            .expense-amount{
                color: #E62E2E;
                font-weight: 700;
                font-size: 18px;
            }
            .category-name{
                font-size: 12px;
                font-weight: 700;
                line-height: 20px;
                color: #6b7a99;
            }
            .category-income{
                font-size: 12px;
                font-weight: 700;
                line-height: 20px;
                color: #7D8FB3;
            }
            .company-name{
                font-size: 12px;
                font-weight: 700;
            }
            `} </style>
        </Fragment>
    )
}

export default Text