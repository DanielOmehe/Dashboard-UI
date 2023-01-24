import { Fragment } from "react";

const Head = ({variant, children})=>{
    return(
        <Fragment>
            <div className={variant}>
                {children}
            </div>
            <style jsx>{`
            .user-head{
                height: 30px;
                width: 256px;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .account-head{
                height: 20px; 
                width: 256px;
                margin-bottom: 30px;               
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .settings-head{
                height: 20px;
                width: 256px;
                display: flex;
                margin-bottom: 35px;
                align-items: center;
                justify-content: space-between;
            }
            `}</style>
        </Fragment>
    )
}

export default Head