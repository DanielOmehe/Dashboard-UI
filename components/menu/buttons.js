import { Fragment } from "react"
import Button from "../utility/button"

const Buttons = ({icons})=>{
    return (
        <Fragment>
            <div className="buttons">
            {
                icons.map(({url, id}) => {
                    return (
                        <Button key={id} variant='btn'> 
                            <img src={url} alt='icon' />
                        </Button>
                    )
                })
            }
            </div>
            <style jsx> {`
            .buttons{
                height: 400px;
                width: 50px;
            }
            `} </style>
        </Fragment>
    )
}

export default Buttons