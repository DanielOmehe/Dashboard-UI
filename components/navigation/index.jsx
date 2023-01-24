import { Fragment } from "react";
import Search from './search'
import Links from "./links";
import Icon from "../utility/icon";
import Text from "../utility/text";
import Button from "../utility/button";
import Account from "../utility/account";
import { links } from "../utility/data";

const Navigation = ({open, onClickHandler})=>{
    return(
        <Fragment>
            <nav className="navbar">
                <Button click={open} variant='hamburger-button' onClick={onClickHandler}> <Icon image='/images/hamburger.png' variant='hamburger' /> </Button>
                <Text variant='logo'> Constructor </Text>
                <ul className="nav-lists">
                    <Links 
                    variant='nav-list'
                    links={links}
                    />
                </ul>
                <Search image='/images/Icon.svg' variant='search-box' />
                <Account username='Clayton Santos' />
            </nav>
            <style jsx> {`
            .navbar{
                height: 85px;
                width: 100%;
                border-bottom: 1px solid #ededed;
                display: flex;
                align-items: center;
                z-index: 1;
                padding: 0;
            }
            .nav-lists{
                display: flex;
                align-items: center;
                justify-content: space-between;
                height: 30px;
                width: 441px;
                left: 290px;
                top: 10px;
                border-radius: 0px;
                margin-right: 93px;
            }

            @media only screen and (max-width: 1200;){
                .navbar{
                    width: 100%;
                    border: 1px solid green;
                }
            }
            `} </style>
        </Fragment>
    )
}

export default Navigation