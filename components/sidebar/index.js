import { Fragment } from "react";
import User from "./user";
import Cards from "./cards";
import Settings from "./settings";
import Ad from "./ads";
import { cards, settings } from "../utility/data";

const Sidebar = ({menuopen})=>{
    return(
        <Fragment>
            <div className="sidebar">
                <User
                    imageUrl='/images/userAvatar.png'
                    name='Clayton Santos'
                />
                <Cards cards={cards} />
                <Settings settings={settings} />
                <Ad
                    url='/images/illustration.png'
                    text='Do you need help?'
                    phonenumer='1-800-MY-BANK'
                />
            </div>
            <style jsx> {`
            .sidebar{
                height: 1075px;
                width: 300px;
                border-radius: 0px;                
                transition: all .2.5s linear;
                padding: 20px 12px 20px 32px;
                left: 12px;
                position: relative;
                border-left: 1px solid #ededed;
            }
            `} </style>
        </Fragment>
    )
}

export default Sidebar