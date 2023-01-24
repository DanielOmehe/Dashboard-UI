import { Fragment } from "react";
import Input from "../utility/input"

const Search = ({image, variant})=>{
    return(
        <Fragment>
            <div className={variant}> 
                <img src={image} alt='search'/>
                <Input type='text' variant='search-input' text='search transactions and documents' />
            </div>
            <style jsx> {`
            .search-box{
                height: 50px;
                width: 308px;
                border-radius: 30px;
                display: flex;
                justify-content: space-between;
                align-item: center;
                background: #fff;
                padding: 0;
                box-shadow: 0 0 3px rgba(0,0,0,.34);
                overflow: hidden;
            }
            .search-box img{
                width: 25px;
                height: 25px;
                margin: 15px 5px 15px 15px;
            }
            `} </style>
        </Fragment>
    )
}

export default Search