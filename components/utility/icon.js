import {Fragment} from 'react'

const Icon = ({variant, image})=>{
    return(
        <Fragment>
            <img className={variant} src={image} alt='icon' />
            <style jsx> {`
            
            `} </style>
        </Fragment>
    )
}

export default Icon