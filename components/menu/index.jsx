import { Fragment } from "react";
import Buttons from "./buttons";
import Users from "./users";
import {users, icons} from '../utility/data'

const Menu = ({menuopen})=>{
    return(
        <Fragment>
            <div className="menu">
            <Buttons icons={icons}/>
            <Users images={users} />
            </div>
            <style jsx> {`
            .menu{
                height: 1090px;
                width: 75px;
                z-index: 0;
                justify-content: space-between;
                padding: 20px 5px;
                display: flex;
                position: relative;
                left: ${menuopen ? 15 : -95}px;
                flex-direction: column;
                border-right: 1px solid #ededed;
                transition: all .3s linear;
            }
            `} </style>
        </Fragment>
    )
}

export default Menu