import { Fragment } from "react";
import Text from "../utility/text";

const Ad = ({url, text, phonenumer})=>{
    return(
        <Fragment>
            <div className="ads">
                <div className="illustration">
                    <img src={url} alt='illustration' />
                </div>
                <Text variant='help'> {text} </Text>
                <Text variant='number'> {phonenumer} </Text>
            </div>
            <style jsx>{`
            .ads{
                height: 200px;
                width: 270px;
                position: absolute;
                top: 845px;
                left: 28px;
                right: 30px;
                bottom: 30px;
                display: flex;
                flex-direction: column;
                align-items: center;
                background: #FEB35F;
                border-radius: 6px;
                box-shadow: 0 4px 4px rgba(0,0,0,0.1);
            }
            .illustration{
                margin: 30px auto 0;
            }
            `}</style>
        </Fragment>
    )
}

export default Ad