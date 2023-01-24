import { Fragment } from 'react';
import Button from './button';
import Icon from './icon';
import Text from './text';

const Account = ({username})=>{
    return(
        <Fragment>
            <div className='account'>
                <img src='/images/avatar.png' alt='avatar' />
                <Text variant='user-name'> {username} </Text>
                <Button variant='notification'> 
                    <div className='active'></div>
                    <Icon image='/images/notification.png' />
                </Button>
                <Button variant='cancel'> 
                    <Icon image='/images/cancel.png' />
                </Button>
            </div>
            <style jsx> {`
            .account{
                height: 50px;
                width: 330px;
                display: flex;
                align-items: center;
                margin-left: 140px;
            }
            .active{
                width: 10px;
                height: 10px;
                background: red;
                border-radius: 50%;
                position: absolute;
                top: 0;
                left: 32px;
            }
            `} </style>
        </Fragment>
    )
}

export default Account