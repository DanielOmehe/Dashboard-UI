import { Fragment, useState, useEffect } from "react";
import Button from '../utility/button';
import DropDown from "./dropdown";

const Avatar =({image, button})=>{
    const [state, setstate] = useState(false)
    const [progress, setProgress] = useState(0)
    const showDetails = ()=>{
            setstate(!state)
    }
    const hideDetails = ()=>{
        const close = window.addEventListener('click', ()=>{
            setstate(!state)
        })
    }

    useEffect(() => {
        hideDetails()
    }, [state])
    return(
        <Fragment>
            <div id="avatar">
                <img className="avatar" src={image} alt='avatar' />
                <Button onClick={showDetails} variant="plus">
                    <img src={button} alt='progress' />   
                </Button>
                <DropDown state={state} />
                <div id="progress"></div>
            </div>
            <style jsx>{`
            #avatar{
                height: 130px;
                width: 152px;                
                position: relative;
                margin: 0 48px 0 60px;
            }
            .plus{
                border: none;
                outline: none;
            }
            .avatar{
                position: absolute;
                left: 10px;
                top: 10px;
                border-radius: 50%;
                z-index: 2;
            }
            #progress{
                height: 130px;
                width: 130px;
                border-radius: 50%;
                position: relative;
                background: conic-gradient(#4d5bf9 ${progress * 3.6}deg, #eeeeee ${progress * 3.6}deg);
                display: grid;
                place-items: center;
                box-shadow: 0 0 4px rgba(0,0,0,.14);
            }
            #progress:before{
                content: '';
                width: 98%;
                height: 98%;
                background: #F7F8FA;
                border-radius: 50%;
                position: absolute;
            }
            `}</style>
        </Fragment>
    )
}

export default Avatar