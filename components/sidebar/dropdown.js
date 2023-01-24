import { Fragment } from "react";
import Text from "../utility/text";

const DropDown = ({state})=>{
    return(
        <Fragment>
            <div className="dropdown">
                <div className='user-info'>
                <img className="avatar" src='/images/userAvatar.png' alt='Useravatar' width='30' />
                <Text variant='user'>Clayton Santos</Text>
                </div>
                <div className='bio'>
                    <Text variant='text'>Entrepreneur</Text>
                    <Text variant='text'>Business Owner</Text>
                    <Text variant='text'>Business Management Coach</Text>
                    <Text variant='text'>Life Coach</Text>
                </div>
            </div>
            <style jsx> {`
            .dropdown{
                width: 300px;
                height: 150px;
                border-radius: 5px;
                padding: 10px;
                background: #fff;
                position: absolute;
                top: 65%;
                left: -50%;
                z-index: 5;
                box-shadow: 0 0 2px rgba(0,0,0,.45);
                display: ${!state ? 'none' : 'block'};
                transition: display .5s linear;
            }
            .user-info{
                display: flex;
                align-items: center;
                justify-content: flex-start;
                border-bottom: 1px solid rgba(0,0,0,.14);
            }
            .avatar{
                width: 50px;
                height: 50px;
                border-radius: 100px; 
            }
            `} </style>
        </Fragment>
    )
}

export default DropDown;