import { Fragment, useState } from "react";

const Links = ({ links, variant })=>{
    return(
        <Fragment>
        {
            links.map(({text, url, id}) => {
                return(
                    <li key={id} className={variant}>
                        <a href={url}> {text} </a>
                    </li>
                )
            })
        }
        <style jsx> {`
        .nav-list{
            list-style: none;
        }
        .nav-list a{
            color: #7D8FB3;
            text-decoration: none;
            font-size: 13px;
        }
        .list-item{
            list-style: none;
            height: 20px;
            cursor: pointer;
        }
        .list-item a{
            text-decoration: none;
            font-size: 13px;
            color: #7D8FB3;
        }
        .list-item:nth-child(1){
            height: 44.11111068725586px;
            width: 72px;
            padding: 0;
            border-bottom: 2px solid red;
        }

        .list-item:nth-child(1) a{
            color: red;
        }
        `} </style>
        </Fragment>
    )
}

export default Links