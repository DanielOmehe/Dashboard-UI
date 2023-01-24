import { Fragment } from "react";

const Input = ({variant, type, onChange, text})=>{
    return(
        <Fragment>
            <input className={variant} type={type} onChange={onChange} placeholder={text} />
            <style jsx> {`
                .search-input{
                    width: 90%;
                    height: 100%;
                    background: #fff;
                    border-radius: 5px;
                    border: none;
                    border-top-right-radius: 100px;
                    border-bottom-right-radius: 100px;
                    outline: none;
                }
            `} </style>
        </Fragment>
    )
}

export default Input 