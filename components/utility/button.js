import { Fragment } from 'react'

const Button = ({variant, onClick, children})=>{
    return(
        <Fragment>
            <button className={variant} onClick={onClick} > {children} </button>
            <style jsx> {`
            .hamburger-button{
                height: 50px;
                width: 50px;
                left: 25px;
                top: 0px;
                border-radius: 100px;
                position: relative;
                outline: none;
                border: none;
                background: #fff;
                box-shadow: 0 0 2px rgba(0,0,0,.34);
                margin-right: 35px;
                cursor: pointer;
            }
            .notification{
                width: 50px;
                height: 50px;
                top: 0px;
                right: -50px;
                margin: 0;
                border-radius: 100px;
                position: relative;
                border: 1px solid #fff;
                outline: none;
                background: #fff;
                box-shadow: 0 0 2px rgba(0,0,0,.34);
                margin-right: 35px;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .cancel{
                height: 50px;
                width: 50px;
                top: 0px;
                right: -35px;
                margin: 0;
                border-radius: 100px;
                position: relative;
                border: 1px solid #fff;
                outline: none;
                background: #fff;
                box-shadow: 0 0 2px rgba(0,0,0,.34);
                margin-right: 35px;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .btn{
                width: 50px;
                height: 50px;
                border-radius: 50%;
                margin: 10px 0;
                background: #fff;
                border: none;
                box-shadow: 0 0 3px rgba(0,0,0,.34);
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
            }
            .btn:nth-child(1){
                margin-top: 0;
            }
            .btn:nth-child(3)::before{
                content: '';
                width: 10px;
                height: 10px;
                background: red;
                border-radius: 50%;
                position: absolute;
                top: 0;
                left: 35px;
            }
            .add-user{
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background: #fff;
                border: none;
                box-shadow: 0 0 3px rgba(0,0,0,.34);
                cursor: pointer;
            }
            .more{
                height: 40px;
                width: 69px;
                left: 189px;
                top: 585px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 20px;
                padding: 10px 20px 10px 20px;
                background: #fff;
                box-shadow: 0 0 3px rgba(0,0,0,.5);
                border: 1px solid #fff;
                outline: none;
                font-size: 12px;
                font-weight: 900;
                color: #6B7A99;
                position: absolute;
                cursor: pointer;
                z-index: 1;
            }
            .plus{
                height: 40px;
                width: 40px;
                left: 112px;
                top: 45px;
                border-radius: 100px;
                background: #FF6633;
                display: flex;
                align-items: center;
                justify-content: center;
                position: absolute;
                z-index: 3;
                cursor: pointer;
            }
            .arrow{
                height: 40px;
                width: 40px;
                left: 228px;
                top: 0px;
                border-radius: 100px;
                background: #fff;
                box-shadow: 0 0 3px rgba(0,0,0,.23);
                border: none;
                outline: none;
                cursor: pointer;
            }
            .setting-icon{
                height: 40px;
                width: 40px;
                border-radius: 100px;
                background: #fff;
                border: none;
                outline: none;
                box-shadow: 0 0 3px rgba(0,0,0,.34);
            }
            `} </style>
        </Fragment>
    )
}

export default Button