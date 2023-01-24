import { Fragment } from "react";
import Button from "../utility/button";

const Users = ({images})=>{
    return(
        <Fragment>
            <div className='users'>
            {
                images.map(({url, id}) => {
                    return(
                        <div key={id} className="avatar">
                            <img src={url} alt='avatar' key={id} />
                        </div>
                    )
                })
            }
            <Button variant='add-user'> 
                <img src="/images/plus.png" alt='icon' />
            </Button>
            </div>
            <style jsx> {`
            .users{
                height: 333px;
                width: 50px;
                left: 0px;
                top: 712px;
                border-radius: 0px;
                margin-top: 282px;
            }
            .avatar{
                width: 50px;
                height: 50px;
                border-radius: 50%;
                margin: 15px 0;
                cursor: pointer;
                position: relative;
                z-index: 0;
            }
            .avatar:first-child::before{
                content: '';
                width: 10px;
                height: 10px;
                background: blue;
                border-radius: 50%;
                position: absolute;
                z-index: 1;
                top: 3px;
                left: 40px;
            }
            .avatar img{
                border-radius: 50%;
            }
            avatar:nth-child(1) img{
                width: 10px;
                height: 10px;
                background blue;

            }
            `} </style>
        </Fragment>
    )
}

export default Users